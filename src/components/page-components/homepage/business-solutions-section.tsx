import { Button } from '@/components/button';
import { getCopy } from '@/getCopy';
import { RightArrow } from '@/components/icons/right-arrow';
import Link from 'next/link';

export const BusinessSolutionsSection = () => (
  <div className="bg-slate-50 py-20 sm:py-32 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Savings callout */}
      <div className="bg-white rounded-2xl p-10 sm:p-14 shadow-sm border border-gray-100 flex flex-col justify-center">
        <div className="text-royal-purple text-5xl sm:text-6xl font-bold mb-4">
          {getCopy('businessSolutionsSection.box1Pt2')}
        </div>
        <div className="text-gray-700 text-xl sm:text-2xl font-light leading-relaxed">
          {getCopy('businessSolutionsSection.box1Pt3')}
        </div>
      </div>
      {/* CTA card */}
      <div className="bg-gradient-to-br from-dark-blue to-royal-purple rounded-2xl p-10 sm:p-14 text-white flex flex-col justify-between min-h-[280px]">
        <div className="text-2xl sm:text-3xl font-light text-white/90 whitespace-pre-line leading-snug">
          {getCopy('businessSolutionsSection.box2')}
        </div>
        <Link href="/business-solutions" className="mt-8">
          <Button className="!bg-white/15 hover:!bg-white/25 border border-white/40 backdrop-blur-sm flex items-center gap-2">
            <span>{getCopy('navbarItems.1')}</span>
            <RightArrow />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
