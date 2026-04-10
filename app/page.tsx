import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { LazyCTASection as CTASection } from "@/components/sections/lazy";

const DivisionsGrid = dynamic(() =>
  import("@/components/sections/DivisionsGrid").then((m) => m.DivisionsGrid),
);
const Philosophy = dynamic(() =>
  import("@/components/sections/Philosophy").then((m) => m.Philosophy),
);
const Timeline = dynamic(() =>
  import("@/components/sections/Timeline").then((m) => m.Timeline),
);

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
