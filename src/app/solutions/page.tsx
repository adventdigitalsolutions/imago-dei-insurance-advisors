import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Button } from '@/components/button';
import {
  SITE_URL,
  organizationRef,
  buildBreadcrumbJsonLd,
} from '@/lib/organization';

export const metadata: Metadata = {
  title: 'Health Benefit Solutions',
  description:
    'Explore flexible group health insurance solutions for businesses, churches, and nonprofits — with no minimum enrollment requirements and no required employer contributions. Built for organizations at every stage.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Health Benefit Solutions | Imago Dei Insurance Advisors',
    description:
      'Flexible group health insurance with no minimums and no required employer contributions. Designed for Christian businesses, churches, and nonprofits of every size.',
    url: 'https://imagodeinsuranceadvisors.com/solutions',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Group Health Insurance Brokerage',
  name: 'Health Benefit Solutions',
  url: `${SITE_URL}/solutions`,
  description:
    'Flexible group health insurance solutions for businesses, churches, and nonprofits, with no minimum enrollment requirements and no required employer contributions.',
  provider: organizationRef,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL },
  { name: 'Solutions', url: `${SITE_URL}/solutions` },
]);

const CALENDLY_URL = 'https://calendly.com/david-sog0/30min?month=2025-07';
const FILLOUT_URL = 'https://imagodei.fillout.com/id-interest';
const QUOTE_URL = 'https://imagodei.fillout.com/id-1';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 mb-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <FaCheckCircle
            className="text-medical-blue flex-shrink-0 mt-1"
            size={18}
          />
          <span className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

const implementationCards = [
  {
    title: 'Dedicated Support Team',
    body: 'Direct access to a real advisor who knows your account.',
  },
  {
    title: 'Enrollment Technology',
    body: 'Simple tools that integrate with your payroll—without extra lift from your team.',
  },
  {
    title: 'Ongoing HR Advisory',
    body: 'We help answer employee questions and support leadership—so you’re not fielding everything yourself.',
  },
  {
    title: 'Quarterly Strategy Reviews',
    body: 'We proactively evaluate and guide next steps—no need to chase it down.',
  },
  {
    title: 'Strategic Renewals',
    body: 'We bring options and recommendations—rather than just presenting increases.',
  },
];

