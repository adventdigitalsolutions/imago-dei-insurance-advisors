import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { client } from '@/sanity/client';
import ResourceGrid from '@/components/page-components/resources/resource-grid';
import type { Resource } from '@/types/resource';
import { getCopy } from '@/getCopy';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Browse articles, guides, and case studies from Imago Dei Insurance Advisors. Practical insights on group health insurance, employee benefits, and stewardship for faith-based organizations.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources | Imago Dei Insurance Advisors',
    description:
      'Browse articles, guides, and case studies on group health insurance, employee benefits, and stewardship for Christian businesses, churches, and nonprofits.',
    url: 'https://imagodeinsuranceadvisors.com/resources',
  },
};

const RESOURCES_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, caseStudy}`;

// Force static generation
export const dynamic = 'force-static';

export default async function ResourcesPage() {
  let resources: Resource[] = [];

  try {
    resources = await client.fetch<Resource[]>(RESOURCES_QUERY);
  } catch (error) {
    console.error('Failed to fetch resources:', error);
    // Page will render with empty resources array
  }

  return (
    <main className="mt-20">
      {/* Hero Section */}
      <PageHeader title={getCopy('resourcesPage.title')} />
      <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end mb-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-medical-blue font-semibold hover:text-dark-blue transition-colors duration-150"
            >
              Browse the Case Studies Hub
              <FaArrowRight size={13} />
            </Link>
          </div>
          <ResourceGrid resources={resources} />
        </div>
      </div>
    </main>
  );
}
