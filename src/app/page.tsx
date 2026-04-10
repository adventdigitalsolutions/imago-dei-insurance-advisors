import { AccentRibbon } from '@/components/page-components/homepage/accent-ribbon';
import { BusinessSolutionsSection } from '@/components/page-components/homepage/business-solutions-section';
import { CtaCard } from '@/components/page-components/homepage/cta-card';
import { Hero } from '@/components/page-components/homepage/hero';
// import { LeadMagnetSection } from '@/components/page-components/homepage/lead-magnet-section';
import { MissionSection } from '@/components/page-components/homepage/mission-section';
import { PartnerSection } from '@/components/page-components/homepage/partner-section';
import { TestimonialsSection } from '@/components/page-components/homepage/testimonials-section';
import { WhoWeServeSection } from '@/components/page-components/homepage/who-we-serve-section';

export default function Home() {
  return (
    <>
      <Hero />
      <AccentRibbon />
      <TestimonialsSection />
      <MissionSection />
      <BusinessSolutionsSection />
      <WhoWeServeSection />
      <PartnerSection />
      {/* <LeadMagnetSection /> */}
      <CtaCard />
    </>
  );
}