export default function SolutionsPage() {
  return (
    <div className="mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <div className="w-full relative overflow-clip">
        <div className="py-16 md:py-28 px-6 bg-gradient-to-br from-navy via-medical-navy to-dark-blue border-b border-clinical-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-5xl">
              <p className="text-medical-blue/80 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                Solutions
              </p>
              <h1 className="text-white text-5xl lg:text-7xl font-lora font-bold tracking-[-0.04em] mb-6 leading-tight">
                Flexible Health Benefits Built for Organizations at Every Stage
              </h1>
              <p className="text-white/75 text-xl lg:text-2xl leading-relaxed max-w-2xl">
                Providing meaningful employee benefits shouldn&apos;t require
                rigid rules, rising costs, or limited support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-white py-20 sm:py-28 px-6 border-b border-clinical-border/60">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Our Approach
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
              We partner with faith-minded leaders, Christian business owners,
              churches, and nonprofits to design flexible, sustainable health
              and employee benefits. We focus on caring for employees while
              stewarding resources wisely.
            </p>
            <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
              Whether you&apos;re offering benefits for the first time or
              seeking a more strategic approach, we tailor solutions to your
              organization&apos;s size, goals, and values.
            </p>
            <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
              We also help carry the day-to-day responsibility&mdash;so
              you&apos;re not navigating benefits alone.
            </p>
            <p className="text-[1.1rem] sm:text-[1.15rem] font-semibold text-medical-navy leading-relaxed">
              Caring for your people through wise benefits decisions directly
              supports the mission and purpose you&apos;ve been called to lead.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions by Organization Size */}
      <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-4 max-w-2xl">
            Solutions by Organization Size
          </h2>
          <p className="text-[1.15rem] sm:text-[1.2rem] font-semibold text-medical-navy mb-3">
            Designed Around Your Organization&apos;s Needs
          </p>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed max-w-2xl mb-12">
            Different organizations face different challenges. Our approach
            adapts to where you are today—and where you&apos;re going.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Solopreneurs */}
            <div className="bg-white rounded-2xl p-8 border border-clinical-border shadow-sm flex flex-col">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-medical-blue mb-3">
                Solopreneurs &amp; Business Owners
              </p>
              <h3 className="font-lora text-2xl font-bold tracking-[-0.03em] text-medical-navy leading-tight mb-5">
                Group Health Coverage for Faith-Minded Business Owners
              </h3>
              <div className="flex flex-col gap-3 mb-5 flex-1">
                <p className="text-[0.97rem] text-muted-ink leading-relaxed">
                  Many solopreneurs are limited to high-cost individual marketplace
                  plans. If you have an EIN, we can often provide access to group
                  major medical coverage on national provider networks.
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {[
                    'Access group health coverage as a business owner',
                    'Avoid marketplace limitations',
                    'Choose plans aligned with your needs and values',
                    'Build a strong benefits foundation as you grow',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-muted-ink text-[0.9rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={QUOTE_URL} target="_blank">
                <Button className="shadow-md min-h-12 px-6 text-[0.97rem] w-full justify-center">
                  <span className="flex items-center gap-2 py-0.5">
                    Get a Quote for Your Business
                    <FaArrowRight size={13} />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Small Businesses */}
            <div className="bg-white rounded-2xl p-8 border border-clinical-border shadow-sm flex flex-col">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-medical-blue mb-3">
                Small Businesses (2–9 Employees)
              </p>
              <h3 className="font-lora text-2xl font-bold tracking-[-0.03em] text-medical-navy leading-tight mb-5">
                Flexible Health and Employee Benefits for Small Teams
              </h3>
              <div className="flex flex-col gap-3 mb-5 flex-1">
                <p className="text-[0.97rem] text-muted-ink leading-relaxed">
                  Many small organizations want to offer benefits but run into
                  participation requirements, contribution rules, and rising costs.
                  We remove those barriers&mdash;so offering benefits doesn&apos;t
                  become another thing you have to manage.
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {[
                    'Group health insurance with no minimum enrollment requirements',
                    'Avoid rigid contribution rules',
                    'Meaningful coverage even with a small team',
                    'Alternative plan options to manage costs',
                    'Proactive guidance instead of just renewal notices',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-muted-ink text-[0.9rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={CALENDLY_URL} target="_blank">
                <Button className="shadow-md min-h-12 px-6 text-[0.97rem] w-full justify-center">
                  <span className="flex items-center gap-2 py-0.5">
                    Schedule Free Consultation
                    <FaArrowRight size={13} />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mid-Size Organizations */}
            <div className="bg-white rounded-2xl p-8 border border-clinical-border shadow-sm flex flex-col">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-medical-blue mb-3">
                Mid-Size Organizations (10–500 Employees)
              </p>
              <h3 className="font-lora text-2xl font-bold tracking-[-0.03em] text-medical-navy leading-tight mb-5">
                Strategic Health and Benefits Support for Growing Organizations
              </h3>
              <div className="flex flex-col gap-3 mb-5 flex-1">
                <p className="text-[0.97rem] text-muted-ink leading-relaxed">
                  Growing organizations often have benefits in place but lack
                  strategic support. We provide expanded options and hands-on
                  support&mdash;so benefits aren&apos;t another thing
                  your team has to manage.
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {[
                    'Access to multiple carrier options',
                    'Flexible PPO and HDHP plan designs',
                    'Enrollment technology connected to payroll',
                    'Ongoing advisory and strategy sessions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-muted-ink text-[0.9rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={CALENDLY_URL} target="_blank">
                <Button className="shadow-md min-h-12 px-6 text-[0.97rem] w-full justify-center">
                  <span className="flex items-center gap-2 py-0.5">
                    Schedule Free Benefits Review
                    <FaArrowRight size={13} />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Benefits / Major Medical / Complete Benefits — card grid */}
      <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            What You Get
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-4 max-w-2xl">
            Everything you need to offer and manage benefits&mdash;without added
            complexity
          </h2>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-10 max-w-2xl">
            Whatever your organization&apos;s size, we provide:
          </p>
          <ul className="flex flex-col gap-4 max-w-2xl">
            {[
              'Flexible plan designs (PPO, HDHP, and alternative structures)',
              'Full suite of benefits including medical, dental, vision, life, and disability',
              'Renewal strategy with real alternatives—not just rate increases',
              'Ongoing guidance to manage costs and claims effectively',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle
                  className="text-medical-blue flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Implementation & Ongoing Support */}
      <div className="bg-gradient-to-br from-navy via-medical-navy to-dark-blue py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-medical-blue/80 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Implementation &amp; Support
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white leading-tight mb-4 max-w-2xl">
            We Handle the Details
          </h2>
          <p className="text-white/70 text-[1.05rem] sm:text-[1.1rem] leading-relaxed mb-12 max-w-2xl">
            Providing benefits shouldn&apos;t add more to your plate. We
            handle the process so your team doesn&apos;t have to.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {implementationCards.map((card, i) => (
              <div
                key={i}
                className={`bg-white/10 rounded-2xl border border-white/20 p-8 lg:col-span-2${i === 3 ? ' lg:col-start-2' : ''
                  }`}
              >
                <h4 className="font-lora text-xl font-bold text-white mb-3">
                  {card.title}
                </h4>
                <p className="text-white/75 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* An Extension of Your Team */}
      <div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Partnership
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8">
            An Extension of Your Team
          </h2>
          <p className="text-[1.1rem] sm:text-[1.2rem] text-muted-ink leading-relaxed mb-6">
            We help take benefits off your plate so you can focus on leading
            your organization.
          </p>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink mb-6">
            We:
          </p>
          <ul className="inline-flex flex-col items-start gap-4 mb-8">
            {[
              'Handle the details and day-to-day questions',
              'Guide decisions with clarity',
              'Support your team and leadership',
              'Keep your benefits aligned as you grow',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FaCheckCircle
                  className="text-medical-blue flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-medical-navy leading-relaxed">
            So you can stay focused on the higher-purpose work you&apos;ve been
            called to lead.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-navy via-medical-navy to-dark-blue py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-lora text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-white leading-tight mb-6">
            Ready to Explore Your Options?
          </h2>
          <p className="text-white/75 text-[1.1rem] sm:text-[1.2rem] leading-relaxed mb-6 max-w-2xl">
            Whether you&apos;re offering benefits for the first time or looking
            for a more strategic approach, we&apos;re here to help.
          </p>
          <p className="text-white/75 text-[1.1rem] sm:text-[1.2rem] mb-4">
            In a short conversation, we will:
          </p>
          <ul className="flex flex-col gap-3 mb-10 max-w-md">
            {[
              'Learn about your organization',
              'Identify potential options',
              'Provide thoughtful guidance with no obligation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FaCheckCircle
                  className="text-medical-blue/80 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-white/75 text-[1.05rem] sm:text-[1.1rem]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start gap-5">
            <Link href={CALENDLY_URL} target="_blank">
              <Button className="shadow-md min-h-14 px-8 text-[1.05rem]">
                <span className="flex items-center gap-2 py-0.5">
                  Book Your Free Benefits Consultation
                  <FaArrowRight size={14} />
                </span>
              </Button>
            </Link>
            <Link
              href={FILLOUT_URL}
              target="_blank"
              className="text-white/70 underline underline-offset-4 text-[0.95rem] hover:text-white transition-colors"
            >
              Prefer to start with numbers? Request a quote.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
