import type { Metadata } from 'next';
import { client } from '@/sanity/client';
import ResourceCard from '@/components/page-components/resources/resource-card';
import type { Resource } from '@/types/resource';
import { PageHeader } from '@/components/page-header';
import { SITE_URL, buildBreadcrumbJsonLd } from '@/lib/organization';

export const metadata: Metadata = {
	title: 'Case Studies',
	description:
		'Real client outcomes from Imago Dei Insurance Advisors — see how Christian businesses, churches, and nonprofits designed flexible, sustainable group health benefits.',
	alternates: { canonical: '/case-studies' },
	openGraph: {
		title: 'Case Studies | Imago Dei Insurance Advisors',
		description:
			'Real client outcomes from Imago Dei Insurance Advisors — see how Christian businesses, churches, and nonprofits designed flexible, sustainable group health benefits.',
		url: `${SITE_URL}/case-studies`,
	},
};

const CASE_STUDIES_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && caseStudy == true
]|order(publishedAt desc){_id, title, slug, publishedAt, image, caseStudy}`;

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
	{ name: 'Home', url: SITE_URL },
	{ name: 'Resources', url: `${SITE_URL}/resources` },
	{ name: 'Case Studies', url: `${SITE_URL}/case-studies` },
]);

// Force static generation
export const dynamic = 'force-static';

export default async function CaseStudiesPage() {
	let caseStudies: Resource[] = [];

	try {
		caseStudies = await client.fetch<Resource[]>(CASE_STUDIES_QUERY);
	} catch (error) {
		console.error('Failed to fetch case studies:', error);
		// Page will render with empty case studies array
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			<main className="mt-20">
				<PageHeader
					title="Case Studies"
					subtitle="Real outcomes from organizations we've partnered with."
				/>
				<div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{caseStudies.map((caseStudy) => (
								<ResourceCard key={caseStudy._id} resource={caseStudy} />
							))}
						</div>
						{caseStudies.length === 0 && (
							<div className="text-center py-12">
								<p className="text-muted-ink text-xl">
									No case studies found.
								</p>
							</div>
						)}
					</div>
				</div>
			</main>
		</>
	);
}
