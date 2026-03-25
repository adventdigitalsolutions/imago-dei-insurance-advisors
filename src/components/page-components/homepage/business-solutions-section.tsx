import { Button } from '@/components/button';
import { getCopy } from '@/getCopy';
import { RightArrow } from '@/components/icons/right-arrow';
import Link from 'next/link';

export const BusinessSolutionsSection = () => (
  <div className="bg-medical-sky/40 py-20 sm:py-28 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Savings callout */}
      <div className="bg-white rounded-2xl p-10 sm:p-14 shadow-sm border border-clinical-border flex flex-col justify-center">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-medical-blue/90 mb-3">
          {getCopy('businessSolutionsSection.box1Pt1')}
        </p>
        <div className="text-medical-navy text-5xl sm:text-6xl font-bold mb-4">
          {getCopy('businessSolutionsSection.box1Pt2')}
        </div>
        <div className="text-muted-ink text-xl sm:text-2xl font-light leading-relaxed">
          {getCopy('businessSolutionsSection.box1Pt3')}
        </div>
      </div>
      {/* CTA card */}
      <div className="bg-gradient-to-br from-medical-navy to-medical-blue rounded-2xl p-10 sm:p-14 text-white flex flex-col justify-between min-h-[280px] shadow-sm border border-medical-navy/20">
        <div className="text-2xl sm:text-3xl font-light text-white/90 whitespace-pre-line leading-snug">
          {getCopy('businessSolutionsSection.box2')}
        </div>
        <Link href="/business-solutions" className="mt-8">
          <Button className="!bg-white/10 hover:!bg-white/20 border border-white/50 backdrop-blur-sm flex items-center gap-2">
            <span>{getCopy('navbarItems.1')}</span>
            <RightArrow />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
