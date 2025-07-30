import { allSiteCopy } from '@/site_copy';

/**
 * Gets a string or object of strings from allSiteCopy using a dot-path or top-level key.
 * @param path Dot-path (e.g. 'hero.title') returns string, top-level key (e.g. 'navbarItems') returns object of strings
 */
export function getCopy<K extends keyof typeof allSiteCopy>(
  path: K
): (typeof allSiteCopy)[K];
export function getCopy(path: string): string;
export function getCopy(path: string): string | Record<string, string> {
  const keys = path.split('.');
  let result: unknown = allSiteCopy;
  for (const key of keys) {
    if (typeof result === 'object' && result !== null && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      throw new Error(`Invalid copy key: ${path}`);
    }
  }
  if (
    typeof result === 'string' ||
    (typeof result === 'object' && result !== null)
  ) {
    return result as string | Record<string, string>;
  }
  throw new Error(
    `Copy value for key '${path}' is not a string or object of strings.`
  );
}
