import { CTASection } from "@/components/sections/CTASection";
import { DivisionsGrid } from "@/components/sections/DivisionsGrid";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <DivisionsGrid />
      <Philosophy />
      <Timeline />
      <CTASection />
    </>
  );
}
