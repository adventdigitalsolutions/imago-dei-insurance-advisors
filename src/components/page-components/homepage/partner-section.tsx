import { getCopy } from '@/getCopy';

export const PartnerSection = () => (
  <div
    className="relative w-full h-full bg-cover bg-center bg-no-repeat py-48 justify-end flex"
    style={{
      backgroundImage: 'url(/grid_bg.png)',
    }}
  >
    <div className="py-28 px-24 w-3/5 whitespace-pre-line bg-gray-100 rounded-l-[170px] rounded-r-none ">
      <div className="font-extralight text-black text-3xl">
        {getCopy('partnerSection.partnerPreHeader')}
      </div>
      <div className="text-6xl whitespace-pre-line leading-[70px] font-bold mt-2 text-royal-purple">
        {getCopy('partnerSection.partnerBodyPt1')}
        <span className="italic">
          {getCopy('partnerSection.partnerBodyPt2')}
        </span>
        {getCopy('partnerSection.partnerBodyPt3')}
      </div>
      <div className="text-2xl font-extralight mt-6 cursor-pointer underline decoration-gray-400 decoration-2">
        {getCopy('partnerSection.partnerCta')}
      </div>
    </div>
  </div>
);
