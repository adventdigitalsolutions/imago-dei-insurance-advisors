import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import { Process } from "@/components/Process";
import Team from "@/components/Team";
import PartnerFeatures from "@/components/PartnerFeatures";
// import FAQ from "@/components/FAQ";
// import { Layout390 } from "@/components/Layout390";
// import { Layout391 } from "@/components/Layout391";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <PartnerFeatures/>
      {/* <Layout390/> */}
      {/* <Layout391/> */}
      <Process/>
      <Team/>
      {/* <FAQ/> */}
      <Partners/>
    </main>
  );
}
