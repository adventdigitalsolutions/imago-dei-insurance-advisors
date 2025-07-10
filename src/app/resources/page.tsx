import { client } from '@/sanity/client';
import ResourceCard from '@/components/page-components/resources/resource-card';
import type { Resource } from '@/types/resource';
import { getCopy } from '@/getCopy';
import { PageHeader } from '@/components/page-header';

const RESOURCES_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image}`;

const options = { next: { revalidate: 30 } };

export default async function ResourcesPage() {
  const resources = await client.fetch<Resource[]>(
    RESOURCES_QUERY,
    {},
    options
  );

  return (
    <main className="mt-24">
      {/* Hero Section */}
      <PageHeader title={getCopy('resourcesPage.title')} />
      <div className="container mx-auto min-h-screen max-w-6xl p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource._id} resource={resource} />
          ))}
        </div>
      </div>
    </main>
  );
}
