import { getCopy } from '@/getCopy';
import Link from 'next/link';

export const PartnerSection = () => (
  <div className="bg-medical-sky/70 px-6 pt-8 pb-24 sm:pt-12 sm:pb-32">
    <div className="max-w-6xl mx-auto">
      <div className="mb-14 flex items-center gap-4" aria-hidden="true">
        <span className="h-px flex-1 bg-medical-blue/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-medical-blue/45" />
        <span className="h-px flex-1 bg-medical-blue/25" />
      </div>
      <div className="md:max-w-2xl mt-32">
        <p className="text-sm font-semibold tracking-[0.22em] text-medical-blue uppercase mb-6">
          {getCopy('partnerSection.partnerPreHeader')}
        </p>
        <h2 className="font-lora text-5xl sm:text-7xl font-bold tracking-[-0.05em] text-ink leading-[0.95] mb-10 whitespace-pre-line">
          {getCopy('partnerSection.partnerBodyPt1')}
          <span className="italic text-medical-blue">
            {getCopy('partnerSection.partnerBodyPt2')}
          </span>
          {getCopy('partnerSection.partnerBodyPt3')}
        </h2>
        <Link
          className="text-medical-blue font-semibold underline underline-offset-4 hover:text-medical-navy transition-colors text-xl"
          href="/about"
        >
          {getCopy('partnerSection.partnerCta')}
        </Link>
      </div>
    </div>
  </div>
);
