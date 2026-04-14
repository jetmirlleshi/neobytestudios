import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import type { Division } from "@/lib/types";

/** Radial gradient background tint used by all division sections. */
export function DivisionBackgroundTint({
  hex,
  position = "25% 50%",
  opacity = 0.1,
}: {
  hex: string;
  position?: string;
  opacity?: number;
}) {
  const [r, g, b] = hexToRgb(hex);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(circle at ${position}, rgba(${r},${g},${b},${opacity}) 0%, rgba(10,10,16,0) 60%)`,
      }}
    />
  );
}

/** The `NEOBYTE <italic>SHORTNAME</italic>` h2 pattern. */
export function DivisionTitle({ shortName, hex }: { shortName: string; hex: string }) {
  return (
    <h2 className="font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-6xl lg:text-7xl">
      NEOBYTE{" "}
      <span className="font-light italic" style={{ color: hex }}>
        {shortName}
      </span>
    </h2>
  );
}

/** Bordered icon box used in feature cards and grids. */
export function DivisionFeatureIcon({
  hex,
  iconName,
  size = 20,
  className = "h-10 w-10 rounded-lg",
}: {
  hex: string;
  iconName: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center border ${className}`}
      style={{
        borderColor: `${hex}55`,
        background: `${hex}11`,
        color: hex,
      }}
    >
      <Icon name={iconName} size={size} />
    </div>
  );
}

/**
 * Gradient pairs per division — from → to.
 * Writer: violet → pink | Forge: blue → cyan
 * Games: mint → teal  | Vision: gold → amber
 */
const CTA_GRADIENTS: Record<string, [string, string]> = {
  writer: ["#c084fc", "#e879f9"],
  forge: ["#e879f9", "#60a5fa"],
  games: ["#60a5fa", "#65ffc8"],
  vision: ["#65ffc8", "#f59e0b"],
};

/** CTA button linking to /divisions/<slug>. Gradient filled with division colors. */
export function DivisionCTA({
  slug,
  label,
  lang,
}: {
  slug: Division["slug"];
  label: string;
  variant?: "primary" | "secondary";
  hex?: string;
  lang?: string;
}) {
  const prefix = lang ? `/${lang}` : "";
  const gradient = CTA_GRADIENTS[slug];
  if (gradient) {
    return (
      <Link
        href={`${prefix}/divisions/${slug}`}
        className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-headline text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        style={{
          background: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})`,
          color: slug === "vision" ? "#1a1a2e" : "#0a0a14",
          boxShadow: `0 0 20px ${gradient[0]}44`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${gradient[0]}66`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 20px ${gradient[0]}44`;
        }}
      >
        {label}
        <Icon name="arrow_forward" size={16} />
      </Link>
    );
  }
  return (
    <Button href={`${prefix}/divisions/${slug}`} variant="primary" size="md" iconRight="arrow_forward">
      {label}
    </Button>
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
