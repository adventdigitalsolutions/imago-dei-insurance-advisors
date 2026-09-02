// Canonical Organization identity used across all structured data on the site.
// Other schema blocks should reference `organizationRef` ({"@id": ORGANIZATION_ID})
// instead of redeclaring name/address/phone/logo, so every page agrees on one identity.

export const SITE_URL = 'https://imagodeinsuranceadvisors.com';
export const ORGANIZATION_NAME = 'Imago Dei Insurance Advisors';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationJsonLd = {
  '@type': 'InsuranceAgency',
  '@id': ORGANIZATION_ID,
  name: ORGANIZATION_NAME,
  legalName: ORGANIZATION_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/imago-dei-logo.png`,
  image: `${SITE_URL}/imago-dei-logo.png`,
  description:
    'Flexible, affordable group health insurance for Christian-led businesses, churches, and nonprofits. No minimum enrollment or required employer contributions. Serving organizations across the U.S.',
  telephone: '+18322633552',
  email: 'info@imagodeinsurance.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/imago-dei-insurance-advisors/',
    'https://www.instagram.com/imagodeinsuranceadvisors/',
    'https://www.facebook.com/people/Imago-Dei-Insurance-Advisors/61557799479420',
    'https://youtube.com/@imagodeinsurance',
  ],
  priceRange: 'Free consultation',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

// Reference to the canonical Organization node, for use in other JSON-LD blocks
// (publisher, provider, author, worksFor, etc.) without re-declaring its fields.
export const organizationRef = { '@id': ORGANIZATION_ID };

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
