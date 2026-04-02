import { type ReactNode } from 'react';
import { PageHeader } from '@/components/page-header';

const CALENDLY_URL = 'https://calendly.com/david-sog0/30min?month=2025-07';
const FILLOUT_URL = 'https://imagodei.fillout.com/id-interest';
const QUOTE_URL = 'https://imagodeinsuranceadvisors.com/id-1';

function CTALink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        secondary
          ? 'text-muted-ink hover:text-ink underline text-lg transition-colors'
          : 'inline-block bg-medical-blue text-white rounded-full font-semibold uppercase tracking-[0.08em] hover:bg-dark-blue transition-all duration-200 hover:shadow-md px-7 py-3.5 text-[1rem]'
      }
    >
      {children}
    </a>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="text-medical-blue mr-3 mt-1">•</span>
          <span className="text-xl leading-relaxed text-muted-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const implementationCards = [
  {
    title: 'Dedicated Support Team',
    body: 'Direct access to experienced advisors who understand your organization.',
  },
  {
    title: 'Enrollment Technology',
    body: 'Modern enrollment tools that connect with most payroll providers.',
  },
  {
    title: 'Ongoing HR Advisory',
    body: 'Guidance to support leadership, compliance, and employee questions.',
  },
  {
    title: 'Quarterly Strategy Reviews',
    body: 'Proactive evaluation to keep your benefits aligned with your goals.',
  },
  {
    title: 'Strategic Renewals',
    body: 'We evaluate alternatives and adjust strategy.',
  },
];

