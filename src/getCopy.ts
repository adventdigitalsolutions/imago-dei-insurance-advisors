import { allSiteCopy } from '@/site_copy';

export const getCopy = (key: keyof typeof allSiteCopy) => allSiteCopy[key];
