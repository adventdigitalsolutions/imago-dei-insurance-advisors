import { Button } from '@/components/button';
import { getCopy } from '@/getCopy';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const CTA_STEPS = [
  'ctaCard.step1',
  'ctaCard.step2',
  'ctaCard.step3',
] as const;

export const CtaCard = () => (
  <div className="bg-white py-24 sm:py-32 px-6 border-t border-clinical-border/70">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-lora text-4xl sm:text-6xl font-bold tracking-[-0.04em] text-ink mb-6 leading-tight">
        {getCopy('ctaCard.header')}
      </h2>
      <p className="text-[1.1rem] sm:text-[1.2rem] text-muted-ink leading-relaxed mb-4">
        {getCopy('ctaCard.body')}
      </p>
      <p className="text-[1.05rem] text-muted-ink leading-relaxed mb-10">
        {getCopy('ctaCard.subNote')}
      </p>

      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-medical-blue mb-5">
        Here&apos;s what to expect:
      </p>
      <ol className="flex flex-col gap-4 mb-10">
        {CTA_STEPS.map((key, i) => (
          <li key={key} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-medical-blue text-white font-bold flex items-center justify-center text-[0.88rem]">
              {i + 1}
            </span>
            <p className="text-[1.05rem] text-muted-ink leading-relaxed pt-1">
              {getCopy(key)}
            </p>
          </li>
        ))}
      </ol>

      <p className="text-[1.1rem] font-semibold text-medical-navy italic leading-relaxed mb-10">
        {getCopy('ctaCard.calloutText')}
      </p>

      <div className="flex flex-col items-start gap-5">
        <div>
          <Link
            href="https://calendly.com/david-sog0/30min?month=2025-07"
            target="_blank"
          >
            <Button className="shadow-md min-h-14 px-8 text-[1.05rem]">
              <span className="flex items-center gap-2 py-0.5">
                {getCopy('ctaCard.buttonText')}
                <FaArrowRight size={14} />
              </span>
            </Button>
          </Link>
        </div>
        <Link
          href="https://imagodei.fillout.com/id-interest"
          target="_blank"
          className="text-medical-blue underline underline-offset-4 text-[0.95rem] hover:text-medical-navy transition-colors"
        >
          {getCopy('ctaCard.secondaryText')}
        </Link>
      </div>
    </div>
  </div>
);

