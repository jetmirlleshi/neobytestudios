"use client";

import { motion } from "framer-motion";
import { CosmicOrbs } from "@/components/ui/CosmicOrbs";
import { Icon } from "@/components/ui/Icon";

/**
 * About page hero.
 * - Cosmic nebula background (glow orbs + tech grid)
 * - "Origin Sequence" label with decorative tertiary lines
 * - Display title with "NeoByteStudios" in cosmic gradient
 * - Vertical scroll indicator on the right edge
 */
export function AboutHero({
  dict,
}: {
  dict: Record<string, any>;
}) {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 md:px-12">
      <CosmicOrbs preset="subtle" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 tech-grid opacity-[0.4]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-16 bg-tertiary/60" aria-hidden />
          <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-tertiary">
            {dict.label}
          </span>
          <span className="h-px w-16 bg-tertiary/60" aria-hidden />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl lg:text-8xl"
        >
          {dict.titlePart1}
          <br />
          <span className="cosmic-gradient-text font-light italic">
            {dict.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-2xl font-body text-lg text-on-surface-variant md:text-xl"
        >
          {dict.subtitle}
        </motion.p>
      </div>

      {/* Vertical scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
      >
        <span
          className="font-headline text-[10px] uppercase tracking-[0.5em] text-on-surface-variant"
          style={{ writingMode: "vertical-rl" }}
        >
          {dict.scrollIndicator}
        </span>
        <span className="animate-bounce-soft text-on-surface-variant">
          <Icon name="expand_more" size={24} />
        </span>
      </motion.div>
    </section>
  );
}
