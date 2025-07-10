import { client } from '@/sanity/client';
import ResourceCard from '@/components/page-components/resources/resource-card';
import type { Resource } from '@/types/resource';
import { getCopy } from '@/getCopy';

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
      <div className="w-full relative overflow-clip">
        <div className="relative">
          <div className="p-8 py-12 md:py-20 md:p-20 bg-gradient-to-r from-royal-purple to-royal-purple/30 sm:to-royal-purple/0 flex items-center justify-center">
            <h1 className="text-white text-4xl lg:text-6xl font-montserrat font-bold tracking-[4px] w-full max-w-5xl uppercase">
              {getCopy('resourcesPage.title')}
            </h1>
          </div>
        </div>
      </div>
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
