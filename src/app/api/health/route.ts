import { access } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

type HealthIssue = {
  key: string;
  message: string;
};

const PDF_FILENAME =
  "The Small Business Owner's Guide to Employee Benefits.pdf";

function isNonEmpty(value: string | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isHttpUrl(value: string | undefined): boolean {
  if (!isNonEmpty(value)) return false;

  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isEmail(value: string | undefined): boolean {
  if (!isNonEmpty(value)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

async function pdfExists(): Promise<boolean> {
  const pdfPath = path.join(process.cwd(), 'public', PDF_FILENAME);

  try {
    await access(pdfPath);
    return true;
  } catch {
    return false;
  }
}

export async function GET() {
  const checks = {
    sendgridApiKey: isNonEmpty(process.env.SENDGRID_API_KEY),
    sendgridFromEmail: isEmail(process.env.SENDGRID_FROM_EMAIL),
    siteUrl: isHttpUrl(process.env.NEXT_PUBLIC_SITE_URL),
    turnstileSiteKey: isNonEmpty(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY),
    turnstileSecretKey: isNonEmpty(process.env.TURNSTILE_SECRET_KEY),
    pdfPresent: await pdfExists(),
  };

  const issues: HealthIssue[] = [];

  if (!checks.sendgridApiKey) {
    issues.push({
      key: 'SENDGRID_API_KEY',
      message: 'Missing or empty SENDGRID_API_KEY.',
    });
  }

  if (!checks.sendgridFromEmail) {
    issues.push({
      key: 'SENDGRID_FROM_EMAIL',
      message: 'SENDGRID_FROM_EMAIL must be a valid email address.',
    });
  }

  if (!checks.siteUrl) {
    issues.push({
      key: 'NEXT_PUBLIC_SITE_URL',
      message: 'NEXT_PUBLIC_SITE_URL must be a valid http(s) URL.',
    });
  }

  if (!checks.turnstileSiteKey) {
    issues.push({
      key: 'NEXT_PUBLIC_TURNSTILE_SITE_KEY',
      message: 'Missing or empty NEXT_PUBLIC_TURNSTILE_SITE_KEY.',
    });
  }

  if (!checks.turnstileSecretKey) {
    issues.push({
      key: 'TURNSTILE_SECRET_KEY',
      message: 'Missing or empty TURNSTILE_SECRET_KEY.',
    });
  }

  if (!checks.pdfPresent) {
    issues.push({
      key: 'PDF_FILE',
      message: `Missing PDF in public/${PDF_FILENAME}.`,
    });
  }

  const healthy = issues.length === 0;

  return NextResponse.json(
    {
      ok: healthy,
      timestamp: new Date().toISOString(),
      service: 'lead-magnet',
      checks,
      issues,
    },
    {
      status: healthy ? 200 : 503,
      headers: { 'Cache-Control': 'no-store' },
    }
  );
}
