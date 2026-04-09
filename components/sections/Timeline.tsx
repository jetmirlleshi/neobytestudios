"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import type { DivisionColorToken } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Homepage Timeline — "The Ethereal Path"
 *
 * Layout:
 *  - Desktop: 3 horizontal dots connected by a gradient line.
 *    Active entry (2027) is larger with a pulsing glow.
 *  - Mobile: vertical stack with the gradient line on the left.
 */

const HEX_BY_TOKEN: Record<DivisionColorToken, string> = {
  primary: "#c084fc",
  secondary: "#60a5fa",
  tertiary: "#65ffc8",
  "accent-yellow": "#fbbf24",
};

export function Timeline() {
  return (
    <section id="universe" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Timeline"
          title={
            <>
              The{" "}
              <span className="cosmic-gradient-text font-light italic">
                Ethereal Path
              </span>
            </>
          }
          subtitle="Three orbits in our ongoing cosmic anthology. Past, present, and the blooming horizon."
        />

        {/* ===== Desktop (md+): horizontal ===== */}
        <div className="relative mt-24 hidden md:block">
          {/* Gradient connector line with flow animation */}
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 animate-line-flow"
            style={{
              background:
                "linear-gradient(to right, #c084fc 0%, #60a5fa 25%, #65ffc8 50%, #60a5fa 75%, #c084fc 100%)",
              opacity: 0.45,
            }}
          />

          <div className="relative grid grid-cols-3 gap-8">
            {TIMELINE.map((entry, i) => {
              const hex = HEX_BY_TOKEN[entry.colorToken];
              const active = entry.active;
              return (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-8">
                    <div
                      className={[
                        "relative flex items-center justify-center rounded-full border transition-all duration-500",
                        active ? "h-28 w-28" : "h-20 w-20 hover:scale-110 cursor-pointer",
                      ].join(" ")}
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        backdropFilter: "blur(12px)",
                        borderColor: `${hex}66`,
                        boxShadow: active
                          ? `0 0 60px ${hex}55, inset 0 0 20px ${hex}33`
                          : `0 0 20px ${hex}22`,
                      }}
                    >
                      <span
                        className={[
                          "font-headline font-bold tracking-tight",
                          active ? "text-2xl" : "text-lg",
                        ].join(" ")}
                        style={{ color: hex }}
                      >
                        {entry.year}
                      </span>
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-0 animate-ping rounded-full"
                          style={{ backgroundColor: `${hex}22` }}
                        />
                      ) : null}
                    </div>
                  </div>

                  <h3
                    className="font-headline text-xl font-semibold tracking-tight text-on-background md:text-2xl"
                    style={{ color: active ? hex : undefined }}
                  >
                    {entry.title}
                  </h3>
                  <p className="mt-3 max-w-xs font-body text-sm text-on-surface-variant">
                    {entry.description}
                  </p>
                  {active ? (
                    <span
                      className="mt-4 font-headline text-[10px] font-semibold uppercase tracking-[0.3em]"
                      style={{ color: hex }}
                    >
                      ● Current Orbit
                    </span>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===== Mobile: vertical ===== */}
        <div className="relative mt-16 md:hidden">
          <div
            aria-hidden
            className="absolute bottom-4 left-8 top-4 w-px animate-line-flow"
            style={{
              background:
                "linear-gradient(to bottom, #c084fc 0%, #60a5fa 25%, #65ffc8 50%, #60a5fa 75%, #c084fc 100%)",
              opacity: 0.45,
            }}
          />
          <div className="flex flex-col gap-12">
            {TIMELINE.map((entry, i) => {
              const hex = HEX_BY_TOKEN[entry.colorToken];
              const active = entry.active;
              return (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative flex items-start gap-6 pl-0"
                >
                  <div
                    className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      backdropFilter: "blur(12px)",
                      borderColor: `${hex}66`,
                      boxShadow: active
                        ? `0 0 40px ${hex}55`
                        : `0 0 15px ${hex}22`,
                    }}
                  >
                    <span
                      className="font-headline text-sm font-bold"
                      style={{ color: hex }}
                    >
                      {entry.year}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="font-headline text-xl font-semibold tracking-tight text-on-background"
                      style={{ color: active ? hex : undefined }}
                    >
                      {entry.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-on-surface-variant">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
