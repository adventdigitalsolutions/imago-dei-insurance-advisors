import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Imago Dei Insurance Advisors — our mission, values, and commitment to faithful stewardship. We serve Christian businesses, churches, and nonprofits with flexible, affordable group health insurance.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Imago Dei Insurance Advisors',
    description:
      'Learn about Imago Dei Insurance Advisors — our mission, values, and commitment to faithful stewardship for Christian businesses, churches, and nonprofits.',
    url: 'https://imagodeinsuranceadvisors.com/about',
  },
};

const VALUES = [
  {
    title: 'Stewardship',
    body: 'We help organizations balance meaningful benefits with wise use of resources for long-term sustainability.',
  },
  {
    title: 'Care',
    body: 'Employee benefits are ultimately about caring for people and their families. We reflect that in every recommendation.',
  },
  {
    title: 'Simplicity',
    body: 'Benefits should be clear and easy to manage. We simplify complex decisions and provide understandable guidance.',
  },
  {
    title: 'Partnership',
    body: 'We work as an extension of your team—offering ongoing support, education, and strategic guidance as your organization grows.',
  },
  {
    title: 'Integrity',
    body: 'Integrity is foundational to everything we do. It shapes how we serve our clients and steward their trust.',
  },
];

const WHO_WE_WORK_WITH = [
  'Value caring for their employees',
  'Desire flexibility in their benefits strategy',
  'Want clear, educational guidance',
  'Prefer a collaborative partnership',
  'Seek stewardship in managing resources',
];

