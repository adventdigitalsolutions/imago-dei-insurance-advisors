import { Button } from '@/components/button';
import { getCopy } from '@/getCopy';
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaRegCalendarAlt,
} from 'react-icons/fa';

export const CtaCard = () => (
  <div className="relative w-full h-full py-48 justify-end flex text-center">
    {/* Background image */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/grid_bg.png)',
      }}
      aria-hidden="true"
    />
    {/* Gradient overlay */}
    <div
      className="absolute inset-0 w-full h-full z-10 bg-gradient-to-br from-white to-royal-purple/60 opacity-50"
      aria-hidden="true"
    />
    {/* CTA Card */}
    <div className="relative bg-white shadow-xl rounded-xl overflow-clip px-28 py-24 m-auto text-left z-20">
      <div className="absolute -top-3 right-12 rotate-[21deg] text-gray-100 pointer-events-none select-none z-0">
        <svg className="hidden" /> {/* Prevents hydration mismatch if SSR */}
        {/* Use react-icons for the calendar icon */}
        <span className="w-28 h-28 block">
          <FaRegCalendarAlt size={250} />
        </span>
      </div>
      <div className="text-2xl z-20 font-extralight text-gray-600 relative">
        {getCopy('ctaCard.preHeader')}
      </div>
      <div className="text-6xl z-20 font-bold text-royal-purple mt-2 relative">
        {getCopy('ctaCard.header')}
      </div>
      <div className="flex mt-8 items-center gap-8">
        <Button className="shadow-md h-fit">
          <div className="flex items-center uppercase py-3">
            {getCopy('ctaCard.buttonText')}
            <FaArrowRight size={15} className="ml-2" />
          </div>
        </Button>
        <div className="h-28 bg-black/45 w-[1px]" />
        <div className="font-montserrat font-thin">
          <div className="flex items-center text-black text-2xl">
            <FaPhone className="inline mr-2 text-gray-400" />
            {getCopy('ctaCard.phoneInfo')}
          </div>
          <div className="text-2xl flex items-center text-black mt-2">
            <FaEnvelope className="mr-2 text-gray-400" />
            {getCopy('ctaCard.emailInfo')}
          </div>
        </div>
      </div>
    </div>
  </div>
);
