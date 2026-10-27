import type { Metadata } from 'next';
import { SelfEmployedHealthLanding } from './self-employed-health-landing';

const pageUrl =
  'https://imagodeinsuranceadvisors.com/self-employed-health-insurance';
const description =
  'Explore medical coverage for your business of one and your family, including Cigna PPO network options and personalized rates. Apply online.';

export const metadata: Metadata = {
  title: 'Self-Employed Health Coverage',
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Self-Employed Health Coverage | Imago Dei Insurance Advisors',
    description,
    url: pageUrl,
    type: 'website',
  },
};

export default function SelfEmployedHealthInsurancePage() {
  return <SelfEmployedHealthLanding />;
}
