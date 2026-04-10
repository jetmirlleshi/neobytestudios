import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { QuoteProtocol } from "@/components/sections/QuoteProtocol";
import { StudioEvolution } from "@/components/sections/StudioEvolution";
import { CTASection } from "@/components/sections/CTASection";

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
