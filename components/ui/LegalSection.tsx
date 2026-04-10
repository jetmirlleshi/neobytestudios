import type { ReactNode } from "react";

/** Reusable section with styled h2 for legal pages. */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-white/90">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

/** Shared header for legal pages (Legal Protocol label + h1 + last updated). */
export function LegalPageHeader({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a78bfa]">
        Legal Protocol
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 text-sm text-white/60">Last updated: {lastUpdated}</p>
    </div>
  );
}
