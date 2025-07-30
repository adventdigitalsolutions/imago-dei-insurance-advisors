import { getCopy } from '@/getCopy';
import Link from 'next/link';

export const PartnerSection = () => (
  <div
    className="relative w-full h-full bg-cover bg-center bg-no-repeat py-20 sm:py-48 justify-end flex overflow-clip"
    style={{
      backgroundImage: 'url(/grid_bg.png)',
    }}
  >
    <div className="overflow-clip py-10 pl-16 md:py-28 md:px-24 w-11/12 sm:w-3/5 whitespace-pre-line bg-gray-100 rounded-l-[170px] rounded-r-none ">
      <div className="font-extralight text-black text-xl md:text-3xl">
        {getCopy('partnerSection.partnerPreHeader')}
      </div>
      <div className="text-3xl sm:text-6xl whitespace-pre-line leading-[36px] md:leading-[70px] font-bold sm:mt-2 text-royal-purple mb-3 sm:mb-5">
        {getCopy('partnerSection.partnerBodyPt1')}
        <span className="italic">
          {getCopy('partnerSection.partnerBodyPt2')}
        </span>
        {getCopy('partnerSection.partnerBodyPt3')}
      </div>
      <Link
        className="md:text-2xl font-extralight cursor-pointer underline decoration-gray-400 decoration-2"
        href="/about"
      >
        {getCopy('partnerSection.partnerCta')}
      </Link>
    </div>
  </div>
);
