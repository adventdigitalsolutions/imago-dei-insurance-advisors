import { BusinessSolutionsSection } from '@/components/page-components/homepage/business-solutions-section';
import { Hero } from '@/components/page-components/homepage/hero';
import { MissionSection } from '@/components/page-components/homepage/mission-section';
import { PartnerSection } from '@/components/page-components/homepage/partner-section';

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessSolutionsSection />
      <MissionSection />
      <PartnerSection />
    </>
  );
}