export default function SolutionsPage() {
  return (
    <div className="mt-20">
      <PageHeader title="Flexible Health Benefits Built for Organizations at Every Stage" />

      {/* Hero description + organization-size sections */}
      <div className="w-full py-16 lg:py-24 bg-medical-sky/45">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">

          {/* Hero description */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <p className="text-xl lg:text-[1.4rem] text-muted-ink leading-relaxed mb-4">
              Providing meaningful employee benefits shouldn&apos;t require rigid rules, rising costs, or limited support.
            </p>
            <p className="text-xl lg:text-[1.4rem] text-muted-ink leading-relaxed mb-4">
              We partner with faith-minded leaders, Christian business owners, churches, and nonprofits to design flexible, sustainable health and employee benefits. We focus on caring for employees while stewarding resources wisely.
            </p>
            <p className="text-xl lg:text-[1.4rem] text-muted-ink leading-relaxed mb-4">
              Whether you&apos;re offering benefits for the first time or seeking a more strategic approach, we tailor solutions to your organization&apos;s size, goals, and values.
            </p>
            <p className="text-xl lg:text-[1.4rem] font-medium text-ink leading-relaxed">
              Caring for your people through wise benefits decisions directly supports the mission and purpose you&apos;ve been called to lead.
            </p>
          </section>

          {/* Section header */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10 text-center">
            <h2 className="font-lora text-4xl lg:text-5xl font-bold text-ink mb-4">
              Solutions by Organization Size
            </h2>
            <p className="font-lora text-2xl text-medical-navy mb-3 font-semibold">
              Designed Around Your Organization&apos;s Needs
            </p>
            <p className="text-xl text-muted-ink leading-relaxed">
              Different organizations face different challenges. Our approach adapts to where you are today—and where you&apos;re going.
            </p>
          </section>

          {/* Solopreneurs */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <h3 className="font-lora text-3xl lg:text-4xl font-bold text-medical-navy mb-2">
              Solopreneurs &amp; Business Owners
            </h3>
            <p className="text-lg text-muted-ink mb-6 font-semibold">
              Group Health Coverage for Faith-Minded Business Owners
            </p>
            <p className="text-xl text-muted-ink leading-relaxed mb-4">
              Many solopreneurs are limited to high-cost individual marketplace plans with few options.
            </p>
            <p className="text-xl text-muted-ink leading-relaxed mb-4">
              If you have an EIN, we can often provide access to group major medical coverage on national provider networks.
            </p>
            <p className="text-xl text-muted-ink mb-4">This allows you to:</p>
            <BulletList items={[
              'Access group health coverage as a business owner',
              'Avoid marketplace limitations',
              'Choose plans aligned with your needs and values',
              'Build a strong benefits foundation as you grow',
            ]} />
            <p className="text-xl text-muted-ink leading-relaxed mb-8">
              If you&apos;re currently on an individual plan, this may open better options than you realized.
            </p>
            <div className="flex justify-center">
              <CTALink href={QUOTE_URL}>Get a Quote for Your Business</CTALink>
            </div>
          </section>

          {/* Small Businesses */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <h3 className="font-lora text-3xl lg:text-4xl font-bold text-medical-navy mb-2">
              Small Businesses (2–9 Employees)
            </h3>
            <p className="text-lg text-muted-ink mb-6 font-semibold">
              Flexible Health and Employee Benefits for Small Teams
            </p>
            <p className="text-xl text-muted-ink leading-relaxed mb-6">
              Many small organizations want to offer benefits but run into participation requirements, contribution rules, and rising costs. Whether you&apos;re starting from scratch or improving existing coverage, we remove those barriers.
            </p>
            <p className="text-xl text-muted-ink mb-4">You can:</p>
            <BulletList items={[
              'Offer group health insurance with no minimum enrollment requirements',
              'Avoid rigid contribution rules',
              'Provide meaningful coverage even with a small team',
              'Explore alternative plan options to manage costs',
              'Receive proactive guidance instead of just renewal notices',
            ]} />
            <p className="text-xl text-muted-ink leading-relaxed mb-8">
              You don&apos;t need to wait until you grow to offer excellent benefits.
            </p>
            <div className="flex justify-center">
              <CTALink href={CALENDLY_URL}>Schedule Free Consultation</CTALink>
            </div>
          </section>

          {/* Mid-Size */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <h3 className="font-lora text-3xl lg:text-4xl font-bold text-medical-navy mb-2">
              Mid-Size Organizations (10–500 Employees)
            </h3>
            <p className="text-lg text-muted-ink mb-6 font-semibold">
              Strategic Health and Benefits Support for Growing Organizations
            </p>
            <p className="text-xl text-muted-ink leading-relaxed mb-4">
              Growing organizations often have benefits in place but lack strategic support. You may be facing annual rate increases, limited broker engagement, and administrative burden.
            </p>
            <p className="text-xl text-muted-ink mb-4">
              We provide expanded options and hands-on support, including:
            </p>
            <BulletList items={[
              'Access to multiple carrier options',
              'Flexible PPO and HDHP plan designs',
              'Enrollment technology connected to payroll',
              'Ongoing advisory and strategy sessions',
            ]} />
            <p className="text-xl text-muted-ink leading-relaxed mb-8">
              We reduce administrative load while strengthening your overall benefits strategy.
            </p>
            <div className="flex justify-center">
              <CTALink href={CALENDLY_URL}>Schedule Free Benefits Review</CTALink>
            </div>
          </section>

          {/* Strategic Benefits Support - all orgs */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <h3 className="font-lora text-3xl lg:text-4xl font-bold text-medical-navy mb-4">
              Strategic Benefits Support for Every Organization
            </h3>
            <p className="text-xl text-muted-ink mb-4">No matter your size, we provide:</p>
            <BulletList items={[
              'Multiple plan design options (PPO, HDHP, and alternative structures)',
              'Ancillary benefits including dental, vision, life, and disability insurance',
              'Quarterly strategy discussions',
              'Renewal planning with real alternatives',
              'Proactive claims and cost management guidance',
            ]} />
            <p className="text-xl text-muted-ink leading-relaxed">
              We help you build a benefits strategy that evolves with your organization and supports your mission.
            </p>
          </section>

          {/* Major Medical Options */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <h3 className="font-lora text-3xl lg:text-4xl font-bold text-medical-navy mb-4">
              Comprehensive Major Medical Options
            </h3>
            <p className="text-xl text-muted-ink leading-relaxed mb-4">
              We offer flexible plan structures designed to fit your organization&apos;s needs and values, including:
            </p>
            <BulletList items={[
              'PPO Plans for broad provider access',
              'High Deductible Health Plans (HDHPs)',
              'HSA-compatible plans',
              'FSA options',
              'Alternative health coverage structures',
              'Faith-aligned plan customization where appropriate',
            ]} />
            <p className="text-xl text-muted-ink leading-relaxed">
              Our goal is to balance cost, flexibility, provider access, and your organizational values.
            </p>
          </section>

          {/* Complete Employee Benefits */}
          <section className="bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <h3 className="font-lora text-3xl lg:text-4xl font-bold text-medical-navy mb-4">
              Complete Employee Benefits Offering
            </h3>
            <p className="text-xl text-muted-ink leading-relaxed mb-4">
              In addition to major medical coverage, we provide a full suite of employee benefits including:
            </p>
            <BulletList items={[
              'Dental Insurance',
              'Vision Insurance',
              'Life Insurance',
              'Disability Insurance',
              'Supplemental health benefits',
              'Voluntary employee-paid options',
            ]} />
            <p className="text-xl text-muted-ink leading-relaxed">
              This creates a cohesive package that truly cares for your team.
            </p>
          </section>

        </div>
      </div>

      {/* Implementation & Ongoing Support */}
      <div className="w-full py-16 lg:py-24 bg-gradient-to-br from-navy via-medical-navy to-dark-blue">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">
          <div className="mb-10">
            <h2 className="font-lora text-4xl lg:text-5xl font-bold text-white mb-3">
              Implementation &amp; Ongoing Support
            </h2>
            <h3 className="font-lora text-2xl text-white/80 mb-4">
              We Simplify Benefits Management
            </h3>
            <p className="text-xl text-white/70 leading-relaxed">
              Providing benefits shouldn&apos;t create additional administrative work. We streamline the entire process with:
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {implementationCards.map((card, i) => (
              <div
                key={i}
                className="flex-none w-72 bg-white/10 rounded-2xl border border-white/20 p-8 snap-start"
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

      {/* Partnership + Final CTA */}
      <div className="w-full py-16 lg:py-24 bg-medical-sky/45">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">

          {/* Partnership Section */}
          <section className="mb-16 bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10">
            <h2 className="font-lora text-4xl lg:text-5xl font-bold text-ink mb-4">
              An Extension of Your Team
            </h2>
            <p className="text-xl text-muted-ink leading-relaxed mb-6">
              We don&apos;t just provide insurance—we partner with you as a thoughtful advisor.
            </p>
            <p className="text-xl text-muted-ink mb-4">We help:</p>
            <BulletList items={[
              'Simplify decisions',
              'Reduce administrative burden',
              'Provide strategic guidance',
              'Support leadership teams',
              'Improve employee experience',
            ]} />
            <p className="text-xl text-muted-ink leading-relaxed">
              So you can focus on the higher-purpose work you&apos;re called to lead.
            </p>
          </section>

          {/* Final CTA */}
          <section className="bg-white rounded-2xl border border-clinical-border shadow-sm p-8 lg:p-10 text-center">
            <h2 className="font-lora text-4xl lg:text-5xl font-bold text-ink mb-6">
              Ready to Explore Your Options?
            </h2>
            <p className="text-xl text-muted-ink leading-relaxed mb-6 max-w-3xl mx-auto">
              Whether you&apos;re offering benefits for the first time or looking for a more strategic approach, we&apos;re here to help.
            </p>
            <p className="text-xl text-muted-ink mb-4">In a short conversation, we will:</p>
            <ul className="space-y-2 mb-10 max-w-md mx-auto text-left">
              {[
                'Learn about your organization',
                'Identify potential options',
                'Provide thoughtful guidance with no obligation',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-medical-blue mr-3 mt-1">•</span>
                  <span className="text-xl text-muted-ink">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTALink href={CALENDLY_URL}>Book Your Free Benefits Consultation</CTALink>
              <CTALink href={FILLOUT_URL} secondary>
                Prefer to start with numbers? Request a quote.
              </CTALink>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