const LEADERS = [
  {
    name: 'David Hemm',
    title: 'Partner, Benefits & Insurance Advisor',
    image: '/david-hemm-headshot.png',
    bio: [
      'David is a dynamic problem solver who specializes in identifying creative benefits solutions for small to mid-sized organizations.',
      'He focuses on self-funded strategies, flexible group coverage options, and alternative plan structures—helping organizations navigate challenges that traditional approaches often fail to address.',
      "As the licensed broker, David works directly with clients to evaluate options, design plan strategies, and implement solutions that balance cost, flexibility, and long-term sustainability. His strength lies in his ability to find practical paths forward regardless of an organization's size or complexity.",
      'David also serves in leadership roles within his church community, including family discipleship—reflecting his commitment to mentorship, service, and biblical leadership.',
    ],
  },
  {
    name: 'Adam Cravens',
    title: 'Partner, HR & Benefits Advisory',
    image: '/adam-cravens-headshot.png',
    bio: [
      'Adam is a strategic HR leader with over 16 years of experience supporting organizations ranging from small businesses to Fortune 100 companies.',
      'He has also owned and operated his own service business for six years and served as a fractional HR and Operations executive—giving him firsthand experience in balancing people, operations, and financial considerations.',
      'Adam partners closely with clients as a relationship lead, HR advisor, and holistic strategist. He helps leaders evaluate not just the cost of benefits, but their impact on culture, employee care, and long-term sustainability.',
      'His approach emphasizes education, clarity, and alignment—ensuring benefits decisions support both organizational goals and employee well-being.',
      'Adam has also served in various leadership roles within his church, including leading welcome teams for several years, reflecting his passion for hospitality, service, and practical leadership.',
    ],
  },
];

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://imagodeinsuranceadvisors.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Imago Dei Insurance Advisors',
    url: 'https://imagodeinsuranceadvisors.com',
    member: LEADERS.map((leader) => ({
      '@type': 'Person',
      name: leader.name,
      jobTitle: leader.title,
      image: `https://imagodeinsuranceadvisors.com${leader.image}`,
      worksFor: {
        '@type': 'Organization',
        name: 'Imago Dei Insurance Advisors',
      },
    })),
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="mt-20">
        {/* Hero Section */}
        <div className="w-full relative overflow-clip">
          <div className="py-16 md:py-28 px-6 bg-gradient-to-br from-navy via-medical-navy to-dark-blue border-b border-clinical-border/60">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-5xl">
                <p className="text-medical-blue/80 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                  About Us
                </p>
                <h1 className="text-white text-5xl lg:text-7xl font-lora font-bold tracking-[-0.04em] mb-6 leading-tight">
                  About Imago Dei Insurance Advisors
                </h1>
                <p className="text-white/75 text-xl lg:text-2xl leading-relaxed max-w-2xl">
                  We help organizations care well for their people.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-white py-20 sm:py-28 px-6 border-b border-clinical-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
                  Our Story
                </p>
                <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8">
                  Why &ldquo;Imago Dei&rdquo;
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
                    The name{' '}
                    <span className="font-semibold text-medical-navy">
                      Imago Dei
                    </span>{' '}
                    means &ldquo;Image of God.&rdquo;
                  </p>
                  <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
                    We chose this name thoughtfully. It reflects our core belief
                    that every person has inherent worth and value because they
                    are created in God&apos;s image.
                  </p>
                  <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
                    Genesis tells us that God created mankind in His image—male
                    and female He created them.
                  </p>
                  <p className="text-[1.1rem] sm:text-[1.15rem] text-muted-ink leading-relaxed">
                    This truth shapes how we view employee benefits. Benefits
                    are more than a business expense. They are a practical way
                    leaders can care for the people entrusted to them—their
                    employees and the families who depend on them.
                  </p>
                  <p className="text-[1.1rem] sm:text-[1.15rem] font-semibold text-medical-navy leading-relaxed">
                    By helping organizations provide thoughtful, sustainable
                    benefits, we come alongside leaders who want to reflect that
                    care and live out Christ&apos;s call to love their
                    neighbors—including those they work alongside every day.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/open_bible.jpg"
                  alt="Open Bible open to a passage in Genesis"
                  width={500}
                  height={678}
                  className="w-full max-w-md h-[380px] rounded-2xl object-cover border border-clinical-border shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
              Our Values
            </p>
            <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-12 max-w-xl">
              What Guides Our Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {VALUES.map((value, i) => (
                <div
                  key={value.title}
                  className={`bg-white rounded-2xl p-8 border border-clinical-border shadow-sm lg:col-span-2${
                    i === 3 ? ' lg:col-start-2' : ''
                  }`}
                >
                  <h3 className="font-semibold text-medical-navy text-[1.15rem] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-ink text-[1rem] leading-relaxed">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who We Work Best With */}
        <div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:gap-16">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
                  Who We Serve
                </p>
                <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8">
                  Who We Work Best With
                </h2>
                <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-8">
                  We partner best with organizations that:
                </p>
                <ul className="flex flex-col gap-4 mb-8">
                  {WHO_WE_WORK_WITH.map((item) => (
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
              </div>
              <div className="bg-medical-sky/60 rounded-2xl p-8 border border-clinical-border">
                <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed">
                  This often includes{' '}
                  <span className="font-semibold text-medical-navy">
                    Christian businesses, churches, ministries, nonprofits,
                  </span>{' '}
                  and faith-minded organizations across the U.S.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-medical-sky/70 py-20 sm:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
              Leadership Team
            </p>
            <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-4 max-w-2xl">
              Meet Our Leadership Team
            </h2>
            <p className="text-[1.05rem] sm:text-[1.1rem] text-muted-ink leading-relaxed mb-14 max-w-2xl">
              Our leadership combines expertise in insurance strategy, HR
              advisory, and business operations—allowing us to provide holistic
              support.
            </p>
            <div className="flex flex-col gap-10">
              {LEADERS.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-white rounded-2xl border border-clinical-border shadow-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                    <div className="relative bg-medical-navy/10">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={280}
                        height={320}
                        className="w-full h-64 lg:h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <h3 className="font-lora text-2xl sm:text-3xl font-bold text-medical-navy mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-semibold tracking-[0.1em] uppercase text-medical-blue mb-6">
                        {leader.title}
                      </p>
                      <div className="flex flex-col gap-4">
                        {leader.bio.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-[1rem] text-muted-ink leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
              Our Approach
            </p>
            <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8">
              A Partner, Not Just a Provider
            </h2>
            <p className="text-[1.1rem] sm:text-[1.2rem] text-muted-ink leading-relaxed mb-6">
              We believe benefits decisions should not be transactional. We work
              as an extension of your team—providing strategic guidance, ongoing
              support, and thoughtful recommendations as your organization
              grows.
            </p>
            <p className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-medical-navy leading-relaxed">
              Our goal is to help you care well for your people while stewarding
              resources wisely.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-navy via-medical-navy to-dark-blue py-20 sm:py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-lora text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-white leading-tight mb-6">
              Let&apos;s Start the Conversation
            </h2>
            <p className="text-white/75 text-[1.1rem] sm:text-[1.2rem] leading-relaxed mb-10 max-w-2xl">
              If you&apos;re exploring employee benefits for the first time—or
              looking for a more thoughtful and flexible approach—we&apos;d love
              to learn more about your organization.
            </p>
            <div className="flex flex-col items-start gap-5">
              <Link
                href="https://calendly.com/david-sog0/30min?month=2025-07"
                target="_blank"
              >
                <Button className="shadow-md min-h-14 px-8 text-[1.05rem]">
                  <span className="flex items-center gap-2 py-0.5">
                    Book Your Free Benefits Consultation
                    <FaArrowRight size={14} />
                  </span>
                </Button>
              </Link>
              <Link
                href="https://imagodei.fillout.com/id-interest"
                target="_blank"
                className="text-white/70 underline underline-offset-4 text-[0.95rem] hover:text-white transition-colors"
              >
                Prefer to start with numbers? Request a quote.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
