import { getCopy } from '@/getCopy';

export const MissionSection = () => (
  <div className="bg-medical-sky/70 py-20 sm:py-28 px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-lora text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-medical-navy leading-tight mb-8">
        {getCopy('missionSection.header')}
      </h2>
      <div className="max-w-3xl flex flex-col gap-5">
        <p className="text-[1.1rem] sm:text-[1.2rem] text-muted-ink leading-relaxed">
          {getCopy('missionSection.body1')}
        </p>
        <p className="text-[1.1rem] sm:text-[1.2rem] text-muted-ink leading-relaxed">
          {getCopy('missionSection.body2')}
        </p>
        <p className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-medical-navy leading-relaxed">
          {getCopy('missionSection.body3')}
        </p>
      </div>
    </div>
  </div>
);

