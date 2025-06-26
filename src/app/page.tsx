import Image from 'next/image';
import { getCopy } from '@/getCopy';
import { Button } from '@/components/button';

export default function Home() {
  return (
    <div className="min-h-screen w-full mt-20 relative overflow-clip">
      <div className="relative">
        <Image
          src="/people-chatting.png"
          alt="People Chatting"
          width={800}
          height={400}
          className="w-full h-[480px] lg:h-auto rounded mb-4 max-h-[700px] object-cover"
        />
        <div className="absolute inset-0 rounded bg-royal-purple/70 pointer-events-none pl-12 lg:pl-32 text-white z-10">
          <div className="mt-20 lg:mt-32">
            <div className="text-[40px] lg:text-[100px] font-montserrat font-bold">
              {getCopy('hero.title')}
            </div>
            <div className="font-extralight text-[28px] lg:text-[60px] mt-[-20px]">
              {getCopy('hero.subtitle')}
            </div>
          </div>
          <div className="mt-10 text-2xl lg:text-3xl max-w-md font-medium">
            <div className="underline inline">
              {getCopy('hero.description1')}
            </div>
            {getCopy('hero.description2')}
          </div>
          <div className="mt-10 gap-4 lg:gap-0 w-72 lg:w-auto flex flex-col lg:flex-row">
            <Button>{getCopy('hero.button1')}</Button>
            <Button className="lg:ml-4">{getCopy('hero.button2')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
