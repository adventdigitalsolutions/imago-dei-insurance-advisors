import Image from 'next/image';
import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';
import Link from 'next/link';

export const Hero = () => (
  <div className="w-full mt-[70px] relative overflow-clip">
    <div className="relative">
      <Image
        src="/people-chatting.png"
        alt="People Chatting"
        width={800}
        height={400}
        className="w-full h-[560px] z-0 lg:h-auto mb-4 max-h-[720px] object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 via-royal-purple/55 to-transparent pl-9 lg:pl-20 z-10 flex items-center">
        <div className="max-w-6xl w-full">
          <p className="text-md font-semibold tracking-widest uppercase text-white/70 mb-5">
            {getCopy('hero.eyebrow')}
          </p>
          <div className="text-[42px] lg:text-[82px] font-lora font-bold leading-none text-white">
            {getCopy('hero.title')}
          </div>
          <div className="font-light text-[24px] lg:text-[44px] text-white/80">
            {getCopy('hero.subtitle')}
          </div>
          <div className="mt-7 text-base lg:text-xl max-w-sm font-normal text-white/80 pr-6 sm:pr-0 leading-relaxed">
            <span className="font-semibold text-white">
              {getCopy('hero.description1')}
            </span>
            {getCopy('hero.description2')}
          </div>
          <div className="mt-8">
            <Link href="/business-solutions">
              <Button variant="deepBlue">{getCopy('hero.button1')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
