import { getCopy } from '@/getCopy';

export const BusinessSolutionsSection = () => (
  <div
    className="relative w-full h-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: 'url(/grid_bg.png)'
    }}
  >
    <div className="relative z-10">
      <div className="py-20 bg-gray-400/70 text-white text-xl">
        {getCopy('businessSolutionsSection.box2')}
      </div>
    </div>
  </div>
);
