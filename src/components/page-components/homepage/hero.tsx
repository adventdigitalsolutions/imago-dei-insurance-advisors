import Image from 'next/image';
import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';
import Link from 'next/link';

export const Hero = () => (
  <div className="w-full md:mt-[70px] relative overflow-clip">
    <div className="relative">
      <Image
        src="/people-chatting.png"
        alt="People Chatting"
        width={800}
        height={400}
        className="w-full h-[620px] sm:h-[560px] z-0 lg:h-auto max-h-[720px] object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-medical-navy/84 to-royal-purple/38 z-10 flex items-center">
        <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 lg:px-6">
          <div className="max-w-[35rem] py-9 sm:py-10 lg:py-16">
            <p className="text-[0.82rem] sm:text-[0.95rem] lg:text-[1rem] font-semibold tracking-[0.19em] sm:tracking-[0.22em] uppercase text-pale-blue drop-shadow-sm mb-5 lg:mb-8">
              {getCopy('hero.eyebrow')}
            </p>
            <div className="text-[clamp(2.25rem,11vw,3.5rem)] lg:text-[90px] font-lora font-bold tracking-[-0.04em] lg:tracking-[-0.05em] leading-[0.92] lg:leading-[0.88] text-white drop-shadow-sm mb-4 lg:mb-5">
              {getCopy('hero.title')}
            </div>
            <div className="font-medium text-[clamp(1.9rem,8vw,2.7rem)] lg:text-[52px] text-white tracking-[-0.02em] lg:tracking-[-0.03em] leading-[0.98] lg:leading-[0.96] drop-shadow-sm mb-6 sm:mb-8 lg:mb-10">
              {getCopy('hero.subtitle')}
            </div>
            <div className="text-[1.02rem] sm:text-[1.12rem] lg:text-[1.42rem] max-w-lg font-normal text-white/90 pr-2 sm:pr-0 leading-relaxed lg:leading-[1.65]">
              <span className="font-semibold text-white">
                {getCopy('hero.description1')}
              </span>
              {getCopy('hero.description2')}
            </div>
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <Link href="/business-solutions">
                <Button
                  variant="deepBlue"
                  className="min-h-14 px-8 lg:px-10 w-full sm:w-auto justify-center"
                >
                  {getCopy('hero.button1')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
