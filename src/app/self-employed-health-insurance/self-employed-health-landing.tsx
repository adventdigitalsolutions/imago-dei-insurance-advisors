'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  getZiteOrigin,
  listenForZiteEvents,
  trackLandingEvent,
} from '@/lib/landing-analytics';
import { Footer } from '@/components/footer';
import styles from './self-employed-health-landing.module.css';

const householdOptions = [
  { label: 'Just Me', rate: '$516.36' },
  { label: 'Me + Spouse', rate: '$978.72' },
  { label: 'Me + Children', rate: '$886.25' },
  { label: 'Me + Spouse + Children', rate: '$1,441.08' },
] as const;

const applicationUrl = 'https://imagodei.fillout.com/t/tktJRjLeLKus';

const faqs = [
  {
    question: 'Can I qualify if I’m the only employee?',
    answer:
      'Yes. Eligible businesses with an EIN may qualify even with only one employee. You may also include an eligible spouse and dependent children.',
  },
  {
    question: 'Is this real medical coverage?',
    answer:
      'Yes. These plans provide medical benefits for covered doctor visits, hospital services, prescriptions, and other eligible care. Review each plan’s benefits, cost-sharing, limitations, and exclusions before enrolling.',
  },
  {
    question: 'Can I keep my doctors?',
    answer:
      'You can check your doctors, specialists, and hospitals in the applicable Cigna PPO network before enrolling. Confirm participation with both the provider and the program.',
  },
  {
    question: 'How are my rates determined?',
    answer:
      'The program uses medical underwriting to determine eligibility and pricing. The rates shown here are examples. Your actual rates may differ, and not every applicant will qualify.',
  },
  {
    question: 'How is this different from Marketplace insurance?',
    answer:
      'This is medically underwritten group medical coverage through a self-funded arrangement, not an individual Marketplace policy. Marketplace premium tax credits cannot be used, and eligibility and plan rules differ.',
  },
  {
    question: 'What does self-funded coverage mean?',
    answer:
      'The medical benefits are provided through a self-funded group arrangement with stop-loss protection rather than a traditional fully insured policy. The plan documents describe circumstances when the sponsoring business may face funding obligations beyond its regular monthly contribution. Review those financial terms before enrolling.',
  },
  {
    question: 'Do I have to speak with an advisor?',
    answer:
      'No. You can begin your application without scheduling a call. Licensed assistance is available if you want help comparing your options.',
  },
  {
    question: 'Can I change or cancel coverage?',
    answer:
      'Changes, cancellations, and renewals are governed by the applicable program terms. Review those details before making your selection.',
  },
];

