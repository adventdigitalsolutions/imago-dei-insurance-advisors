import { getCopy } from '@/getCopy';

export const AccentRibbon = () => (
  <div className="bg-royal-purple/70 p-8 w-full text-center mt-[-16px]">
    <a
      href="https://business.uschristianchamber.com/newsblogsandpressreleases/Details/for-immediate-release-u-s-christian-chamber-launches-faith-aligned-healthcare-solution-for-christian-led-small-businesses-294431"
      target="_blank"
      className="text-2xl underline text-white uppercase"
    >
      {getCopy('accentRibbonSection.accentRibbonText')}
    </a>
  </div>
);
