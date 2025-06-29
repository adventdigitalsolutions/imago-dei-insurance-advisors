import { getCopy } from '@/getCopy';

export const MissionSection = () => (
  <div className="relative w-full py-16 flex justify-center text-center text-4xl font-light tracking-[3px] leading-relaxed px-10 md:px-56 overflow-hidden">
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
    <span className="text-white leading-[80px]">
      {getCopy('missionSection.missionPt1')}
      <span className="underline">{getCopy('missionSection.missionPt2')}</span>
      {getCopy('missionSection.missionPt3')}
    </span>
  </div>
);
