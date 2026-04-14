import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { DivisionsHeader } from "@/components/sections/DivisionsHeader";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
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

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.meta.divisions.title,
    description: dict.meta.divisions.description,
    alternates: {
      canonical: `https://neobytestudios.com/${lang}/divisions`,
      languages: { en: "/en/divisions", it: "/it/divisions" },
    },
    openGraph: {
      title: dict.meta.divisions.title,
      description: dict.meta.divisions.description,
      url: `https://neobytestudios.com/${lang}/divisions`,
    },
  };
}

export default function DivisionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Divisions" }]} />
      <DivisionsHeader />
      <WriterSection />
      <ForgeSection />
      <GamesSection />
      <VisionSection />
      <CTASection />
    </>
  );
}
