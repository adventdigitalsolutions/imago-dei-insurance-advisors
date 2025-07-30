import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'ab6hy8ms',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
