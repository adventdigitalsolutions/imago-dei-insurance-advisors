import Link from 'next/link';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Button } from '@/components/button';

const CALENDLY_URL = 'https://calendly.com/david-sog0/30min?month=2025-07';
const FILLOUT_URL = 'https://imagodei.fillout.com/id-interest';
const QUOTE_URL = 'https://imagodeinsuranceadvisors.com/id-1';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 mb-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-1" size={18} />
          <span className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink">{item}</span>
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
                Providing meaningful employee benefits shouldn&apos;t require rigid rules, rising costs, or limited support.
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
              We partner with faith-minded leaders, Christian business owners, churches, and nonprofits to design flexible, sustainable health and employee benefits. We focus on caring for employees while stewarding resources wisely.
            </p>
            <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
              Whether you&apos;re offering benefits for the first time or seeking a more strategic approach, we tailor solutions to your organization&apos;s size, goals, and values.
            </p>
            <p className="text-[1.1rem] sm:text-[1.15rem] font-semibold text-medical-navy leading-relaxed">
              Caring for your people through wise benefits decisions directly supports the mission and purpose you&apos;ve been called to lead.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions by Organization Size */}
      <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Organization Size
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-4 max-w-2xl">
            Solutions by Organization Size
          </h2>
          <p className="text-[1.15rem] sm:text-[1.2rem] font-semibold text-medical-navy mb-3">
            Designed Around Your Organization&apos;s Needs
          </p>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed max-w-2xl">
            Different organizations face different challenges. Our approach adapts to where you are today—and where you&apos;re going.
          </p>
        </div>
      </div>

      {/* Solopreneurs */}
      <div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Solopreneurs &amp; Business Owners
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8 max-w-2xl">
            Group Health Coverage for Faith-Minded Business Owners
          </h2>
          <div className="flex flex-col gap-5 max-w-3xl mb-6">
            <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed">
              Many solopreneurs are limited to high-cost individual marketplace plans with few options.
            </p>
            <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed">
              If you have an EIN, we can often provide access to group major medical coverage on national provider networks.
            </p>
            <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink">This allows you to:</p>
          </div>
          <BulletList items={[
            'Access group health coverage as a business owner',
            'Avoid marketplace limitations',
            'Choose plans aligned with your needs and values',
            'Build a strong benefits foundation as you grow',
          ]} />
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-8 max-w-3xl">
            If you&apos;re currently on an individual plan, this may open better options than you realized.
          </p>
          <Link href={QUOTE_URL} target="_blank">
            <Button className="shadow-md min-h-14 px-8 text-[1.05rem]">
              <span className="flex items-center gap-2 py-0.5">
                Get a Quote for Your Business
                <FaArrowRight size={14} />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Small Businesses */}
      <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Small Businesses (2–9 Employees)
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8 max-w-2xl">
            Flexible Health and Employee Benefits for Small Teams
          </h2>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-6 max-w-3xl">
            Many small organizations want to offer benefits but run into participation requirements, contribution rules, and rising costs. Whether you&apos;re starting from scratch or improving existing coverage, we remove those barriers.
          </p>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink mb-4">You can:</p>
          <BulletList items={[
            'Offer group health insurance with no minimum enrollment requirements',
            'Avoid rigid contribution rules',
            'Provide meaningful coverage even with a small team',
            'Explore alternative plan options to manage costs',
            'Receive proactive guidance instead of just renewal notices',
          ]} />
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-8 max-w-3xl">
            You don&apos;t need to wait until you grow to offer excellent benefits.
          </p>
          <Link href={CALENDLY_URL} target="_blank">
            <Button className="shadow-md min-h-14 px-8 text-[1.05rem]">
              <span className="flex items-center gap-2 py-0.5">
                Schedule Free Consultation
                <FaArrowRight size={14} />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mid-Size Organizations */}
      <div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Mid-Size Organizations (10–500 Employees)
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8 max-w-2xl">
            Strategic Health and Benefits Support for Growing Organizations
          </h2>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-4 max-w-3xl">
            Growing organizations often have benefits in place but lack strategic support. You may be facing annual rate increases, limited broker engagement, and administrative burden.
          </p>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink mb-4">
            We provide expanded options and hands-on support, including:
          </p>
          <BulletList items={[
            'Access to multiple carrier options',
            'Flexible PPO and HDHP plan designs',
            'Enrollment technology connected to payroll',
            'Ongoing advisory and strategy sessions',
          ]} />
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-8 max-w-3xl">
            We reduce administrative load while strengthening your overall benefits strategy.
          </p>
          <Link href={CALENDLY_URL} target="_blank">
            <Button className="shadow-md min-h-14 px-8 text-[1.05rem]">
              <span className="flex items-center gap-2 py-0.5">
                Schedule Free Benefits Review
                <FaArrowRight size={14} />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Strategic Benefits / Major Medical / Complete Benefits — card grid */}
      <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Our Offerings
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-12 max-w-xl">
            Strategic Benefits Support for Every Organization
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-clinical-border shadow-sm">
              <h3 className="font-semibold text-medical-navy text-[1.15rem] mb-3">
                Strategic Benefits Support
              </h3>
              <p className="text-muted-ink text-[0.95rem] mb-4">No matter your size, we provide:</p>
              <ul className="flex flex-col gap-3">
                {[
                  'Multiple plan design options (PPO, HDHP, and alternative structures)',
                  'Ancillary benefits including dental, vision, life, and disability insurance',
                  'Quarterly strategy discussions',
                  'Renewal planning with real alternatives',
                  'Proactive claims and cost management guidance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-0.5" size={15} />
                    <span className="text-muted-ink text-[0.9rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-clinical-border shadow-sm">
              <h3 className="font-semibold text-medical-navy text-[1.15rem] mb-3">
                Comprehensive Major Medical Options
              </h3>
              <p className="text-muted-ink text-[0.95rem] mb-4">
                We offer flexible plan structures designed to fit your organization&apos;s needs and values, including:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'PPO Plans for broad provider access',
                  'High Deductible Health Plans (HDHPs)',
                  'HSA-compatible plans',
                  'FSA options',
                  'Alternative health coverage structures',
                  'Faith-aligned plan customization where appropriate',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-0.5" size={15} />
                    <span className="text-muted-ink text-[0.9rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-clinical-border shadow-sm">
              <h3 className="font-semibold text-medical-navy text-[1.15rem] mb-3">
                Complete Employee Benefits Offering
              </h3>
              <p className="text-muted-ink text-[0.95rem] mb-4">
                In addition to major medical coverage, we provide a full suite of employee benefits including:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Dental Insurance',
                  'Vision Insurance',
                  'Life Insurance',
                  'Disability Insurance',
                  'Supplemental health benefits',
                  'Voluntary employee-paid options',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-0.5" size={15} />
                    <span className="text-muted-ink text-[0.9rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mt-8 max-w-3xl">
            We help you build a benefits strategy that evolves with your organization and supports your mission.
          </p>
        </div>
      </div>

      {/* Implementation & Ongoing Support */}
      <div className="bg-gradient-to-br from-navy via-medical-navy to-dark-blue py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-medical-blue/80 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Implementation &amp; Support
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white leading-tight mb-4 max-w-2xl">
            Implementation &amp; Ongoing Support
          </h2>
          <p className="text-white/80 text-[1.1rem] sm:text-[1.2rem] font-semibold mb-4">
            We Simplify Benefits Management
          </p>
          <p className="text-white/70 text-[1.05rem] sm:text-[1.1rem] leading-relaxed mb-12 max-w-2xl">
            Providing benefits shouldn&apos;t create additional administrative work. We streamline the entire process with:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationCards.map((card, i) => (
              <div key={i} className="bg-white/10 rounded-2xl border border-white/20 p-8">
                <h4 className="font-lora text-xl font-bold text-white mb-3">{card.title}</h4>
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
            We don&apos;t just provide insurance—we partner with you as a thoughtful advisor.
          </p>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink mb-6">We help:</p>
          <ul className="inline-flex flex-col items-start gap-4 mb-8">
            {[
              'Simplify decisions',
              'Reduce administrative burden',
              'Provide strategic guidance',
              'Support leadership teams',
              'Improve employee experience',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FaCheckCircle className="text-medical-blue flex-shrink-0 mt-1" size={18} />
                <span className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-medical-navy leading-relaxed">
            So you can focus on the higher-purpose work you&apos;re called to lead.
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
            Whether you&apos;re offering benefits for the first time or looking for a more strategic approach, we&apos;re here to help.
          </p>
          <p className="text-white/75 text-[1.1rem] sm:text-[1.2rem] mb-4">In a short conversation, we will:</p>
          <ul className="flex flex-col gap-3 mb-10 max-w-md">
            {[
              'Learn about your organization',
              'Identify potential options',
              'Provide thoughtful guidance with no obligation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FaCheckCircle className="text-medical-blue/80 flex-shrink-0 mt-1" size={18} />
                <span className="text-white/75 text-[1.05rem] sm:text-[1.1rem]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
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
