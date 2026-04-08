import type { ReactNode } from "react";

/**
 * Paired eyebrow label + display title used at the top of sections.
 *
 * The `highlight` slot lets you inject a <span> with `cosmic-gradient-text`
 * or a specific division color inside the title.
 */

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** "left" | "center" alignment. Default: "center" */
  align?: "left" | "center";
  /** Extra classes on the outer wrapper */
  className?: string;
  /** Decorative lines to the left/right of the label. Default: true */
  decorated?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className,
  decorated = true,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <header
      className={[
        "flex flex-col gap-6",
        isCenter ? "items-center text-center" : "items-start text-left",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "flex items-center gap-4",
          isCenter ? "justify-center" : "justify-start",
        ].join(" ")}
      >
        {decorated ? (
          <span className="h-px w-8 bg-outline-variant md:w-16" aria-hidden />
        ) : null}
        <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.4em] text-on-surface-variant">
          {label}
        </span>
        {decorated ? (
          <span className="h-px w-8 bg-outline-variant md:w-16" aria-hidden />
        ) : null}
      </div>

      <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background md:text-6xl">
        {title}
      </h2>

      {subtitle ? (
        <p
          className={[
            "font-body text-base text-on-surface-variant md:text-lg",
            isCenter ? "max-w-2xl" : "max-w-xl",
          ].join(" ")}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
