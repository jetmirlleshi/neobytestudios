"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DIVISIONS } from "@/lib/constants";
import type { DivisionSlug } from "@/lib/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";

/**
 * Portfolio bento grid with filter tabs.
 *
 * NOTE: The studio archive is still warming up — these are placeholder
 * "in-transit" artifacts. Swap with real projects as they land.
 */

type FilterKey = "all" | DivisionSlug;

interface Project {
  id: string;
  title: string;
  division: DivisionSlug;
  year: string;
  description: string;
  span?: "tall" | "wide" | "default";
}

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Codex of the Void",
    division: "writer",
    year: "2026",
    description:
      "A branching narrative engine that weaves adaptive lore from player moral drift.",
    span: "tall",
  },
  {
    id: "p2",
    title: "Forge Core v1",
    division: "forge",
    year: "2026",
    description:
      "Proprietary asset pipeline turning sketches into production-ready 3D in minutes.",
  },
  {
    id: "p3",
    title: "Haptic Prototype",
    division: "games",
    year: "2026",
    description:
      "VR sandbox experiment mapping emotion-driven feedback loops to narrative beats.",
    span: "wide",
  },
  {
    id: "p4",
    title: "Neural Brand System",
    division: "vision",
    year: "2026",
    description:
      "Brand aesthetics for spatial computing — fluid identity that reacts to gaze.",
  },
  {
    id: "p5",
    title: "The Silent Cosmos",
    division: "writer",
    year: "2026",
    description:
      "A dark-fantasy anthology spanning three centuries of a dying starlight civilization.",
  },
  {
    id: "p6",
    title: "Orbital Stream",
    division: "games",
    year: "2026",
    description:
      "Cloud-rendered microworlds deployed through an edge network of relay nodes.",
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "writer", label: "Writer" },
  { key: "forge", label: "Forge" },
  { key: "games", label: "Games" },
  { key: "vision", label: "Vision" },
];

const HEX_BY_SLUG: Record<DivisionSlug, string> = Object.fromEntries(
  DIVISIONS.map((d) => [d.slug, d.hex])
) as Record<DivisionSlug, string>;

const NAME_BY_SLUG: Record<DivisionSlug, string> = Object.fromEntries(
  DIVISIONS.map((d) => [d.slug, d.shortName])
) as Record<DivisionSlug, string>;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.division === filter),
    [filter]
  );

  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.key)}
                className={[
                  "rounded-full border px-5 py-2 font-headline text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-300",
                  active
                    ? "border-primary/60 bg-primary/15 text-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-outline hover:text-on-background",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(0,1fr))]">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const hex = HEX_BY_SLUG[p.division];
              const span =
                p.span === "tall"
                  ? "lg:row-span-2"
                  : p.span === "wide"
                    ? "lg:col-span-2"
                    : "";
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={span}
                >
                  <GlassCard
                    radius="2xl"
                    className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1"
                  >
                    {/* Division-tinted hover glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${hex}22 0%, transparent 60%)`,
                      }}
                    />

                    <div className="relative flex items-start justify-between">
                      <span
                        className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-headline text-[9px] font-semibold uppercase tracking-[0.3em]"
                        style={{
                          color: hex,
                          borderColor: `${hex}55`,
                          background: `${hex}11`,
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: hex }}
                        />
                        {NAME_BY_SLUG[p.division]}
                      </span>
                      <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
                        {p.year}
                      </span>
                    </div>

                    <div className="relative mt-10">
                      <h3 className="font-headline text-2xl font-semibold leading-tight tracking-tight text-on-background md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-4 font-body text-sm text-on-surface-variant">
                        {p.description}
                      </p>
                    </div>

                    <div className="relative mt-8 flex items-center gap-2 font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant transition-colors duration-300 group-hover:text-on-background">
                      <span>View dossier</span>
                      <Icon name="arrow_forward" size={14} />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {visible.length === 0 ? (
          <p className="mt-16 text-center font-body text-on-surface-variant">
            No artifacts in this orbit yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
