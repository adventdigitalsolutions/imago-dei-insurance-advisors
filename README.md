This is a [Next.js](https://nextjs.org) project for Imago Dei Insurance Advisors.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Lead Magnet Configuration

Set these environment variables before testing the lead magnet flow:

```bash
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=verified-sender@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
ALERT_WEBHOOK_URL=
```

Notes:

- `SENDGRID_FROM_EMAIL` must be a valid, verified sender identity in SendGrid.
- `ALERT_WEBHOOK_URL` is optional. If set, API failures will post alerts there.
- The PDF file must exist at `public/The Small Business Owner’s Guide to Employee Benefits.pdf`.

## Lead Magnet Health Check

The endpoint `GET /api/health` validates lead magnet readiness without exposing secret values.

What it checks:

- Required environment variable presence/format
- Turnstile key presence
- PDF file existence in `public/`

Response behavior:

- `200` when all checks pass
- `503` when any check fails

Example:

```bash
curl -s http://localhost:3000/api/health | jq
```

Expected response shape:

```json
{
  "ok": true,
  "timestamp": "2026-04-18T12:34:56.000Z",
  "service": "lead-magnet",
  "checks": {
    "sendgridApiKey": true,
    "sendgridFromEmail": true,
    "siteUrl": true,
    "turnstileSiteKey": true,
    "turnstileSecretKey": true,
    "pdfPresent": true
  },
  "issues": []
}
```

## Lead Magnet Functional Test

1. Click Download on the homepage.
2. Complete bot check and submit name/email.
3. Confirm thank-you message appears.
4. Confirm PDF auto-download starts.
5. Confirm lead receives the email containing the PDF link.
6. Confirm your internal notification email is received.

## Deploy

Set the same environment variables in your hosting provider for each environment (Preview and Production), then run:

```bash
npm run build
npm run start
```
