import { getCopy } from '@/getCopy';

export const CtaCard = () => (
  <div
    className="relative w-full h-full bg-cover bg-center bg-no-repeat py-48 justify-end flex text-center"
    style={{
      backgroundImage: 'url(/grid_bg.png)',
    }}
  >
    {/* Gradient overlay */}
    <div
      className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-br from-white to-royal-purple/60"
      aria-hidden="true"
    />
    {/* CTA Card */}
    <div className="bg-white shadow-xl rounded-xl p-20 m-auto text-left">
      <div className="text-2xl font-extralight text-gray-600">
        {getCopy('ctaCard.preHeader')}
      </div>
      <div className="text-6xl font-bold text-royal-purple mt-2">
        {getCopy('ctaCard.header')}
      </div>
    </div>
  </div>
);
