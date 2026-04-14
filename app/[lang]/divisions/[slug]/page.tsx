import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DIVISIONS, getDivision } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { DivisionDetail } from "@/components/sections/DivisionDetail";

// Statically generate all 4 slugs at build time.
export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const d = getDivision(slug);
  if (!d) return { title: "Division not found" };
  const dict = await getDictionary(lang as Locale);
  const divDict = dict.divisions?.[slug as keyof typeof dict.divisions];
  const statusLabel = divDict?.statusLabel ?? d.statusLabel;
  const description = divDict?.description ?? d.description;
  const url = `https://neobytestudios.com/${lang}/divisions/${slug}`;
  return {
    title: `${d.name} — ${statusLabel}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en/divisions/${slug}`,
        it: `/it/divisions/${slug}`,
      },
    },
    openGraph: {
      title: `${d.name} — ${statusLabel}`,
      description,
      url,
    },
  };
}

export default async function DivisionPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const d = getDivision(slug);
  if (!d) notFound();
  const dict = await getDictionary(lang as Locale);
  const divDict = dict.divisions?.[slug as keyof typeof dict.divisions];
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Divisions", href: `/${lang}/divisions` },
          { name: d.name },
        ]}
      />
      <ServiceJsonLd division={d} />
      <DivisionDetail division={d} dict={dict.divisionDetail} divDict={divDict} lang={lang} />
    </>
  );
}
