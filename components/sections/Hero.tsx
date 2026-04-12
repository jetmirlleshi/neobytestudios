"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CosmicOrbs } from "@/components/ui/CosmicOrbs";
import { Icon } from "@/components/ui/Icon";

/**
 * Homepage Hero — full viewport.
 * - 3 glow orbs atmospheric background
 * - Pulsing "The Cosmic Auteur" badge
 * - Display XL title with "AI" in cosmic gradient italic
 * - Narrative subtitle
 * - Primary + secondary CTAs with staggered entrance
 * - Soft bouncing arrow scroll hint that fades out on scroll
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll hint fades out as user scrolls past first 20% of section
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 md:px-12 md:pt-32"
    >
      <CosmicOrbs preset="hero" />

      {/* subtle tech grid at very low opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 tech-grid opacity-[0.35]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="animate-badge-pulse"
        >
          <Badge color="primary">One Mind. Infinite Worlds.</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="font-headline text-6xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-8xl lg:text-9xl"
        >
          Where{" "}
          <span className="cosmic-gradient-text font-light italic">
            AI
          </span>{" "}
          Unlocks <br className="hidden md:block" />
          Imagination
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="max-w-2xl font-body text-lg text-on-surface-variant md:text-xl"
        >
          One creator, AI-amplified. Sculpting ethereal universes that
          transcend pages, screens, and reality through the prism of digital
          wonder.
        </motion.p>

        {/* Staggered CTA buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <Button
              href="/divisions"
              variant="primary"
              size="lg"
              iconRight="arrow_forward"
            >
              Enter The Universe
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
          >
            <Button href="/portfolio" variant="secondary" size="lg">
              The Archive
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint — fades out as user scrolls */}
      <motion.a
        href="#divisions"
        aria-label="Scroll to divisions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity: scrollHintOpacity }}
        className="absolute inset-x-0 bottom-10 mx-auto flex w-fit flex-col items-center gap-2 text-on-surface-variant hover:text-primary"
      >
        <span className="font-headline text-[10px] uppercase tracking-[0.4em]">
          Descend
        </span>
        <span className="animate-bounce-soft">
          <Icon name="expand_more" size={28} />
        </span>
      </motion.a>
    </section>
  );
}
