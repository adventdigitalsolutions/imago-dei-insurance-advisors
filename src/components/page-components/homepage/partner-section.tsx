import { getCopy } from '@/getCopy';
import Link from 'next/link';

export const PartnerSection = () => (
  <div className="bg-medical-sky/70 pb-24 sm:pb-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="md:max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-medical-blue uppercase mb-5">
          {getCopy('partnerSection.partnerPreHeader')}
        </p>
        <h2 className="font-lora text-4xl sm:text-6xl font-bold text-ink leading-tight mb-8 whitespace-pre-line">
          {getCopy('partnerSection.partnerBodyPt1')}
          <span className="italic text-medical-blue">
            {getCopy('partnerSection.partnerBodyPt2')}
          </span>
          {getCopy('partnerSection.partnerBodyPt3')}
        </h2>
        <Link
          className="text-medical-blue font-semibold underline underline-offset-4 hover:text-medical-navy transition-colors text-lg"
          href="/about"
        >
          {getCopy('partnerSection.partnerCta')}
        </Link>
      </div>
    </div>
  </div>
);
