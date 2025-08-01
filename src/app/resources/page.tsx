import { client } from '@/sanity/client';
import ResourceGrid from '@/components/page-components/resources/resource-grid';
import type { Resource } from '@/types/resource';
import { getCopy } from '@/getCopy';
import { PageHeader } from '@/components/page-header';

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
    <main className="mt-24">
      {/* Hero Section */}
      <PageHeader title={getCopy('resourcesPage.title')} />
      <div className="container mx-auto min-h-screen max-w-6xl p-8">
        <ResourceGrid resources={resources} />
      </div>
    </main>
  );
}
