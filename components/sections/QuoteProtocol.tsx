"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

/**
 * About page "Protocol" section — the founder's manifesto quote.
 * Centered blockquote with decorative binary/code rails on the sides
 * (desktop only). Pulsing badge on top.
 */

const BINARY_LEFT = [
  "01100011 01101111",
  "01110011 01101101",
  "01101001 01100011",
  "01100001 01110101",
  "01110100 01100101",
  "01110101 01110010",
];

const CODE_RIGHT = [
  "> init protocol",
  "> loading void",
  "> consciousness",
  "> bootstrap",
  "> vessel.run()",
  "> status: live",
];

export function QuoteProtocol() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40">
      {/* Very subtle radial cosmic tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(96,165,250,0.12) 0%, rgba(10,10,16,0) 70%)",
        }}
      />

      {/* Decorative left binary column */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 font-mono text-[10px] text-outline/50 md:flex"
      >
        {BINARY_LEFT.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </div>

      {/* Decorative right code column */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-2 font-mono text-[10px] text-outline/50 md:flex"
      >
        {CODE_RIGHT.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <Badge color="tertiary">The Protocol</Badge>

        <blockquote className="mt-10 font-headline text-3xl font-bold leading-tight tracking-tight text-on-background md:text-5xl lg:text-6xl">
          &ldquo;We don&apos;t build tools; we build{" "}
          <span className="relative inline-block italic font-light text-tertiary">
            vessels
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-1 h-px bg-tertiary"
            />
          </span>{" "}
          for the imagination. Every pixel is a star, every line of code a law
          of physics for a new world.&rdquo;
        </blockquote>

        <div className="mt-12 flex items-center gap-4">
          <span className="h-px w-12 bg-outline-variant" aria-hidden />
          <span className="font-headline text-[11px] font-semibold uppercase tracking-[0.4em] text-on-surface-variant">
            Jetmir — Architect
          </span>
          <span className="h-px w-12 bg-outline-variant" aria-hidden />
        </div>
      </motion.div>
    </section>
  );
}
