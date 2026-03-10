import { getCopy } from '@/getCopy';

export const AccentRibbon = () => (
  <div className="bg-royal-purple py-6 px-6 w-full relative top-[-20px]">
    <a
      href="https://business.uschristianchamber.com/newsblogsandpressreleases/Details/for-immediate-release-u-s-christian-chamber-launches-faith-aligned-healthcare-solution-for-christian-led-small-businesses-294431"
      target="_blank"
      className="flex items-center justify-center gap-3 text-white text-xl font-medium"
    >
      <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-royal-purple" />
      <span className="hover:underline underline-offset-4">
        {getCopy('accentRibbonSection.accentRibbonText')}
      </span>
      <span className="text-white/50 text-base leading-none">→</span>
    </a>
  </div>
);
