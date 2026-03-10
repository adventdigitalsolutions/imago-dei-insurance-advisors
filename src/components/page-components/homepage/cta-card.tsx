import { Button } from '@/components/button';
import { getCopy } from '@/getCopy';
import Link from 'next/link';
import { FaArrowRight, FaEnvelope, FaPhone } from 'react-icons/fa';

export const CtaCard = () => (
  <div className="bg-white py-24 sm:py-32 px-6 border-t border-gray-100">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-xs font-semibold tracking-widest text-royal-purple uppercase mb-5">
        {getCopy('ctaCard.preHeader')}
      </p>
      <h2 className="font-lora text-4xl sm:text-6xl font-bold text-gray-900 mb-12">
        {getCopy('ctaCard.header')}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <Link
          href="https://calendly.com/david-sog0/30min?month=2025-07"
          target="_blank"
        >
          <Button className="shadow-md">
            <span className="flex items-center gap-2 py-0.5">
              {getCopy('ctaCard.buttonText')}
              <FaArrowRight size={14} />
            </span>
          </Button>
        </Link>
        <div className="h-px w-20 sm:h-12 sm:w-px bg-gray-200" />
        <div className="flex flex-col gap-3 text-left">
          <a
            href={`tel:${getCopy('ctaCard.phoneInfo')}`}
            className="flex items-center gap-2.5 text-gray-600 hover:text-royal-purple transition-colors"
          >
            <FaPhone className="text-royal-purple" size={13} />
            <span className="text-lg font-medium">{getCopy('ctaCard.phoneInfo')}</span>
          </a>
          <a
            href={`mailto:${getCopy('ctaCard.emailInfo')}`}
            className="flex items-center gap-2.5 text-gray-600 hover:text-royal-purple transition-colors"
          >
            <FaEnvelope className="text-royal-purple" size={13} />
            <span className="text-lg font-medium">{getCopy('ctaCard.emailInfo')}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);
