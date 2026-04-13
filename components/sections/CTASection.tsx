"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CosmicOrbs } from "@/components/ui/CosmicOrbs";
import { NewsletterForm } from "@/components/NewsletterForm";

/**
 * Final CTA — closing punctuation of the homepage.
 * Deep-void background, two opposing orbs, giant display title with
 * cosmic gradient highlight on "The Future?".
 */
export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-container-lowest px-6 py-32 md:px-12 md:py-48">
      <CosmicOrbs preset="cta" />

      {/* fine starfield: tiny dots with twinkle animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 animate-twinkle"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6), transparent)," +
            "radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.5), transparent)," +
            "radial-gradient(1.5px 1.5px at 50% 20%, rgba(255,255,255,0.4), transparent)",
          backgroundSize: "640px 480px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 animate-twinkle"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.5), transparent)," +
            "radial-gradient(1.5px 1.5px at 90% 10%, rgba(255,255,255,0.4), transparent)," +
            "radial-gradient(1px 1px at 65% 45%, rgba(255,255,255,0.5), transparent)",
          backgroundSize: "640px 480px",
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-headline text-5xl font-bold leading-[1.05] tracking-tighter text-on-background md:text-8xl"
        >
          Ready to Dream
          <br />
          <span className="cosmic-gradient-text font-light italic">
            The Future?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 max-w-2xl font-body text-lg text-on-surface-variant md:text-xl"
        >
          Step into a universe where every idea becomes an experience. Let us
          craft something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            iconRight="rocket_launch"
          >
            Start Transmission
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 w-full max-w-md"
        >
          <div className="mx-auto h-px w-16 bg-outline-variant/40" aria-hidden />
          <div className="mt-8">
            <NewsletterForm variant="card" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
