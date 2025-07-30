'use client';

import { FilloutButton } from '@/components/fillout-button';
import { PageHeader } from '@/components/page-header';
import { getCopy } from '@/getCopy';

export default function individualSolutionsPage() {
  const dpcBenefits = [
    'Direct Primary Care is medicine the way it should be.',
    'DPC is a monthly subscription to a concierge primary care doctor.',
    'DPC operates outside of health insurance and allows patients to receive 24/7 from a provider they can trust.',
  ];

  const dpcHealthShareBenefits = [
    'In-Office and Virtual Direct Primary Care through our partners at Healthcare2U.',
    'Patient Advocacy like through PALs & Healthcare2U.',
    'In-office Urgent Care Visits for a $25 co-pay.',
    'RX Membership with $0 co-pays on generic medications.',
    'A HealthShare membership through Sedera for financial peace of mind.',
  ];

  const virtualDpcHealthShareBenefits = [
    'Virtual Direct Primary Care with $0 visits.',
    'In-office Urgent Care Visits for a $0 co-pay.',
    'Free labs through Quest Diagnostics.',
    'RX Membership with $0 co-pays on generic medications.',
    'A HealthShare membership through Sedera for financial peace of mind.',
  ];

  const privatePPOBenefits = [
    'Private PPO plans on national networks.',
    'Underwritten to get the best rates possible.',
    'Multiple deductible options to choose from.',
    'Multiple carriers to choose from.',
  ];

  return (
    <div className="mt-24">
      {/* Hero Section */}
      <PageHeader title={getCopy('individualSolutionsPage.hero.title')} />

      {/* Main Content */}
      <div className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">
          {/* Major Medical Intro Section */}
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {getCopy('individualSolutionsPage.majorMedicalIntro.title')}
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {getCopy('individualSolutionsPage.majorMedicalIntro.description')}
            </p>
          </section>

          {/* Major Medical Solutions */}
          <section className="bg-white rounded-lg p-8 mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-6">
              {getCopy('individualSolutionsPage.majorMedical.title')}
            </h3>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              {getCopy('individualSolutionsPage.majorMedical.description')}
            </p>
            <h4 className="text-xl lg:text-2xl font-semibold text-dark-blue mb-4">
              {getCopy('individualSolutionsPage.majorMedical.privatePPO.title')}
            </h4>
            <ul className="space-y-3 text-gray-700 mb-8">
              {privatePPOBenefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-purple mr-3 mt-1">•</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <FilloutButton
                formId="wyPpc4rFKjus"
                className="text-lg px-8 py-4"
              >
                {getCopy(
                  'individualSolutionsPage.majorMedical.privatePPO.buttonText'
                )}
              </FilloutButton>
            </div>
          </section>

          {/* Health Share Intro Section */}
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {getCopy('individualSolutionsPage.healthShareIntro.title')}
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {getCopy('individualSolutionsPage.healthShareIntro.description')}
            </p>
          </section>

          {/* DPC Section */}
          <section className="mb-16 bg-white rounded-lg p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-6">
              {getCopy('individualSolutionsPage.dpc.title')}
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              {dpcBenefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-purple mr-3 mt-1">•</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* DPC + HealthShare */}
          <section className="mb-16 bg-white rounded-lg p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-6">
              {getCopy('individualSolutionsPage.dpcHealthShare.title')}
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              {dpcHealthShareBenefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-purple mr-3 mt-1">•</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <FilloutButton
                formId="kkN17sB7YCus"
                className="text-lg px-8 py-4"
              >
                {getCopy('individualSolutionsPage.dpcHealthShare.buttonText')}
              </FilloutButton>
            </div>
          </section>

          {/* Virtual DPC + HealthShare */}
          <section className="mb-16 bg-white rounded-lg p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-6">
              {getCopy('individualSolutionsPage.virtualDpcHealthShare.title')}
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              {virtualDpcHealthShareBenefits.map(
                (benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-royal-purple mr-3 mt-1">•</span>
                    <span className="text-lg">{benefit}</span>
                  </li>
                )
              )}
            </ul>
            <div className="flex justify-center">
              <FilloutButton
                formId="kkN17sB7YCus"
                className="text-lg px-8 py-4"
              >
                {getCopy(
                  'individualSolutionsPage.virtualDpcHealthShare.buttonText'
                )}
              </FilloutButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
