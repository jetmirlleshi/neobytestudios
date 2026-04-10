import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const DivisionsGrid = dynamic(() =>
  import("@/components/sections/DivisionsGrid").then((m) => m.DivisionsGrid),
);
const Philosophy = dynamic(() =>
  import("@/components/sections/Philosophy").then((m) => m.Philosophy),
);
const Timeline = dynamic(() =>
  import("@/components/sections/Timeline").then((m) => m.Timeline),
);
const CTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((m) => m.CTASection),
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
