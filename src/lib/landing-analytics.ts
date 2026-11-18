export const LANDING_PAGE_ID = 'self-employed-health-insurance';
export const GOOGLE_ADS_ID = 'AW-18565734127';
export const GOOGLE_ADS_CONVERSION_LABEL = 'XLVnCLPQnbUdEO-96pRF';

export type LandingEvent = 'page_view' | 'application_start' | 'application_complete';

const attributionKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'gclid',
] as const;
const attributionStorageKey = 'self-employed-application-attribution';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLandingEvent(eventName: LandingEvent) {
  const payload = { eventName, page: LANDING_PAGE_ID };

  window.dispatchEvent(new CustomEvent('imago:landing-event', { detail: payload }));
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: `landing_${eventName}`, landing_page: LANDING_PAGE_ID });
}

export function applicationAttribution(
  search: string,
  storage: Pick<Storage, 'getItem' | 'setItem'>
) {
  const params = new URLSearchParams(search);
  const current = new URLSearchParams();
  for (const key of attributionKeys) {
    const value = params.get(key);
    if (value) current.set(key, value);
  }

  if (current.size) {
    storage.setItem(attributionStorageKey, current.toString());
    return current;
  }

  const stored = new URLSearchParams(storage.getItem(attributionStorageKey) ?? '');
  const attribution = new URLSearchParams();
  for (const key of attributionKeys) {
    const value = stored.get(key);
    if (value) attribution.set(key, value);
  }
  return attribution;
}

export function getApplicationAttribution() {
  try {
    return applicationAttribution(window.location.search, window.sessionStorage);
  } catch (error) {
    console.warn('Could not access application attribution storage:', error);
    return applicationAttribution(window.location.search, {
      getItem: () => null,
      setItem: () => {},
    });
  }
}

export function listenForFilloutSubmissions(
  iframe: HTMLIFrameElement,
  embedId: string,
  onSubmit: () => void
) {
  // Match Fillout's React embed protocol without forwarding its submission data.
  const submitted = new Set<string>();
  const origin = new URL(iframe.src).origin;
  const onMessage = (event: MessageEvent) => {
    if (event.origin !== origin || event.source !== iframe.contentWindow) return;
    const data = event.data;
    if (
      !data ||
      typeof data !== 'object' ||
      data.type !== 'form_submit' ||
      data.embedId !== embedId ||
      typeof data.submissionUuid !== 'string' ||
      !data.submissionUuid ||
      submitted.has(data.submissionUuid)
    ) return;
    submitted.add(data.submissionUuid);
    onSubmit();
  };
  window.addEventListener('message', onMessage);
  return () => window.removeEventListener('message', onMessage);
}

export function trackApplicationConversion() {
  trackLandingEvent('application_complete');
  if (!window.gtag) {
    console.warn('Google Ads tag is unavailable; application conversion was not sent.');
    return;
  }
  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    user_data: {},
  });
}
