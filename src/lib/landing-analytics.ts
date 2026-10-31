export const LANDING_PAGE_ID = 'self-employed-health-insurance';

const LANDING_EVENTS = [
  'page_view',
  'household_selector_use',
  'application_start',
  'application_complete',
] as const;

export type LandingEvent = (typeof LANDING_EVENTS)[number];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function isLandingEvent(value: unknown): value is LandingEvent {
  return (
    typeof value === 'string' &&
    (LANDING_EVENTS as readonly string[]).includes(value)
  );
}

// Only the event name and page ID are ever sent. Never add household,
// application answers, or any medical/underwriting data here.
export function trackLandingEvent(eventName: LandingEvent) {
  const payload = { eventName, page: LANDING_PAGE_ID };

  window.dispatchEvent(new CustomEvent('imago:landing-event', { detail: payload }));
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: `landing_${eventName}`, landing_page: LANDING_PAGE_ID });
}

export function getZiteOrigin(applicationUrl?: string) {
  if (!applicationUrl) return undefined;
  try {
    return new URL(applicationUrl).origin;
  } catch {
    return undefined;
  }
}

// Zite can signal progress in two ways; both are accepted and de-duplicated:
// 1. postMessage from an embedded app: { source: 'zite', event: 'application_complete' }
// 2. a redirect back to this page with ?application=complete
export function listenForZiteEvents(ziteOrigin?: string) {
  const sent = new Set<LandingEvent>();
  const send = (eventName: LandingEvent) => {
    if (eventName === 'page_view' || eventName === 'household_selector_use') return;
    if (eventName === 'application_complete' && sent.has(eventName)) return;
    sent.add(eventName);
    trackLandingEvent(eventName);
  };

  const params = new URLSearchParams(window.location.search);
  if (params.get('application') === 'complete') {
    send('application_complete');
    params.delete('application');
    const query = params.toString();
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
    );
  }

  const onMessage = (event: MessageEvent) => {
    if (!ziteOrigin || event.origin !== ziteOrigin) return;
    const data = event.data;
    if (!data || typeof data !== 'object' || data.source !== 'zite') return;
    if (isLandingEvent(data.event)) send(data.event);
  };

  window.addEventListener('message', onMessage);
  return () => window.removeEventListener('message', onMessage);
}
