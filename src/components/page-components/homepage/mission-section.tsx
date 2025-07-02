import { getCopy } from '@/getCopy';

export const MissionSection = () => (
  <div className="relative w-full py-16 flex justify-center text-center text-2xl md:text-4xl font-light tracking-[3px] md:tracking-[3px] px-8 overflow-hidden">
    <div
      className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center rotate-[15deg]"
      style={{
        backgroundImage: 'url(/grid_bg.png)',
      }}
      aria-hidden="true"
    />
    {/* Gradient overlay */}
    <div
      className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-br from-royal-purple/90 to-royal-purple/30"
      aria-hidden="true"
    />
    <span className="text-white leading-[40px] md:leading-[80px] max-w-5xl">
      {getCopy('missionSection.missionPt1')}
      <span className="underline">{getCopy('missionSection.missionPt2')}</span>
      {getCopy('missionSection.missionPt3')}
    </span>
  </div>
);
