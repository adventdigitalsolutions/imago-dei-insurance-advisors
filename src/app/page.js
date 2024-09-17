import Hero from "@/components/Hero";
import Features1 from "@/components/Features1";
import Logos from "@/components/Logos";
import { Layout486 } from "@/components/Process";
import Team from "@/components/Team";
// import Faq7 from "@/components/FAQ";
// import { Layout390 } from "@/components/Layout390";
// import { Layout391 } from "@/components/Layout391";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Features1/>
      {/* <Layout390/> */}
      {/* <Layout391/> */}
      <Layout486/>
      <Team/>
      {/* <Faq7/> */}
      <Logos/>
    </main>
  );
}
