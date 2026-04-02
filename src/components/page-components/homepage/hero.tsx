import Image from 'next/image';
import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';
import Link from 'next/link';

export const Hero = () => (
  <div className="w-full md:mt-[70px] relative overflow-clip">
    <div className="relative">
      <Image
        src="/people-chatting.png"
        alt="Team members having a benefits consultation"
        width={800}
        height={400}
        priority
        className="w-full h-[840px] sm:h-[780px] z-0 lg:h-auto max-h-[900px] object-cover object-top"
      />
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/10" />
      </div>
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 lg:px-6">
          <div className="max-w-[38rem] py-12 sm:py-14 lg:py-20">
            <h1 className="font-lora font-bold text-[clamp(1.9rem,5.5vw,3.2rem)] tracking-[-0.03em] leading-[1.1] text-white mb-5">
              {getCopy('hero.headline')}
            </h1>
            <p className="text-white/85 text-[clamp(1rem,2vw,1.15rem)] leading-snug mb-7">
              {getCopy('hero.subheadline')}
            </p>
            <ul className="space-y-2 mb-8">
              {(['check1', 'check2', 'check3'] as const).map((key) => (
                <li key={key} className="flex items-center gap-2.5 text-white/90 text-[0.97rem]">
                  <span className="text-blue-300 text-lg leading-none">✓</span>
                  {getCopy(`hero.${key}`)}
                </li>
              ))}
            </ul>
            <Link
              href="https://calendly.com/david-sog0/30min?month=2025-07"
              target="_blank"
            >
              <Button
                variant="deepBlue"
                className="min-h-14 px-8 lg:px-10 w-full sm:w-auto justify-center text-[1.05rem] lg:text-[1.12rem]"
              >
                {getCopy('hero.buttonText')}
              </Button>
            </Link>
            <p className="mt-3 text-white/60 text-sm">{getCopy('hero.subNote')}</p>
            <Link
              href="https://imagodei.fillout.com/id-interest"
              target="_blank"
              className="mt-3 block text-white/70 text-sm underline underline-offset-2 hover:text-white transition-colors"
            >
              {getCopy('hero.secondaryText')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

