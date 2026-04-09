import Link from "next/link";
import { SITE } from "@/lib/constants";

/**
 * Global footer.
 * - Large tagline
 * - Two link columns (Resources / Legal)
 * - Bottom bar with copyright, status, and location
 */

const RESOURCES = [
  { label: "Archives", href: "/portfolio" },
  { label: "Terminal", href: "/divisions" },
  { label: "Network", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Support", href: "mailto:support@neobytestudios.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 border-t border-outline-variant/40 bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-headline text-sm font-bold uppercase tracking-[0.35em] text-primary">
                {SITE.shortName}
              </span>
            </Link>
            <p className="mt-6 max-w-md font-body text-base text-on-surface-variant md:text-lg">
              Architecting future-state narratives through the fusion of human
              vision and machine intelligence.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-[10px] font-semibold uppercase tracking-[0.4em] text-on-surface-variant">
              Resources
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {RESOURCES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-headline text-sm uppercase tracking-[0.2em] text-on-background transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-[10px] font-semibold uppercase tracking-[0.4em] text-on-surface-variant">
              Legal
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-headline text-sm uppercase tracking-[0.2em] text-on-background transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-outline-variant/40 pt-8 md:flex-row md:items-center">
          <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
            © {year} {SITE.name.toUpperCase()} — {SITE.motto.toUpperCase()}
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-2 font-headline text-[10px] uppercase tracking-[0.3em] text-tertiary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-tertiary" />
              </span>
              Status: Optimal
            </span>
            <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
              Local Time: {SITE.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
