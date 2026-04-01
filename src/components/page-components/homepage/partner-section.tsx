import { getCopy } from '@/getCopy';

const DIFFERENTIATION_FEATURES = [
  {
    titleKey: 'partnerSection.feature1Title',
    bodyKey: 'partnerSection.feature1Body',
  },
  {
    titleKey: 'partnerSection.feature2Title',
    bodyKey: 'partnerSection.feature2Body',
  },
  {
    titleKey: 'partnerSection.feature3Title',
    bodyKey: 'partnerSection.feature3Body',
  },
  {
    titleKey: 'partnerSection.feature4Title',
    bodyKey: 'partnerSection.feature4Body',
  },
] as const;

export const PartnerSection = () => (
  <div className="bg-medical-sky/70 px-6 py-20 sm:py-28">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-14 max-w-2xl">
        {getCopy('partnerSection.header')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {DIFFERENTIATION_FEATURES.map((feature) => (
          <div
            key={feature.titleKey}
            className="bg-white rounded-2xl p-8 border border-clinical-border shadow-sm"
          >
            <h3 className="font-semibold text-medical-navy text-[1.15rem] mb-3">
              {getCopy(feature.titleKey)}
            </h3>
            <p className="text-muted-ink text-[1rem] leading-relaxed">
              {getCopy(feature.bodyKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

