import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { DivisionsHeader } from "@/components/sections/DivisionsHeader";
import { LazyCTASection as CTASection } from "@/components/sections/lazy";

const WriterSection = dynamic(() =>
  import("@/components/sections/WriterSection").then((m) => m.WriterSection),
);
const ForgeSection = dynamic(() =>
  import("@/components/sections/ForgeSection").then((m) => m.ForgeSection),
);
const GamesSection = dynamic(() =>
  import("@/components/sections/GamesSection").then((m) => m.GamesSection),
);
const VisionSection = dynamic(() =>
  import("@/components/sections/VisionSection").then((m) => m.VisionSection),
);

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
