import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { LazyCTASection as CTASection } from "@/components/sections/lazy";

export const metadata: Metadata = {
  alternates: { canonical: "https://neobytestudios.com" },
  openGraph: {
    title: "NEOBYTE STUDIOS — Where AI Unlocks Imagination",
    description:
      "A monoauthor creative studio amplified by AI. Beyond The Void.",
    url: "https://neobytestudios.com",
  },
};

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
