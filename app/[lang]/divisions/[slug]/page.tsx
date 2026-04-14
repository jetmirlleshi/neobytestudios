import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DIVISIONS, getDivision } from "@/lib/constants";
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
  const url = `https://neobytestudios.com/${lang}/divisions/${slug}`;
  return {
    title: `${d.name} — ${d.statusLabel}`,
    description: d.description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en/divisions/${slug}`,
        it: `/it/divisions/${slug}`,
      },
    },
    openGraph: {
      title: `${d.name} — ${d.statusLabel}`,
      description: d.description,
      url,
    },
  };
}

export default async function DivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const d = getDivision(slug);
  if (!d) notFound();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Divisions", href: "/divisions" },
          { name: d.name },
        ]}
      />
      <ServiceJsonLd division={d} />
      <DivisionDetail division={d} />
    </>
  );
}
