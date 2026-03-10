import { getCopy } from '@/getCopy';
import Link from 'next/link';

export const PartnerSection = () => (
  <div className="bg-pale-blue py-20 sm:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="md:max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-royal-purple uppercase mb-5">
          {getCopy('partnerSection.partnerPreHeader')}
        </p>
        <h2 className="font-lora text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-8 whitespace-pre-line">
          {getCopy('partnerSection.partnerBodyPt1')}
          <span className="italic text-royal-purple">
            {getCopy('partnerSection.partnerBodyPt2')}
          </span>
          {getCopy('partnerSection.partnerBodyPt3')}
        </h2>
        <Link
          className="text-royal-purple font-semibold underline underline-offset-4 hover:text-dark-blue transition-colors text-lg"
          href="/about"
        >
          {getCopy('partnerSection.partnerCta')}
        </Link>
      </div>
    </div>
  </div>
);
