import { getCopy } from '@/getCopy';

export const MissionSection = () => (
  <div className="bg-medical-sky/70 py-24 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <svg
        className="w-12 h-12 text-medical-blue/35 mx-auto mb-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="font-lora text-muted-ink text-xl md:text-3xl font-light leading-relaxed md:leading-loose">
        {getCopy('missionSection.missionPt1')}
        <span className="font-semibold text-medical-navy">
          {getCopy('missionSection.missionPt2')}
        </span>
        {getCopy('missionSection.missionPt3')}
      </p>
    </div>
  </div>
);
