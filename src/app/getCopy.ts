import * as siteCopy from '../site_copy';

export function getCopy(key: keyof typeof siteCopy) {
  return siteCopy[key];
}
