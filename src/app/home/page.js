import Hero from "@/components/Hero";
import { DetailCardShort, DetailCardTall } from "@/components/DetailCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[2200px] mx-auto">
      <Hero/>
    </main>
  );
}
