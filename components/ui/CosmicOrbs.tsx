import type { CSSProperties } from "react";

/**
 * Atmospheric background orbs — 1 to 3 absolutely-positioned, heavily-blurred
 * colored circles that give the "cosmic nebula" feeling without noise or
 * mix-blend hacks.
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <CosmicOrbs preset="hero" />
 *     ...
 *   </section>
 *
 * The parent MUST be `relative` and preferably `overflow-hidden`.
 */

type OrbColor = "primary" | "secondary" | "pink";

interface Orb {
  color: OrbColor;
  size: number;
  /** CSS position (any of top/right/bottom/left, in px or %) */
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  opacity?: number;
}

type Preset = "hero" | "subtle" | "cta";

const PRESETS: Record<Preset, Orb[]> = {
  hero: [
    { color: "primary", size: 560, top: "-120px", left: "-140px" },
    { color: "secondary", size: 640, top: "20%", right: "-180px" },
    { color: "pink", size: 480, bottom: "-160px", left: "25%", opacity: 0.4 },
  ],
  subtle: [
    { color: "primary", size: 420, top: "-80px", right: "-120px", opacity: 0.35 },
    { color: "secondary", size: 360, bottom: "-100px", left: "-100px", opacity: 0.35 },
  ],
  cta: [
    { color: "primary", size: 520, top: "50%", left: "20%", opacity: 0.45 },
    { color: "secondary", size: 520, top: "50%", right: "20%", opacity: 0.45 },
  ],
};

interface CosmicOrbsProps {
  preset?: Preset;
  /** Override with a fully custom orb configuration */
  orbs?: Orb[];
  className?: string;
}

export function CosmicOrbs({
  preset = "hero",
  orbs,
  className,
}: CosmicOrbsProps) {
  const list = orbs ?? PRESETS[preset];
  return (
    <div
      aria-hidden
      className={[
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {list.map((orb, i) => {
        const style: CSSProperties = {
          width: `${orb.size}px`,
          height: `${orb.size}px`,
          top: orb.top,
          right: orb.right,
          bottom: orb.bottom,
          left: orb.left,
          opacity: orb.opacity,
        };
        return (
          <div
            key={i}
            className={`glow-orb glow-orb--${orb.color}`}
            style={style}
          />
        );
      })}
    </div>
  );
}
