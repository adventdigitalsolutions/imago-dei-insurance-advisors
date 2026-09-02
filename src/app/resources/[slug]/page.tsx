import type { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import Link from 'next/link';
import Image from 'next/image';
import { Resource } from '@/types/resource';
import { notFound } from 'next/navigation';
import {
  SITE_URL,
  organizationRef,
  buildBreadcrumbJsonLd,
} from '@/lib/organization';

const RESOURCE_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const ALL_RESOURCES_QUERY = `*[_type == "post" && defined(slug.current)]{slug}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resource = await client.fetch<Resource | null>(
    RESOURCE_QUERY,
    await params
  );

  if (!resource) return {};

  const imageUrl = resource.image
    ? urlFor(resource.image)?.width(1200).height(630).url()
    : undefined;

  return {
    title: resource.title,
    description: `${resource.title} — Read the full article from Imago Dei Insurance Advisors.`,
    alternates: {
      canonical: `/resources/${resource.slug.current}`,
    },
    openGraph: {
      title: resource.title,
      description: `${resource.title} — Read the full article from Imago Dei Insurance Advisors.`,
      url: `https://imagodeinsuranceadvisors.com/resources/${resource.slug.current}`,
      type: 'article',
      publishedTime: resource.publishedAt,
      ...(imageUrl && {
        images: [{ url: imageUrl, width: 1200, height: 630, alt: resource.title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

// Generate static params for all resources at build time
export async function generateStaticParams() {
  const resources =
    await client.fetch<{ slug: { current: string } }[]>(ALL_RESOURCES_QUERY);

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

  const articleImageUrl = resource.image
    ? urlFor(resource.image)?.width(1200).height(630).url()
    : undefined;

  const pageUrl = `${SITE_URL}/resources/${resource.slug.current}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    datePublished: resource.publishedAt,
    dateModified: resource.publishedAt,
    ...(articleImageUrl && { image: [articleImageUrl] }),
    author: organizationRef,
    publisher: organizationRef,
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: SITE_URL },
    { name: 'Resources', url: `${SITE_URL}/resources` },
    { name: resource.title, url: pageUrl },
  ]);

  return (
    <main className="bg-medical-sky/45 mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container mx-auto min-h-screen max-w-6xl p-8 md:py-12 flex flex-col gap-4">
        <Link
          href="/resources"
          className="hover:underline mb-5 text-[1.25rem] text-medical-blue hover:text-medical-navy transition-colors"
        >
          ← Back to resources
        </Link>
        <article className="bg-white border border-clinical-border rounded-2xl p-6 md:p-20 shadow-sm">
          {resourceImageUrl && (
            <Image
              src={resourceImageUrl}
              alt={resource.title}
              className="rounded-xl object-cover mb-12 mx-auto"
              width={650}
              height={410}
            />
          )}
          <h1 className="font-lora text-5xl font-bold mb-8 text-ink">
            {resource.title}
          </h1>
          <div className="prose prose-lg max-w-none prose-p:text-muted-ink prose-p:text-[1.2rem] prose-headings:text-ink prose-li:text-[1.2rem]">
            <p className="mb-6 text-[1.2rem] text-muted-ink">
              Published: {new Date(resource.publishedAt).toLocaleDateString()}
            </p>
            {resource.body && Array.isArray(resource.body) && (
              <PortableText
                value={resource.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-5 text-[1.2rem] leading-6">{children}</p>
                    ),
                    h1: ({ children }) => (
                      <h2 className="mb-3 text-[1.4rem] font-semibold leading-7 tracking-[0.01em] text-ink">
                        {children}
                      </h2>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mb-3 text-[1.4rem] font-semibold leading-7 tracking-[0.01em] text-ink">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mb-3 text-[1.4rem] font-semibold leading-7 tracking-[0.01em] text-ink">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="mb-3 text-[1.4rem] font-semibold leading-7 tracking-[0.01em] text-ink">
                        {children}
                      </h4>
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
