import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const ADAM_EMAIL = 'adam@imagodeinsurance.com';
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://imagodeinsuranceadvisors.com';
// PDF should be placed at public/free-guide.pdf
const GUIDE_PDF_URL = `${SITE_URL}/free-guide.pdf`;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail =
    process.env.SENDGRID_FROM_EMAIL ?? 'hello@imagodeinsuranceadvisors.com';

  if (!apiKey) {
    console.error('SENDGRID_API_KEY is not set');
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

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required.' },
      { status: 400 }
    );
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
      // 2. Lead capture notification to Adam
      {
        to: ADAM_EMAIL,
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
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
