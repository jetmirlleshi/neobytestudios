"use client";

import Image from "next/image";
import { motion } from "framer-motion";


/**
 * Homepage Philosophy section.
 * 2-column layout:
 *  - left: decorative "portrait orb" (pure CSS — no external asset yet)
 *  - right: label + statement + 2 paragraphs + signature divider
 *
 * When we have a real founder image the left column becomes a circular
 * <Image> with the pink glow behind it.
 */
export function Philosophy({
  dict,
}: {
  dict: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
    founderImageAlt: string;
    signatureLabel: string;
  };
}) {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        {/* ===== Left: founder portrait ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-3xl"
            style={{
              boxShadow:
                "inset 0 0 80px rgba(192,132,252,0.25), 0 0 100px rgba(192,132,252,0.15)",
            }}
          />
          <Image
            src="/images/founder.webp"
            alt={dict.founderImageAlt}
            width={800}
            height={1067}
            className="h-auto w-full rounded-3xl"
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
              {dict.label}
            </span>
          </div>

          <h2 className="font-headline text-4xl font-bold leading-tight tracking-tight text-on-background md:text-6xl">
            {dict.titleLine1}
            <br />
            <span className="cosmic-gradient-text font-light italic">
              {dict.titleLine2}
            </span>
          </h2>

          <div className="flex flex-col gap-6 font-body text-base text-on-surface-variant md:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              {dict.paragraph1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              {dict.paragraph2}
            </motion.p>
          </div>

          <div className="mt-4 flex items-center gap-4 border-t border-outline-variant/40 pt-6">
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.4em] text-on-surface-variant">
              {dict.signatureLabel}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
