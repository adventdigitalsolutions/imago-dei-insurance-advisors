import type { Metadata } from 'next';

const pageUrl = 'https://imagodeinsuranceadvisors.com/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Imago Dei Insurance Advisors collects, uses, and protects personal information.',
  alternates: { canonical: pageUrl },
};

const sections = [
  {
    heading: 'Information we collect',
    body: [
      'Information you give us: your name, email address, phone number, company, state, number of employees, and any message you send when you use our contact form, request our guide, schedule a consultation, or begin an application.',
      'Application information: if you start the online application, the application collects the details needed to evaluate eligibility and provide personalized rates. This can include business information such as an EIN and, as the application requires, household and health-related information. That information is entered directly into the application system, not into this website’s marketing pages.',
      'Technical information: like most websites, our servers and service providers may receive your IP address, browser type, device information, and pages visited. We use IP addresses for security, spam prevention, and rate limiting.',
    ],
  },
  {
    heading: 'How we use information',
    body: [
      'We use personal information to respond to your questions, send requested materials, schedule consultations, evaluate eligibility, provide quotes and enrollment assistance, operate and secure the website, and meet legal and regulatory obligations.',
      'We do not sell your personal information, and we do not use health or application answers for advertising.',
    ],
  },
  {
    heading: 'Who we share information with',
    body: [
      'We share information with service providers that help us operate, such as form, scheduling, email delivery, spam-protection, hosting, and application platforms, and with insurance carriers, plan administrators, and underwriters when needed to process your request or application. These providers may use the information only to perform services for us or as required to administer coverage.',
      'We may also disclose information when required by law, to protect rights and safety, or in connection with a business transfer.',
    ],
  },
  {
    heading: 'Cookies, analytics, and advertising',
    body: [
      'We may use cookies and similar technologies to keep the site working and to understand how visitors use it, such as page visits and whether the example-rate selector is used. Where required, we will ask for your consent before using non-essential cookies or advertising technologies.',
      'We never send health, medical, or underwriting information, or application answers, to analytics or advertising services. You can control cookies through your browser settings, and we honor the Global Privacy Control signal where applicable.',
    ],
  },
  {
    heading: 'Example rates and applications',
    body: [
      'Example rates shown on our landing pages are illustrations only and are not collected from or tied to you. Selecting a household option does not submit any information to us.',
    ],
  },
  {
    heading: 'Security and retention',
    body: [
      'We use reasonable administrative, technical, and organizational measures to protect personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
      'We keep personal information only as long as needed for the purposes described in this policy, to meet legal, accounting, or regulatory requirements, or to resolve disputes.',
    ],
  },
  {
    heading: 'Your choices and rights',
    body: [
      'Depending on where you live, you may have the right to request access to, correction of, or deletion of your personal information, to receive a copy of it, to opt out of targeted advertising or the sale or sharing of personal information, and to appeal a decision about your request. We will not discriminate against you for exercising these rights.',
      'To make a request, contact us using the details below. We may need to verify your identity first. Some information is subject to insurance and other laws that require us to keep it.',
      'You can opt out of marketing emails at any time by using the unsubscribe link or contacting us.',
    ],
  },
  {
    heading: 'Children’s privacy',
    body: [
      'Our website is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children through our website.',
    ],
  },
  {
    heading: 'Third-party sites',
    body: [
      'Our pages may link to third-party sites, such as the Cigna provider directory, scheduling tools, and application platforms. Their privacy practices are their own, and we encourage you to review their policies.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The “Last updated” date below shows when it was last revised.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 sm:pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-4">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-navy mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-ink mb-10">Last updated: October 30, 2026</p>

        <p className="text-ink mb-10 leading-relaxed">
          Imago Dei Insurance Advisors (“we,” “us,” or “our”) respects your
          privacy. This policy explains how we collect, use, and share personal
          information when you visit imagodeinsuranceadvisors.com, contact us,
          or begin an application through our site.
        </p>

        {sections.map((section) => (
          <section key={section.heading} className="mb-9">
            <h2 className="text-2xl font-semibold text-navy mb-3">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-ink leading-relaxed mb-3">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <section className="mb-9">
          <h2 className="text-2xl font-semibold text-navy mb-3">Contact us</h2>
          <p className="text-ink leading-relaxed">
            Imago Dei Insurance Advisors
            <br />
            Email:{' '}
            <a
              className="text-medical-blue underline underline-offset-2"
              href="mailto:info@imagodeinsurance.com"
            >
              info@imagodeinsurance.com
            </a>
            <br />
            Phone:{' '}
            <a
              className="text-medical-blue underline underline-offset-2"
              href="tel:+18322633552"
            >
              (832) 263-3552
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
