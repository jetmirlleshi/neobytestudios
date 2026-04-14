import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LazyCTASection as CTASection } from "@/components/sections/lazy";

const PortfolioGrid = dynamic(() =>
  import("@/components/sections/PortfolioGrid").then((m) => m.PortfolioGrid),
);

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.meta.portfolio.title,
    description: dict.meta.portfolio.description,
    alternates: {
      canonical: `https://neobytestudios.com/${lang}/portfolio`,
      languages: { en: "/en/portfolio", it: "/it/portfolio" },
    },
    openGraph: {
      title: dict.meta.portfolio.title,
      description: dict.meta.portfolio.description,
      url: `https://neobytestudios.com/${lang}/portfolio`,
    },
  };
}

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Portfolio" }]} />
      <section className="relative isolate px-6 pt-36 pb-12 md:px-12 md:pt-44 md:pb-16">
        <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-tertiary/60" aria-hidden />
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-tertiary">
              The Archive
            </span>
            <span className="h-px w-16 bg-tertiary/60" aria-hidden />
          </div>
          <h1 className="mt-8 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl lg:text-8xl">
            Signature{" "}
            <span className="cosmic-gradient-text font-light italic">
              Artifacts
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-on-surface-variant md:text-xl">
            A chronicle of vessels built at the edge of craft and computation.
            Each one a fragment of the NeoByte universe.
          </p>
        </ScrollReveal>
      </section>
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
