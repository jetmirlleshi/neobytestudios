import type { HTMLAttributes, ReactNode } from "react";

/**
 * Wrapper that applies the NeoByte Cinematic glassmorphism utility.
 * `variant="panel"` uses the slightly darker panel recipe (inset highlight).
 */

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "card" | "panel";
  /** Controls the default rounding. Default: "2xl" */
  radius?: "xl" | "2xl" | "3xl" | "cinematic";
}

const RADIUS_CLASSES: Record<NonNullable<GlassCardProps["radius"]>, string> = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-[2.5rem]",
  cinematic: "rounded-[3rem]",
};

export function GlassCard({
  children,
  variant = "card",
  radius = "2xl",
  className,
  ...rest
}: GlassCardProps) {
  const base = variant === "panel" ? "glass-panel" : "glass-card";
  return (
    <div
      className={[
        base,
        RADIUS_CLASSES[radius],
        "relative",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
