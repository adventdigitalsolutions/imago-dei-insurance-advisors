import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { organizationJsonLd } from '@/lib/organization';

const leagueSpartan = League_Spartan({
  variable: '--font-brand',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const SITE_URL = 'https://imagodeinsuranceadvisors.com';
const SITE_NAME = 'Imago Dei Insurance Advisors';
const DEFAULT_DESCRIPTION =
  'Flexible, affordable group health insurance for Christian-led businesses, churches, and nonprofits. No minimum enrollment or required employer contributions. Serving organizations across the U.S.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'group health insurance',
    'employee benefits',
    'Christian business insurance',
    'nonprofit health insurance',
    'church employee benefits',
    'small business health insurance',
    'flexible health benefits',
    'insurance advisors',
    'faith-based insurance',
    'self-funded health plans',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/people-chatting.png',
        width: 1200,
        height: 630,
        alt: 'Imago Dei Insurance Advisors — Flexible Health Benefits for Faith-Based Organizations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: ['/people-chatting.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  ...organizationJsonLd,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${leagueSpartan.variable} font-montserrat antialiased w-full`}
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
