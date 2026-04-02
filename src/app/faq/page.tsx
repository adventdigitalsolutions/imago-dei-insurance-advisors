import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/button';
import { PageHeader } from '@/components/page-header';
import { FAQSection } from '@/components/page-components/faq/faq-accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Clear answers to common questions about group health insurance, eligibility, plan options, and working with Imago Dei Insurance Advisors.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Imago Dei Insurance Advisors',
    description:
      'Clear answers to common questions about group health insurance, eligibility, plan options, and working with Imago Dei Insurance Advisors.',
    url: 'https://imagodeinsuranceadvisors.com/faq',
  },
};

const CALENDLY_URL = 'https://calendly.com/david-sog0/30min?month=2025-07';
const FILLOUT_URL = 'https://imagodei.fillout.com/id-interest';

const FAQ_SECTIONS = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'Who do you work with?',
        answer:
          'We partner with Christian businesses, churches, ministries, nonprofits, and faith-minded leaders who want to care well for their teams while stewarding resources wisely. Most organizations we serve have between 1 and 500 employees.',
      },
      {
        question: 'Do we have to offer benefits today to work with you?',
        answer:
          'No. Many clients are exploring benefits for the first time. We help you evaluate options and decide what makes sense before any commitment.',
      },
      {
        question: 'Is there a cost for the initial consultation?',
        answer:
          'No. The initial consultation is completely complimentary and comes with no obligation.',
      },
      {
        question: 'What happens during the first conversation?',
        answer:
          'We listen and learn about your organization and goals, discuss any current benefits, explore flexible options, answer your questions, and outline next steps if you wish to proceed. There is no pressure.',
      },
    ],
  },
  {
    title: 'Eligibility & Group Size',
    items: [
      {
        question: 'Can a business owner get group health insurance?',
        answer:
          'Yes. If you have an EIN, we can often provide access to group major medical coverage—even for solopreneurs. This frequently offers more flexibility than individual marketplace plans.',
      },
      {
        question: 'Do you require a minimum number of employees?',
        answer:
          'No. We specialize in solutions that remove traditional participation requirements, allowing small teams to offer coverage comfortably.',
      },
      {
        question: 'Do employers have to contribute to premiums?',
        answer:
          'No. Many of our solutions do not require employer contributions, giving you flexibility to design benefits that fit your budget and values.',
      },
      {
        question:
          'Can we offer benefits if only a few employees want coverage?',
        answer:
          'Yes. Our approach supports organizations even with limited participation.',
      },
      {
        question: 'Do you support part-time employee coverage?',
        answer:
          'Yes. We can help structure benefits for part-time employees when desired.',
      },
      {
        question: 'Can churches offer benefits to pastors only?',
        answer:
          'Yes. Churches can design benefits for pastors only or create different contribution levels for various roles. We help structure this appropriately.',
      },
    ],
  },
  {
    title: 'Plan Options & Coverage',
    items: [
      {
        question: 'What types of health plans do you offer?',
        answer:
          "We offer PPO plans, High Deductible Health Plans (HDHPs), HSA-compatible options, FSA options, and alternative structures. Plans are tailored to your organization's goals and values.",
      },
      {
        question: 'Do you only offer health insurance?',
        answer:
          'No. We also provide dental, vision, life, disability, supplemental, and voluntary benefits so you can build a complete package.',
      },
      {
        question: 'Do employees get multiple plan choices?',
        answer:
          'Yes. In most cases, employees can choose from multiple plan options that best fit their needs.',
      },
      {
        question: 'Can plans be aligned with our organizational values?',
        answer:
          'Yes. We help structure options that align with your convictions and priorities.',
      },
    ],
  },
  {
    title: 'Cost & Contributions',
    items: [
      {
        question: 'Is this more affordable than traditional group insurance?',
        answer:
          'Many clients find better flexibility and long-term cost management. We focus on sustainable solutions rather than just the lowest short-term price.',
      },
      {
        question: 'We already offer benefits. Can you still help?',
        answer:
          'Yes. Many organizations come to us because premiums keep rising, they receive limited guidance, or they want more flexibility and strategic support.',
      },
      {
        question: 'Can employers contribute different amounts?',
        answer:
          'Yes. We help you design fair, consistent contribution strategies that fit your budget.',
      },
      {
        question: 'Do you help manage annual renewals?',
        answer:
          'Yes. We proactively review options and present real alternatives—not just rate increases.',
      },
    ],
  },
  {
    title: 'Provider Access & Networks',
    items: [
      {
        question: 'Can we keep our current doctors?',
        answer:
          'In most cases, yes. We work with carriers offering broad national networks and help review provider access during plan selection.',
      },
    ],
  },
  {
    title: 'Implementation & Timeline',
    items: [
      {
        question: 'Are there waiting periods?',
        answer:
          'Most plans have a short waiting period for new employees. Coverage can often begin the first of the following month.',
      },
      {
        question: 'How long does it take to implement benefits?',
        answer:
          'Many groups are up and running within a few weeks. We guide you step-by-step.',
      },
      {
        question: 'Is switching from our current plan difficult?',
        answer:
          'No. We handle most of the transition and make the process as smooth as possible for you and your team.',
      },
    ],
  },
  {
    title: 'HR & Ongoing Support',
    items: [
      {
        question: 'Do you provide HR support?',
        answer:
          'Yes. Organizations with 5+ employees enrolled in medical coverage receive complimentary HR advisory support.',
      },
      {
        question: 'Will we have ongoing support after enrollment?',
        answer:
          'Yes. You receive dedicated advisor access, strategy discussions, renewal planning, and claims guidance. We act as an extension of your team.',
      },
      {
        question: 'Do you help communicate benefits to employees?',
        answer:
          'Yes. We provide guidance and customizable templates for clear employee communication.',
      },
      {
        question: 'Can your system connect with payroll?',
        answer:
          'Yes. Our enrollment tools integrate with most payroll systems to reduce administrative work.',
      },
    ],
  },
  {
    title: 'Geographic Coverage',
    items: [
      {
        question: 'Do you support multi-state employee groups?',
        answer:
          'Yes. We are licensed in most states and work with carriers that provide coverage across all 50 states.',
      },
      {
        question: 'Do you work nationwide?',
        answer: 'Yes. We support organizations throughout the United States.',
      },
    ],
  },
  {
    title: 'Partnership & Approach',
    items: [
      {
        question: 'What makes you different from a traditional broker?',
        answer:
          'We focus on flexible strategies, removing participation barriers, ongoing advisory support, HR guidance, and long-term sustainability. We aim to be a true partner.',
      },
      {
        question: 'Are you faith-based?',
        answer:
          'Our work and purpose is guided by our deep commitment to our Christian faith and the understanding that God has made us in His image. We serve organizations of many backgrounds, with many clients sharing a faith-minded perspective.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="mt-20">
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Clear answers to help you evaluate your options with confidence."
      />

      {/* FAQ Sections */}
      <div className="bg-white py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {FAQ_SECTIONS.map((section) => (
            <FAQSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>

      {/* Still Have Questions CTA */}
      <div className="bg-medical-sky/70 py-20 sm:py-28 px-6 border-t border-clinical-border/60">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
            Still Have Questions?
          </p>
          <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-6 max-w-xl">
            Every organization is unique.
          </h2>
          <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed mb-10 max-w-2xl">
            The best way to get clear answers for your situation is through a
            short, thoughtful conversation.
          </p>
          <div className="flex flex-col items-start gap-5">
            <Link href={CALENDLY_URL} target="_blank">
              <Button className="shadow-md min-h-14 px-8 text-[1.05rem]">
                <span className="flex items-center gap-2 py-0.5">
                  Book Your Free Benefits Consultation
                  <FaArrowRight size={14} />
                </span>
              </Button>
            </Link>
            <p className="text-[1rem] text-muted-ink">
              Prefer to start with numbers?{' '}
              <Link
                href={FILLOUT_URL}
                target="_blank"
                className="text-medical-blue font-semibold hover:text-dark-blue underline underline-offset-2 transition-colors duration-150"
              >
                Request a quote.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
