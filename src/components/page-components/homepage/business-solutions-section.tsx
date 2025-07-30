import { Button } from '@/components/button';
import { getCopy } from '@/getCopy';
import { RightArrow } from '@/components/icons/right-arrow';
import Link from 'next/link';

export const BusinessSolutionsSection = () => (
  <div
    className="relative w-full h-full bg-cover bg-center bg-no-repeat py-20 sm:py-40 overflow-clip"
    style={{
      backgroundImage: 'url(/grid_bg.png)',
    }}
  >
    <div className="flex flex-col sm:flex-row w-full gap-10">
      <div className="py-14 sm:py-28 w-11/12 sm:w-2/3 bg-gray-100 text-black text-xl sm:text-4xl rounded-l-none rounded-r-[80px] sm:whitespace-pre-line font-light px-10 sm:px-48 leading-relaxed tracking-[3px] content-center">
        {getCopy('businessSolutionsSection.box1Pt1')}
        <span className="underline decoration-gray-400 decoration-2">
          {getCopy('businessSolutionsSection.box1Pt2')}
        </span>
        {getCopy('businessSolutionsSection.box1Pt3')}
      </div>
      <div className="py-10 pl-14 sm:py-28 sm:px-16 w-11/12 sm:w-1/3 whitespace-pre-line bg-gray-100 text-black text-3xl sm:text-4xl rounded-l-[80px] rounded-r-none overflow-clip self-end">
        {getCopy('businessSolutionsSection.box2')}
        <Link href="/business-solutions">
          <Button className="mt-6 flex items-center gap-2">
            <div className="flex items-center gap-2 pt-[2px]">
              <div className="mt-[-2px]">{getCopy('navbarItems.1')}</div>
              <RightArrow />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
