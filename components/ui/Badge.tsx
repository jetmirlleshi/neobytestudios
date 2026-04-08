import type { ReactNode } from "react";
import type { DivisionColorToken } from "@/lib/types";

/**
 * NEOBYTE Badge — uppercase pill with an optional animated dot.
 * Used for status labels ("Active Narrative Core", "The Protocol", etc.)
 */

interface BadgeProps {
  children: ReactNode;
  color?: DivisionColorToken;
  /** Show the pulsing dot indicator. Default: true */
  dot?: boolean;
  className?: string;
}

const COLOR_MAP: Record<
  DivisionColorToken,
  { text: string; border: string; bg: string; dotBg: string }
> = {
  primary: {
    text: "text-primary",
    border: "border-primary/40",
    bg: "bg-primary/20",
    dotBg: "bg-primary",
  },
  secondary: {
    text: "text-secondary",
    border: "border-secondary/40",
    bg: "bg-secondary/20",
    dotBg: "bg-secondary",
  },
  tertiary: {
    text: "text-tertiary",
    border: "border-tertiary/40",
    bg: "bg-tertiary/20",
    dotBg: "bg-tertiary",
  },
  "accent-yellow": {
    text: "text-accent-yellow",
    border: "border-accent-yellow/40",
    bg: "bg-accent-yellow/20",
    dotBg: "bg-accent-yellow",
  },
};

export function Badge({
  children,
  color = "primary",
  dot = true,
  className,
}: BadgeProps) {
  const c = COLOR_MAP[color];
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5",
        "font-headline text-[10px] font-semibold uppercase tracking-[0.3em]",
        c.text,
        c.border,
        c.bg,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {dot ? (
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${c.dotBg} opacity-75`}
          />
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${c.dotBg}`}
          />
        </span>
      ) : null}
      {children}
    </span>
  );
}
