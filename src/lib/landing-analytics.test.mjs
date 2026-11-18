import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  applicationAttribution,
  listenForFilloutSubmissions,
  trackApplicationConversion,
} from './landing-analytics.ts';

function storage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

test('retains the latest campaign in the tab and passes only allowed parameters', () => {
  const store = storage();
  const first = applicationAttribution(
    '?utm_source=google&utm_medium=cpc&utm_campaign=flight&utm_content=123&gclid=click&email=private',
    store
  );
  assert.equal(first.toString(), 'utm_source=google&utm_medium=cpc&utm_campaign=flight&utm_content=123&gclid=click');
  assert.equal(applicationAttribution('', store).toString(), first.toString());
  assert.equal(applicationAttribution('?utm_source=other', store).toString(), 'utm_source=other');
  assert.equal(applicationAttribution('', store).toString(), 'utm_source=other');
});

test('accepts only submissions from the active Fillout iframe and deduplicates by submission', () => {
  const listeners = new Map();
  globalThis.window = {
    addEventListener: (name, listener) => listeners.set(name, listener),
    removeEventListener: (name) => listeners.delete(name),
  };
  const source = {};
  const iframe = { src: 'https://imagodei.fillout.com/t/form', contentWindow: source };
  let count = 0;
  const cleanup = listenForFilloutSubmissions(iframe, 'embed', () => count++);
  const send = (overrides = {}, dataOverrides = {}) => listeners.get('message')({
    origin: 'https://imagodei.fillout.com',
    source,
    ...overrides,
    data: { type: 'form_submit', embedId: 'embed', submissionUuid: 'one', ...dataOverrides },
  });
  send({ origin: 'https://evil.example' });
  send({ source: {} });
  send({}, { type: 'page_change' });
  send({}, { embedId: 'other' });
  send({}, { submissionUuid: '' });
  assert.equal(count, 0);
  send({}, { answers: { email: 'private' } });
  send();
  send({}, { submissionUuid: 'two' });
  assert.equal(count, 2);
  cleanup();
  assert.equal(listeners.has('message'), false);
});

test('sends the configured Google Ads conversion and no submission data', () => {
  const calls = [];
  globalThis.window = {
    dispatchEvent: () => {},
    gtag: (...args) => calls.push(args),
  };
  trackApplicationConversion();
  assert.deepEqual(calls, [
    ['event', 'conversion', {
      send_to: 'AW-18565734127/XLVnCLPQnbUdEO-96pRF',
      user_data: {},
    }],
  ]);
});
