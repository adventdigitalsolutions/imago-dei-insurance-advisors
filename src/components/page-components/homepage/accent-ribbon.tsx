import { getCopy } from '@/getCopy';

export const AccentRibbon = () => (
  <div className="bg-gradient-to-r from-dark-blue via-medical-blue to-royal-purple py-4 px-6 w-full border-y border-medical-navy/10">
    <a
      href="https://business.uschristianchamber.com/newsblogsandpressreleases/Details/for-immediate-release-u-s-christian-chamber-launches-faith-aligned-healthcare-solution-for-christian-led-small-businesses-294431"
      target="_blank"
      className="flex items-center justify-center gap-3 text-white text-base sm:text-lg font-medium uppercase tracking-[0.06em]"
    >
      <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/70" />
      <span className="hover:underline underline-offset-4">
        {getCopy('accentRibbonSection.accentRibbonText')}
      </span>
      <span className="text-white/70 text-base leading-none">→</span>
    </a>
  </div>
);
