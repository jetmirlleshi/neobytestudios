"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Division } from "@/lib/types";
import { DIVISIONS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

const HERO_IMAGES: Record<string, string> = {
  writer: "/images/writer-hero.webp",
  forge: "/images/forge-hero.webp",
  games: "/images/games-hero.webp",
  vision: "/images/vision-hero.webp",
};

/**
 * Homepage Divisions Grid.
 *
 * Asymmetric bento:
 *   row 1 (desktop ≥lg, 4 cols): Writer spans 2 cols | Forge 1 col | Games 1 col
 *   row 2                      : Vision spans the full 4 cols (banner)
 *
 * On smaller screens collapses to 2 cols and then 1.
 * Each card is a Link to /divisions/[slug].
 */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

function DivisionCard({
  division,
  className,
  variant,
  exploreText,
  exploreAriaLabel,
  lang,
}: {
  division: Division;
  className?: string;
  variant: "tall" | "standard" | "banner";
  exploreText: string;
  exploreAriaLabel: string;
  lang: string;
}) {
  const isBanner = variant === "banner";
  const isTall = variant === "tall";
  const color = division.hex;

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      <Link
        href={`/${lang}/divisions/${division.slug}`}
        className="group relative block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={exploreAriaLabel.replace("{name}", division.name)}
      >
        <GlassCard
          className={[
            "relative h-full overflow-hidden p-8 transition-all duration-300",
            "hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1",
            isBanner ? "md:p-12" : "",
          ].join(" ")}
        >
          {/* Background hero image — soft blur for glossy feel */}
          {HERO_IMAGES[division.slug] && (
            <Image
              src={HERO_IMAGES[division.slug]}
              alt=""
              fill
              sizes={isBanner ? "100vw" : isTall ? "50vw" : "25vw"}
              className="pointer-events-none object-cover opacity-[0.5] blur-[2px] transition-all duration-300 group-hover:opacity-[0.7] group-hover:blur-[0px]"
            />
          )}

          {/* Smooth gradient overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: `linear-gradient(160deg, rgba(10,10,16,0.3) 0%, rgba(10,10,16,0.5) 40%, rgba(10,10,16,0.85) 100%)`,
            }}
          />

          {/* Colored glow that intensifies on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${color}30 0%, ${color}10 40%, transparent 70%)`,
            }}
          />

          <div
            className={[
              "relative z-10 flex h-full",
              isBanner
                ? "flex-col gap-8 md:flex-row md:items-center md:justify-between"
                : "flex-col gap-8",
              isTall ? "min-h-[28rem]" : "min-h-[20rem]",
            ].join(" ")}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}1F`,
                    border: `1px solid ${color}40`,
                    color: color,
                  }}
                >
                  <Icon name={division.icon} size={24} />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 font-headline text-[10px] font-semibold uppercase tracking-[0.3em]"
                  style={{ color }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: color }}
                  />
                  {division.statusLabel}
                </span>
              </div>

              <h3
                className={[
                  "mt-6 font-headline font-bold tracking-tight text-on-background",
                  isBanner
                    ? "text-4xl md:text-5xl"
                    : isTall
                      ? "text-3xl md:text-4xl"
                      : "text-2xl md:text-3xl",
                ].join(" ")}
              >
                {division.name}
              </h3>

              <p
                className={[
                  "mt-4 max-w-xl font-body text-on-surface-variant",
                  isBanner ? "text-base md:text-lg" : "text-sm md:text-base",
                ].join(" ")}
              >
                {division.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 font-headline text-[11px] font-semibold uppercase tracking-[0.3em] text-on-background transition-transform duration-300 group-hover:translate-x-1">
              <span style={{ color }}>{exploreText}</span>
              <Icon
                name="arrow_forward"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}

export function DivisionsGrid({
  dict,
  lang = "en",
}: {
  dict: {
    label: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    explore: string;
    exploreAriaLabel: string;
  };
  lang?: string;
}) {
  // Pin by slug so markup order matches design regardless of constants order.
  const writer = DIVISIONS.find((d) => d.slug === "writer")!;
  const forge = DIVISIONS.find((d) => d.slug === "forge")!;
  const games = DIVISIONS.find((d) => d.slug === "games")!;
  const vision = DIVISIONS.find((d) => d.slug === "vision")!;

  return (
    <section
      id="divisions"
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={dict.label}
          title={
            <>
              {dict.titlePart1}{" "}
              <span className="cosmic-gradient-text font-light italic">
                {dict.titleHighlight}
              </span>
            </>
          }
          subtitle={dict.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <DivisionCard
            division={writer}
            variant="tall"
            className="lg:col-span-2 lg:row-span-1"
            exploreText={dict.explore}
            exploreAriaLabel={dict.exploreAriaLabel}
            lang={lang}
          />
          <DivisionCard division={forge} variant="standard" exploreText={dict.explore} exploreAriaLabel={dict.exploreAriaLabel} lang={lang} />
          <DivisionCard division={games} variant="standard" exploreText={dict.explore} exploreAriaLabel={dict.exploreAriaLabel} lang={lang} />
          <DivisionCard
            division={vision}
            variant="banner"
            className="md:col-span-2 lg:col-span-4"
            exploreText={dict.explore}
            exploreAriaLabel={dict.exploreAriaLabel}
            lang={lang}
          />
        </motion.div>
      </div>
    </section>
  );
}
