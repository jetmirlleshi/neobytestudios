"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

/**
 * Homepage Philosophy section.
 * 2-column layout:
 *  - left: decorative "portrait orb" (pure CSS — no external asset yet)
 *  - right: label + statement + 2 paragraphs + signature divider
 *
 * When we have a real founder image the left column becomes a circular
 * <Image> with the pink glow behind it.
 */
export function Philosophy() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        {/* ===== Left: portrait orb ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* Pink glow ring behind — subtle pulse */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full animate-glow-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(236, 72, 153, 0.45) 0%, rgba(192, 132, 252, 0.25) 40%, transparent 70%)",
            }}
          />
          {/* Inner orb */}
          <div
            className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(192, 132, 252, 0.35) 0%, rgba(10, 10, 16, 0.9) 60%)",
              boxShadow: "inset 0 2px 20px rgba(255, 255, 255, 0.08)",
            }}
          >
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-on-surface-variant">
              The Architect
            </span>
          </div>
          {/* Orbit ring — slow rotation */}
          <div
            aria-hidden
            className="absolute inset-[-8%] rounded-full border border-dashed border-white/10 animate-orbit-spin"
          />
        </motion.div>

        {/* ===== Right: copy ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary/60" aria-hidden />
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
              The Philosophy
            </span>
          </div>

          <h2 className="font-headline text-4xl font-bold leading-tight tracking-tight text-on-background md:text-6xl">
            AI doesn&apos;t replace creativity
            <br />
            <span className="cosmic-gradient-text font-light italic">
              — it sets it free.
            </span>
          </h2>

          <div className="flex flex-col gap-6 font-body text-base text-on-surface-variant md:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              At {SITE.name}, artificial intelligence is not a shortcut; it is
              a lens. A prism through which one creator&apos;s imagination is
              refracted into infinite spectra of narrative, design, and
              interactive experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              Every pixel, every word, every frame passes through a human
              sensibility. The AI amplifies; the auteur directs. The result is
              a body of work that feels both impossibly vast and deeply
              personal.
            </motion.p>
          </div>

          <div className="mt-4 flex items-center gap-4 border-t border-outline-variant/40 pt-6">
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.4em] text-on-surface-variant">
              NeoByte Vision Statement
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
