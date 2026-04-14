"use client";

import { motion } from "framer-motion";

/**
 * /divisions overview top header.
 * Centered "THE DIVISIONS" display title + subtitle.
 */
export function DivisionsHeader({
  dict,
}: {
  dict: Record<string, any>;
}) {
  return (
    <section className="relative isolate px-6 pt-36 pb-16 md:px-12 md:pt-44 md:pb-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-8 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl lg:text-8xl"
        >
          The{" "}
          <span className="cosmic-gradient-text font-light italic">
            {dict.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl font-body text-lg text-on-surface-variant md:text-xl"
        >
          {dict.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
