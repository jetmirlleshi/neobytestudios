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

/** CTA button linking to /divisions/<slug>. Uses division hex color for secondary variant. */
export function DivisionCTA({
  slug,
  label,
  variant = "primary",
  hex,
}: {
  slug: Division["slug"];
  label: string;
  variant?: "primary" | "secondary";
  hex?: string;
}) {
  if (variant === "secondary" && hex) {
    return (
      <Link
        href={`/divisions/${slug}`}
        className="group/cta inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3.5 font-headline text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300"
        style={
          {
            borderColor: `${hex}60`,
            color: "var(--color-on-background)",
            "--division-hex": hex,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = hex;
          e.currentTarget.style.color = hex;
          e.currentTarget.style.backgroundColor = `${hex}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${hex}60`;
          e.currentTarget.style.color = "var(--color-on-background)";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        {label}
        <Icon name="arrow_forward" size={16} />
      </Link>
    );
  }
  return (
    <Button href={`/divisions/${slug}`} variant={variant} size="md" iconRight="arrow_forward">
      {label}
    </Button>
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
