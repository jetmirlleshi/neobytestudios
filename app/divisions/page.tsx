import type { Metadata } from "next";
import { DivisionsHeader } from "@/components/sections/DivisionsHeader";
import { WriterSection } from "@/components/sections/WriterSection";
import { ForgeSection } from "@/components/sections/ForgeSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Divisions — The Four Pillars",
  description:
    "Writer, Forge, Games, Vision. Four specialized cores of NeoByteStudios, each an autonomous engine for a different slice of the creative universe.",
  alternates: { canonical: "https://neobytestudios.com/divisions" },
  openGraph: {
    title: "Divisions — The Four Pillars",
    description:
      "Writer, Forge, Games, Vision. Four specialized cores of NeoByteStudios.",
    url: "https://neobytestudios.com/divisions",
  },
};

export default function DivisionsPage() {
  return (
    <>
      <DivisionsHeader />
      <WriterSection />
      <ForgeSection />
      <GamesSection />
      <VisionSection />
      <CTASection />
    </>
  );
}
