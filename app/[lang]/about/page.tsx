import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { AboutHero } from "@/components/sections/AboutHero";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { LazyCTASection as CTASection } from "@/components/sections/lazy";

const QuoteProtocol = dynamic(() =>
  import("@/components/sections/QuoteProtocol").then((m) => m.QuoteProtocol),
);
const StudioEvolution = dynamic(() =>
  import("@/components/sections/StudioEvolution").then(
    (m) => m.StudioEvolution,
  ),
);

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: {
      canonical: `https://neobytestudios.com/${lang}/about`,
      languages: { en: "/en/about", it: "/it/about" },
    },
    openGraph: {
      title: dict.meta.about.title,
      description: dict.meta.about.description,
      url: `https://neobytestudios.com/${lang}/about`,
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <AboutHero />
      <QuoteProtocol />
      <StudioEvolution />
      <CTASection />
    </>
  );
}
