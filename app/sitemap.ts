import type { MetadataRoute } from "next";
import { DIVISIONS } from "@/lib/constants";
import { locales } from "@/lib/i18n";

const BASE = "https://neobytestudios.com";

function langAlternates(path: string): Record<string, string> {
  const alts: Record<string, string> = {};
  for (const loc of locales) {
    alts[loc] = `${BASE}/${loc}${path}`;
  }
  return alts;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths = [
    { path: "", freq: "weekly" as const, priority: 1.0 },
    { path: "/about", freq: "monthly" as const, priority: 0.8 },
    { path: "/divisions", freq: "monthly" as const, priority: 0.8 },
    { path: "/portfolio", freq: "weekly" as const, priority: 0.7 },
    { path: "/contact", freq: "monthly" as const, priority: 0.6 },
    { path: "/legal/privacy", freq: "yearly" as const, priority: 0.3 },
    { path: "/legal/terms", freq: "yearly" as const, priority: 0.3 },
    ...DIVISIONS.map((d) => ({
      path: `/divisions/${d.slug}`,
      freq: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return locales.flatMap((lang) =>
    paths.map(({ path, freq, priority }) => ({
      url: `${BASE}/${lang}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates: { languages: langAlternates(path) },
    })),
  );
}
