import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DIVISIONS, getDivision } from "@/lib/constants";
import { DivisionDetail } from "@/components/sections/DivisionDetail";

// Statically generate all 4 slugs at build time.
export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const d = getDivision(slug);
  if (!d) return { title: "Division not found" };
  return {
    title: `${d.name} — ${d.statusLabel}`,
    description: d.description,
  };
}

export default async function DivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const d = getDivision(slug);
  if (!d) notFound();
  return <DivisionDetail division={d} />;
}
