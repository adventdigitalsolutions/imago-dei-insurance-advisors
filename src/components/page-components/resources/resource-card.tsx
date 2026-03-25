import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';
import type { Resource } from '@/types/resource';

interface ResourceCardProps {
	resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
	const resourceImageUrl = resource.image
		? urlFor(resource.image)?.width(400).height(300).url()
		: null;

	return (
		<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-clinical-border">
			<Link href={`/resources/${resource.slug.current}`} className="block">
				<div className="relative h-48 w-full bg-medical-sky">
					{resourceImageUrl ? (
						<Image
							src={resourceImageUrl}
							alt={resource.title}
							fill
							className="object-cover"
						/>
					) : (
						<div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-medical-sky to-white text-medical-blue/60">
							<svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
							</svg>
							<span className="text-sm font-medium">No Image</span>
						</div>
					)}
				</div>
				<div className="p-6">
					<h2 className="font-lora text-xl font-semibold text-ink mb-2 hover:text-medical-blue transition-colors duration-200">
						{resource.title}
					</h2>
					<p className="text-muted-ink text-sm">
						{new Date(resource.publishedAt).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>
				</div>
			</Link>
		</div>
	);
}
