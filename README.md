# Imago Dei Insurance Advisors Website

Production marketing site for Imago Dei Insurance Advisors, built with Next.js App Router.

The project includes:

- Marketing pages (home, solutions, about, FAQ)
- A resources/blog section powered by Sanity (`post` documents)
- A lead magnet funnel with Cloudflare Turnstile + SendGrid email delivery
- A health endpoint for environment and asset readiness checks

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Sanity (`next-sanity`, `@sanity/image-url`) for resources content
- SendGrid for transactional email delivery
- Cloudflare Turnstile for bot protection

## Prerequisites

- Node.js 20+
- Yarn 1.22.x

This repo is intentionally locked to Yarn. `npm install` is blocked by a preinstall check.

## Quick Start

1. Install dependencies:

```bash
yarn install
```

2. Create local env file (if you do not already have one):

```bash
cp .env.example .env.local
```

3. Fill in required environment variables (see Environment Variables section below).

4. Start the dev server:

```bash
yarn dev
```

5. Open:

```text
http://localhost:3000
```

## Scripts

- `yarn dev` starts local development server
- `yarn build` creates production build
- `yarn start` runs the production server
- `yarn lint` runs ESLint

## Environment Variables

Defined in `.env.local` for local development and in your host (Preview/Production) for deployed environments.

| Variable                         | Required   | Purpose                                                       |
| -------------------------------- | ---------- | ------------------------------------------------------------- |
| `SENDGRID_API_KEY`               | Yes        | SendGrid API key used by `/api/lead-magnet`                   |
| `SENDGRID_FROM_EMAIL`            | Yes        | Verified SendGrid sender identity                             |
| `NEXT_PUBLIC_SITE_URL`           | Yes        | Public site origin used to build guide download URL in emails |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Yes        | Client-side Turnstile key for lead magnet form                |
| `TURNSTILE_SECRET_KEY`           | Yes (prod) | Server-side Turnstile verification secret                     |
| `ALERT_WEBHOOK_URL`              | No         | Optional webhook for alerting on lead magnet failures         |

Notes:

- `SENDGRID_FROM_EMAIL` must be a verified sender/domain in SendGrid.
- In production, Turnstile keys are enforced by the API route.
- `ALERT_WEBHOOK_URL` can be left empty.

## Required Public Asset

The lead magnet download depends on this PDF existing in `public/`:

- `The Small Business Owner’s Guide to Employee Benefits.pdf`

The client and API both point to this file for user download.

## Project Structure (High-Level)

- `src/app/` App Router pages and API routes
- `src/app/api/lead-magnet/route.ts` lead capture + Turnstile verify + SendGrid emails
- `src/app/api/health/route.ts` readiness checks (env + PDF availability)
- `src/app/resources/` resource index and dynamic slug pages
- `src/components/page-components/homepage/lead-magnet-section.tsx` lead magnet modal/form UX
- `src/site_copy.ts` centralized static marketing copy dictionary
- `src/getCopy.ts` helper for typed copy lookup
- `src/sanity/` Sanity client + image URL builder

## How Content Works

### Static Marketing Copy

Most site copy is centralized in `src/site_copy.ts` and consumed via `getCopy()`.

Benefits:

- Consistent wording across sections
- Easy non-structural content edits in one place
- Avoids hardcoded copy spread throughout components

### Resources / Blog Content

Resources are queried from Sanity `post` documents.

- Resources index page fetches latest posts (up to 12), ordered by `publishedAt`
- Dynamic route `src/app/resources/[slug]/page.tsx` renders each post
- `generateStaticParams()` prebuilds known post pages at build time
- Portable Text body content is rendered with `next-sanity`

Sanity client configuration is in `src/sanity/client.ts`.

## Lead Magnet Flow (End-to-End)

1. User opens lead magnet modal from homepage section.
2. User enters name/email and completes Turnstile challenge.
3. Client posts to `POST /api/lead-magnet`.
4. API route:
   - Applies in-memory IP rate limiting (5 requests / 15 minutes)
   - Verifies Turnstile token (when configured)
   - Sends two emails via SendGrid:
     - Delivery email to the lead with PDF link
     - Internal notification email to team inbox
   - Returns `{ success: true, downloadUrl }` on success
5. Client triggers automatic PDF download and shows success state.

## API Endpoints

### `POST /api/lead-magnet`

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "turnstileToken": "token-from-widget"
}
```

Success response:

```json
{
  "success": true,
  "downloadUrl": "/The%20Small%20Business%20Owner%E2%80%99s%20Guide%20to%20Employee%20Benefits.pdf"
}
```

Common failure statuses:

- `400` invalid input or failed security check
- `429` rate limited
- `500` missing required server configuration
- `502` SendGrid delivery failure

### `GET /api/health`

Checks:

- SendGrid key presence
- sender email format
- site URL format
- Turnstile key presence
- guide PDF file presence in `public/`

Returns:

- `200` if all checks pass
- `503` if any check fails

Quick check:

```bash
curl -s http://localhost:3000/api/health | jq
```

## SEO + Metadata

- Global metadata + JSON-LD defined in `src/app/layout.tsx`
- Dynamic sitemap generated in `src/app/sitemap.ts`
- Additional sitemap config exists in `next-sitemap.config.js`
- Security headers are configured in `next.config.ts`

## Deployment Checklist

1. Configure all required environment variables in hosting provider.
2. Ensure the guide PDF exists in `public/` with the expected filename.
3. Verify SendGrid sender is authenticated.
4. Confirm Turnstile site key and secret key pair are valid for your domain.
5. Run:

```bash
yarn build
yarn start
```

6. Validate post-deploy:
   - `GET /api/health` returns `ok: true`
   - Lead magnet form submits successfully
   - Both emails are delivered
   - PDF auto-download works

## Troubleshooting

- Build/install fails with package manager warning:
  - Use `yarn install` (not npm).
- Lead magnet returns `500`:
  - Check `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, and Turnstile env vars.
- Lead magnet returns `429` during repeated testing:
  - Wait for rate-limit window to reset (15 minutes) or test from another IP.
- Health endpoint reports missing PDF:
  - Confirm the guide filename exists in `public/` and matches expected naming.
- Resource pages are empty:
  - Verify Sanity dataset content has `post` docs with `slug.current`.
