import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { AboutHero } from "@/components/sections/AboutHero";
import { LazyCTASection as CTASection } from "@/components/sections/lazy";

const QuoteProtocol = dynamic(() =>
  import("@/components/sections/QuoteProtocol").then((m) => m.QuoteProtocol),
);
const StudioEvolution = dynamic(() =>
  import("@/components/sections/StudioEvolution").then(
    (m) => m.StudioEvolution,
  ),
);

export const metadata: Metadata = {
  title: "About — The Origin Sequence",
  description:
    "The story of NeoByteStudios. Founded by Jetmir to bridge the void between imagination and execution through AI-amplified craftsmanship.",
  alternates: { canonical: "https://neobytestudios.com/about" },
  openGraph: {
    title: "About — The Origin Sequence",
    description:
      "The story of NeoByteStudios. Founded by Jetmir to bridge the void between imagination and execution through AI-amplified craftsmanship.",
    url: "https://neobytestudios.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <QuoteProtocol />
      <StudioEvolution />
      <CTASection />
    </>
  );
}
