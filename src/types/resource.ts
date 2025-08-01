import { type SanityDocument } from 'next-sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { PortableTextBlock } from '@portabletext/types';

export interface Resource extends SanityDocument {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  image?: SanityImageSource;
  body?: PortableTextBlock[];
  caseStudy?: boolean;
}
