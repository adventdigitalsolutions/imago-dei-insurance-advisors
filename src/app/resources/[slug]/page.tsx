import { PortableText } from 'next-sanity';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import Link from 'next/link';
import Image from 'next/image';
import { Resource } from '@/types/resource';
import { notFound } from 'next/navigation';

const RESOURCE_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resource = await client.fetch<Resource | null>(
    RESOURCE_QUERY,
    await params,
    options
  );

  if (!resource) {
    notFound();
  }

  const resourceImageUrl = resource.image
    ? urlFor(resource.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 mt-24">
      <Link href="/resources" className="hover:underline mb-5">
        ← Back to resources
      </Link>
      {resourceImageUrl && (
        <Image
          src={resourceImageUrl}
          alt={resource.title}
          className="rounded-xl object-cover"
          width={550}
          height={310}
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{resource.title}</h1>
      <div className="prose">
        <p className="mb-6">
          Published: {new Date(resource.publishedAt).toLocaleDateString()}
        </p>
        {resource.body && Array.isArray(resource.body) && (
          <PortableText
            value={resource.body}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="mb-5 font-montserrat">{children}</p>
                ),
              },
            }}
          />
        )}
      </div>
    </main>
  );
}