export function SelfEmployedHealthLanding() {
  const [selectedHousehold, setSelectedHousehold] = useState(0);
  const [applicationSrc, setApplicationSrc] = useState<string>();
  const pageViewTracked = useRef(false);

  useEffect(() => {
    if (pageViewTracked.current) return;
    pageViewTracked.current = true;
    trackLandingEvent('page_view');
  }, []);

  useEffect(() => listenForZiteEvents(getZiteOrigin(applicationUrl)), []);

  // The form loads once, carrying the current household selection, so later
  // selector changes never reload the form and discard entered answers.
  const beginApplication = () => {
    if (applicationSrc) return;
    const url = new URL(applicationUrl);
    url.searchParams.set('household', householdOptions[selectedHousehold].label);
    setApplicationSrc(url.toString());
    trackLandingEvent('application_start');
  };

  const selectedLabel = householdOptions[selectedHousehold].label;
  const appliedHousehold = applicationSrc
    ? new URL(applicationSrc).searchParams.get('household')
    : null;

  return (
    <main className={styles.landing}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" aria-label="Imago Dei Insurance Advisors home">
            <Image
              src="/imago-dei-logo.png"
              alt="Imago Dei Insurance Advisors"
              width={357}
              height={313}
              priority
              className={styles.logo}
            />
          </Link>
          <a
            className={styles.headerCta}
            href="#get-my-rates"
            onClick={beginApplication}
          >
            Get My Rates
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Health insurance for the self-employed</p>
            <h1>Medical Coverage for Your Business of One—and Your Family.</h1>
            <p className={styles.intro}>
              Explore medical coverage with access to the nationwide Cigna PPO
              network—even if you’re the only employee of your business.
              Coverage options are available for you, your spouse, and your
              eligible children.
            </p>
            <p className={styles.networkNote}>
              Cigna provides PPO network access; it does not insure this
              coverage.
            </p>

            <div className={styles.rateSelector}>
              <h2>Explore Example Monthly Rates</h2>
              <p>Select who needs coverage.</p>
              <fieldset className={styles.householdOptions}>
                <legend className={styles.visuallyHidden}>
                  Choose who needs coverage
                </legend>
                {householdOptions.map((option, index) => (
                  <label
                    className={`${styles.householdOption} ${
                      selectedHousehold === index ? styles.selected : ''
                    }`}
                    key={option.label}
                  >
                    <input
                      type="radio"
                      name="household"
                      value={option.label}
                      checked={selectedHousehold === index}
                      onChange={() => setSelectedHousehold(index)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </fieldset>
              <div className={styles.priceCard}>
                <p className={styles.priceLabel}>Example monthly rate</p>
                <p className={styles.price} aria-live="polite">
                  {householdOptions[selectedHousehold].rate}
                  <span> / month</span>
                </p>
                <p className={styles.planLabel}>
                  Value plan <span>·</span> $7,350 deductible <span>·</span> Cigna PPO
                  network access
                </p>
              </div>
              <p className={styles.disclaimer}>
                Illustrative Tier 1 monthly rates for the selected coverage
                tier. Eligibility and pricing are subject to medical
                underwriting; actual rates may be higher. Plan terms and
                exclusions apply.
              </p>
            </div>
          </div>

          <aside className={styles.applicationCard} id="get-my-rates">
            <span className={styles.cardKicker}>A simple place to begin</span>
            <h2>Get My Personalized Rates</h2>
            <p>
              Complete the application to request your personalized quote.
              We’ll email your available options when your quote is ready.
            </p>
            {applicationSrc ? (
              <>
                {appliedHousehold && appliedHousehold !== selectedLabel && (
                  <p className={styles.applicationNote} role="status">
                    Your application was opened for “{appliedHousehold}.”
                    Update the coverage selection in the form if needed.
                  </p>
                )}
                <iframe
                  className={styles.applicationFrame}
                  src={applicationSrc}
                  title="Personalized quote application"
                  allow="clipboard-write"
                />
              </>
            ) : (
              <button
                className={styles.primaryButton}
                type="button"
                onClick={beginApplication}
              >
                Start My Application
              </button>
            )}
            <p className={styles.questions}>
              Review our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <p className={styles.noObligation}>
              No required sales call. No obligation to enroll.
            </p>
            <p className={styles.questions}>
              Questions? Our licensed insurance advisors are available to help.
              <br />
              <a href="mailto:support@imagodeinsurance.com">
                Email our advisors
              </a>
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.section} id="benefits">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Coverage designed around your needs</p>
          <h2>More Options for Your Health and Your Budget.</h2>
          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}>
              <span className={styles.benefitNumber}>01</span>
              <h3>Premiums That Make Sense</h3>
              <p>
                Explore real example rates and find out what medical coverage
                could cost for you and your family.
              </p>
            </article>
            <article className={styles.benefitCard}>
              <span className={styles.benefitNumber}>02</span>
              <h3>Nationwide Cigna PPO Network</h3>
              <p>
                Access participating doctors, specialists, and hospitals across
                the country. Check whether your providers participate before
                you enroll.
              </p>
              <a
                className={styles.textLink}
                href="https://hcpdirectory.cigna.com/web/public/providers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Your Doctors <span aria-hidden="true">→</span>
              </a>
              <p className={styles.directoryNote}>
                In the directory, choose “Continue as Guest,” then “PPO, Choice
                Fund PPO.”
              </p>
            </article>
            <article className={styles.benefitCard}>
              <span className={styles.benefitNumber}>03</span>
              <h3>Benefits That Matter</h3>
              <p>
                Choose from eight medical plan designs, including two
                HSA-compatible options, with different deductibles and copays.
                Plans include covered preventive care and telemedicine
                benefits.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.marketplace}>
        <div className={styles.sectionInner}>
          <div className={styles.marketplaceIntro}>
            <p className={styles.eyebrow}>Compare your options</p>
            <h2>The Marketplace Isn’t Your Only Option.</h2>
            <p>
              If you own a business, you may have medical coverage choices
              beyond the individual Health Insurance Marketplace.
            </p>
            <p>
              Marketplace plans provide ACA protections, including coverage for
              pre-existing conditions without medical underwriting. This
              program follows different eligibility and plan rules.
            </p>
            <a className={styles.secondaryButton} href="#get-my-rates" onClick={beginApplication}>
              Get My Rates
            </a>
          </div>
          <div className={styles.comparison} aria-label="Coverage comparison">
            <div className={styles.comparisonHeader}>
              <span> </span>
              <strong>This medical program</strong>
              <strong>Marketplace plans</strong>
            </div>
            {[
              ['Provider network', 'Cigna PPO option', 'Varies by plan'],
              [
                'Health underwriting',
                'Used for eligibility and pricing',
                'Not used to determine eligibility',
              ],
              [
                'Marketplace tax credits',
                'Not available',
                'May be available if eligible',
              ],
              [
                'When to apply',
                'Year-round, subject to eligibility',
                'Open enrollment or qualifying special enrollment',
              ],
            ].map(([label, program, marketplace]) => (
              <div className={styles.comparisonRow} key={label}>
                <strong>{label}</strong>
                <span>{program}</span>
                <span>{marketplace}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="how-it-works">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>A clear path forward</p>
          <h2>Getting Started Is Simple.</h2>
          <div className={styles.steps}>
            <article className={styles.step}>
              <span>1</span>
              <h3>Apply Online</h3>
              <p>
                Complete one application to explore eligibility and request
                personalized rates.
              </p>
            </article>
            <article className={styles.step}>
              <span>2</span>
              <h3>Compare Your Options</h3>
              <p>
                Review available premiums, deductibles, benefits, and
                provider-network information.
              </p>
            </article>
            <article className={styles.step}>
              <span>3</span>
              <h3>Enroll When You’re Ready</h3>
              <p>
                Choose coverage if you find an option that works for you. A
                licensed advisor is available when you need help.
              </p>
            </article>
          </div>
          <div className={styles.simpleCta}>
            <a className={styles.secondaryButton} href="#get-my-rates" onClick={beginApplication}>
              Get My Rates
            </a>
            <span>No required sales call. No obligation to enroll.</span>
          </div>
        </div>
      </section>

      <section className={styles.reassurance}>
        <div className={styles.reassuranceInner}>
          <p className={styles.eyebrow}>Make an informed decision</p>
          <h2>Know What You’re Choosing.</h2>
          <p>
            Before enrolling, you can review your rates, plan benefits,
            deductibles, and participating providers. Have questions? Our
            licensed insurance advisors are available to help.
          </p>
        </div>
      </section>

      <section className={styles.section} id="faq">
        <div className={styles.faqInner}>
          <p className={styles.eyebrow}>Answers before you apply</p>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <p className={styles.eyebrow}>Coverage for your business of one</p>
          <h2>Explore Coverage for You and Your Family.</h2>
          <p>
            See what medical plans and personalized rates may be available for
            your business.
          </p>
          <a
            className={styles.primaryButton}
            href="#get-my-rates"
            onClick={beginApplication}
          >
            Get My Personalized Rates <span aria-hidden="true">→</span>
          </a>
          <span>No obligation to enroll.</span>
        </div>
      </section>

      <Footer
        minimal
        disclaimer="Medical benefits are offered through a medically underwritten self-funded group arrangement with a Cigna PPO network option. Cigna provides network access and does not insure the benefits. Coverage and financial responsibilities are subject to the applicable plan documents."
      />
    </main>
  );
}
