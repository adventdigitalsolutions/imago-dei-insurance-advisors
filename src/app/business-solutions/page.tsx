'use client';

import { FilloutButton } from '@/components/fillout-button';
import { getCopy } from '@/getCopy';

export default function BusinessSolutionsPage() {
  const flexBenefits = getCopy(
    'businessSolutionsPage.flexBenefits.benefits'
  ) as unknown as string[];
  const smallBusinessBenefits = getCopy(
    'businessSolutionsPage.smallBusiness.benefits'
  ) as unknown as string[];
  const largeBusinessBenefits = getCopy(
    'businessSolutionsPage.largeBusiness.benefits'
  ) as unknown as string[];

  return (
    <div className="mt-24">
      {/* Hero Section */}
      <div className="w-full relative overflow-clip">
        <div className="relative">
          <div className="p-8 py-12 md:py-20 md:p-20 bg-gradient-to-r from-royal-purple to-royal-purple/30 sm:to-royal-purple/0 flex items-center justify-center">
            <h1 className="text-white text-4xl lg:text-6xl font-montserrat font-bold tracking-[4px] w-full max-w-5xl uppercase">
              {getCopy('businessSolutionsPage.hero.title')}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-20">
          {/* Introduction Section */}
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {getCopy('businessSolutionsPage.intro.title')}
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {getCopy('businessSolutionsPage.intro.description')}
            </p>
          </section>

          {/* Flex Benefits Solution */}
          <section className="mb-16 bg-white rounded-lg p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-6">
              {getCopy('businessSolutionsPage.flexBenefits.title')}
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              {flexBenefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-purple mr-3 mt-1">•</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <FilloutButton
                formId="7oFEeurnrnus"
                className="text-lg px-8 py-4"
                openInPopup={true}
              >
                {getCopy('businessSolutionsPage.flexBenefits.buttonText')}
              </FilloutButton>
            </div>
          </section>

          {/* Small Business Solutions */}
          <section className="mb-16 bg-white rounded-lg p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-6">
              {getCopy('businessSolutionsPage.smallBusiness.title')}
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              {smallBusinessBenefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-purple mr-3 mt-1">•</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <FilloutButton
                formId="7oFEeurnrnus"
                className="text-lg px-8 py-4"
                openInPopup={true}
              >
                {getCopy('businessSolutionsPage.smallBusiness.buttonText')}
              </FilloutButton>
            </div>
          </section>

          {/* Large Business Solutions */}
          <section className="bg-white rounded-lg p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-6">
              {getCopy('businessSolutionsPage.largeBusiness.title')}
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              {largeBusinessBenefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-royal-purple mr-3 mt-1">•</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <FilloutButton
                formId="7oFEeurnrnus"
                className="text-lg px-8 py-4"
                openInPopup={true}
              >
                {getCopy('businessSolutionsPage.largeBusiness.buttonText')}
              </FilloutButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
