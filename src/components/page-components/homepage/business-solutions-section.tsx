import { Button } from '@/components/button';
import { getCopy } from '@/getCopy';
import Link from 'next/link';
import { FaSlidersH, FaUnlock, FaHandshake } from 'react-icons/fa';

const SOLUTION_FEATURES = [
  {
    icon: <FaSlidersH size={24} />,
    titleKey: 'businessSolutionsSection.feature1Title',
    bodyKey: 'businessSolutionsSection.feature1Body',
  },
  {
    icon: <FaUnlock size={24} />,
    titleKey: 'businessSolutionsSection.feature2Title',
    bodyKey: 'businessSolutionsSection.feature2Body',
  },
  {
    icon: <FaHandshake size={24} />,
    titleKey: 'businessSolutionsSection.feature3Title',
    bodyKey: 'businessSolutionsSection.feature3Body',
  },
] as const;

export const BusinessSolutionsSection = () => (
  <div className="bg-white py-20 sm:py-28 px-6 border-t border-clinical-border/60">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-3xl mb-14">
        <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-5">
          {getCopy('businessSolutionsSection.header')}
        </h2>
        <p className="text-[1.1rem] sm:text-[1.2rem] text-muted-ink leading-relaxed mb-3">
          {getCopy('businessSolutionsSection.subtext')}
        </p>
        <p className="text-[0.98rem] text-muted-ink/80 leading-relaxed italic">
          {getCopy('businessSolutionsSection.tagline')}
        </p>
      </div>

      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-medical-blue mb-8">
        {getCopy('businessSolutionsSection.howWeHelpHeader')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {SOLUTION_FEATURES.map((feature) => (
          <div
            key={feature.titleKey}
            className="bg-medical-sky/40 rounded-2xl p-8 border border-clinical-border"
          >
            <div className="text-medical-blue mb-4">{feature.icon}</div>
            <h3 className="text-medical-navy font-semibold text-[1.15rem] mb-3">
              {getCopy(feature.titleKey)}
            </h3>
            <p className="text-muted-ink text-[1rem] leading-relaxed">
              {getCopy(feature.bodyKey)}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[1.1rem] sm:text-[1.2rem] text-medical-navy font-semibold leading-relaxed mb-10 max-w-3xl">
        {getCopy('businessSolutionsSection.resultText')}
      </p>

      <div className="flex flex-col items-start gap-4">
        <div>
          <Link
            href="https://calendly.com/david-sog0/30min?month=2025-07"
            target="_blank"
          >
            <Button className="min-h-14 px-8 text-[1.05rem]">
              {getCopy('businessSolutionsSection.buttonText')}
            </Button>
          </Link>
        </div>
        <Link
          href="/solutions"
          className="text-medical-blue underline underline-offset-4 text-[0.95rem] hover:text-medical-navy transition-colors"
        >
          {getCopy('businessSolutionsSection.secondaryText')}
        </Link>
      </div>
    </div>
  </div>
);

