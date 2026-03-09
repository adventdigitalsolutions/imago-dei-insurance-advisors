import Image from 'next/image';
import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';
import Link from 'next/link';

export const Hero = () => (
  <div className=" w-full mt-20 relative overflow-clip">
    <div className="relative">
      <Image
        src="/people-chatting.png"
        alt="People Chatting"
        width={800}
        height={400}
        className="w-full h-[480px] z-0 lg:h-auto mb-4 max-h-[700px] object-cover"
      />
      <div className="absolute inset-0 rounded bg-royal-purple/70 pl-9 lg:pl-20 text-white z-10 justify-center flex">
        <div className="max-w-6xl w-full">
          <div className="mt-16 lg:mt-32">
            <div className="text-[44px] lg:text-[100px] font-montserrat font-bold">
              {getCopy('hero.title')}
            </div>
            <div className="font-extralight text-[32px] lg:text-[60px] mt-[-20px]">
              {getCopy('hero.subtitle')}
            </div>
          </div>
          <div className="mt-10 text-2xl lg:text-3xl max-w-md font-medium pr-6 sm:pr-0">
            <div className="underline inline">
              {getCopy('hero.description1')}
            </div>
            {getCopy('hero.description2')}
          </div>
          <div className="mt-10 gap-4 lg:gap-0 w-72 lg:w-auto flex flex-col lg:flex-row">
            <Link href="/business-solutions">
              <Button variant="deepBlue">{getCopy('hero.button1')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
