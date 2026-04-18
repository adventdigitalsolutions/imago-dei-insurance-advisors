import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const ADAM_EMAIL = 'adam@imagodeinsurance.com';
const DAVID_EMAIL = 'david@imagodeinsurance.com';
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://imagodeinsuranceadvisors.com';
const GUIDE_PDF_PATH =
  '/The%20Small%20Business%20Owner%E2%80%99s%20Guide%20to%20Employee%20Benefits.pdf';
const GUIDE_PDF_URL = `${SITE_URL}${GUIDE_PDF_PATH}`;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitBuckets = new Map<
  string,
  { count: number; windowStart: number }
>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req: NextRequest): string {
  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp;

  const xForwardedFor = req.headers.get('x-forwarded-for');
  if (xForwardedFor) return xForwardedFor.split(',')[0].trim();

  return 'unknown';
}

function pruneRateLimitBuckets() {
  const now = Date.now();

  if (rateLimitBuckets.size < 1000) {
    return;
  }

  for (const [key, value] of rateLimitBuckets.entries()) {
    if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitBuckets.delete(key);
    }
  }
}

function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(clientId);

  if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(clientId, { count: 1, windowStart: now });
    return false;
  }

  bucket.count += 1;
  rateLimitBuckets.set(clientId, bucket);

  return bucket.count > RATE_LIMIT_MAX_REQUESTS;
}

async function sendAlert(message: string, details?: Record<string, unknown>) {
  const webhookUrl = process.env.ALERT_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  const text = details
    ? `${message}\n${JSON.stringify(details, null, 2)}`
    : message;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  } catch (alertError) {
    console.error('Failed to send webhook alert', alertError);
  }
}

async function verifyTurnstileToken({
  token,
  secret,
  clientIp,
}: {
  token: string;
  secret: string;
  clientIp?: string;
}): Promise<boolean> {
  const formData = new URLSearchParams();
  formData.set('secret', secret);
  formData.set('response', token);
  if (clientIp) {
    formData.set('remoteip', clientIp);
  }

  const verificationResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    }
  );

  if (!verificationResponse.ok) {
    return false;
  }

  const verificationData = (await verificationResponse.json()) as {
    success?: boolean;
  };

  return Boolean(verificationData.success);
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail =
    process.env.SENDGRID_FROM_EMAIL ?? 'hello@imagodeinsuranceadvisors.com';
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  const clientIp = getClientIp(req);

  pruneRateLimitBuckets();

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  if (process.env.NODE_ENV === 'production' && !turnstileSecret) {
    const errMsg = 'TURNSTILE_SECRET_KEY is not set';
    console.error(errMsg);
    await sendAlert(errMsg, { clientIp });
    return NextResponse.json(
      { error: 'Security service not configured.' },
      { status: 500 }
    );
  }

  if (process.env.NODE_ENV === 'production' && !turnstileSiteKey) {
    const errMsg = 'NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set';
    console.error(errMsg);
    await sendAlert(errMsg, { clientIp });
    return NextResponse.json(
      { error: 'Security service not configured.' },
      { status: 500 }
    );
  }

  if (!apiKey) {
    console.error('SENDGRID_API_KEY is not set');
    await sendAlert('SENDGRID_API_KEY is not set', { clientIp });
    return NextResponse.json(
      { error: 'Email service not configured.' },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, email } = body as Record<string, unknown>;
  const turnstileToken = (body as Record<string, unknown>).turnstileToken;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required.' },
      { status: 400 }
    );
  }

  if (turnstileSecret && turnstileSiteKey) {
    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return NextResponse.json(
        { error: 'Security check is required.' },
        { status: 400 }
      );
    }

    const isTokenValid = await verifyTurnstileToken({
      token: turnstileToken,
      secret: turnstileSecret,
      clientIp: clientIp !== 'unknown' ? clientIp : undefined,
    });

    if (!isTokenValid) {
      return NextResponse.json(
        { error: 'Security check failed. Please try again.' },
        { status: 400 }
      );
    }
  }

  // Sanitize — prevent header injection
  const safeName = name
    .trim()
    .slice(0, 100)
    .replace(/[\r\n]/g, '');
  const safeEmail = email.trim().slice(0, 254).toLowerCase();

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send([
      // 1. Delivery email to the user
      {
        to: safeEmail,
        from: { name: 'Imago Dei Insurance Advisors', email: fromEmail },
        subject:
          'Your Free Guide: A Practical Framework for Stewardship, Cost Control, and Care',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #253b8e;">
            <h2 style="font-size: 22px; margin-bottom: 8px;">Hi ${safeName},</h2>
            <p style="font-size: 16px; color: #5a68a2; line-height: 1.6;">
              Thank you for downloading our free guide. We hope it gives you a clear,
              practical framework for stewarding your organization's resources wisely.
            </p>
            <div style="margin: 32px 0;">
              <a
                href="${GUIDE_PDF_URL}"
                style="background-color: #4f63ff; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: bold;"
              >
                Download Your Free Guide
              </a>
            </div>
            <p style="font-size: 14px; color: #5a68a2; line-height: 1.6;">
              If you have questions or want to talk through what you read, we'd love to connect.
              You can <a href="https://calendly.com/david-sog0/30min" style="color: #4f63ff;">book a free consultation</a> any time.
            </p>
            <p style="font-size: 14px; color: #5a68a2; margin-top: 32px;">
              —The Imago Dei Insurance Advisors Team
            </p>
          </div>
        `,
      },
      // 2. Lead capture notification to David and Adam
      {
        to: [ADAM_EMAIL, DAVID_EMAIL],
        from: { name: 'Imago Dei Lead Capture', email: fromEmail },
        subject: `New Lead: ${safeName} downloaded the Free Guide`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #253b8e;">
            <h2 style="font-size: 20px; margin-bottom: 16px;">New Free Guide Download</h2>
            <table style="border-collapse: collapse; width: 100%;">
              <tr>
                <td style="padding: 8px 12px; background: #edf0ff; font-weight: bold; width: 120px;">Name</td>
                <td style="padding: 8px 12px; border: 1px solid #d9e0ff;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #edf0ff; font-weight: bold;">Email</td>
                <td style="padding: 8px 12px; border: 1px solid #d9e0ff;">
                  <a href="mailto:${safeEmail}" style="color: #4f63ff;">${safeEmail}</a>
                </td>
              </tr>
            </table>
          </div>
        `,
      },
    ]);
  } catch (err) {
    console.error('SendGrid error:', err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    await sendAlert('Lead magnet email delivery failed', {
      errorMessage,
      safeEmail,
      safeName,
      clientIp,
    });
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, downloadUrl: GUIDE_PDF_PATH });
}
