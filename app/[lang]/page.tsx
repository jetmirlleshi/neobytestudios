import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { LazyCTASection as CTASection } from "@/components/sections/lazy";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    alternates: {
      canonical: `https://neobytestudios.com/${lang}`,
      languages: { en: "/en", it: "/it" },
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: `https://neobytestudios.com/${lang}`,
    },
  };
}

const DivisionsGrid = dynamic(() =>
  import("@/components/sections/DivisionsGrid").then((m) => m.DivisionsGrid),
);
const Philosophy = dynamic(() =>
  import("@/components/sections/Philosophy").then((m) => m.Philosophy),
);
const Timeline = dynamic(() =>
  import("@/components/sections/Timeline").then((m) => m.Timeline),
);

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Hero dict={dict.hero} lang={lang} />
      <DivisionsGrid dict={dict.divisionsGrid} lang={lang} />
      <Philosophy dict={dict.philosophy} />
      <Timeline dict={dict.timeline} />
      <CTASection dict={dict.cta} lang={lang} />
    </>
  );
}
