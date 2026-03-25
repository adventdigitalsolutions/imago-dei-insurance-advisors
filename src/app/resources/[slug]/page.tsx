import { PortableText } from 'next-sanity';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import Link from 'next/link';
import Image from 'next/image';
import { Resource } from '@/types/resource';
import { notFound } from 'next/navigation';

const RESOURCE_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const ALL_RESOURCES_QUERY = `*[_type == "post" && defined(slug.current)]{slug}`;

// Generate static params for all resources at build time
export async function generateStaticParams() {
  const resources = await client.fetch<{ slug: { current: string } }[]>(
    ALL_RESOURCES_QUERY
  );

  return resources.map((resource) => ({
    slug: resource.slug.current,
  }));
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resource = await client.fetch<Resource | null>(
    RESOURCE_QUERY,
    await params
  );

  if (!resource) {
    notFound();
  }

  const resourceImageUrl = resource.image
    ? urlFor(resource.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="bg-medical-sky/45 mt-24">
      <div className="container mx-auto min-h-screen max-w-3xl p-8 md:py-12 flex flex-col gap-4">
        <Link
          href="/resources"
          className="hover:underline mb-5 text-medical-blue hover:text-medical-navy transition-colors"
        >
          ← Back to resources
        </Link>
        <article className="bg-white border border-clinical-border rounded-2xl p-6 md:p-8 shadow-sm">
          {resourceImageUrl && (
            <Image
              src={resourceImageUrl}
              alt={resource.title}
              className="rounded-xl object-cover mb-6"
              width={550}
              height={310}
            />
          )}
          <h1 className="font-lora text-4xl font-bold mb-8 text-ink">{resource.title}</h1>
          <div className="prose prose-lg prose-p:text-muted-ink prose-headings:text-ink max-w-none">
            <p className="mb-6 text-muted-ink">
              Published: {new Date(resource.publishedAt).toLocaleDateString()}
            </p>
            {resource.body && Array.isArray(resource.body) && (
              <PortableText
                value={resource.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-5 leading-relaxed">{children}</p>
                    ),
                  },
                }}
              />
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
