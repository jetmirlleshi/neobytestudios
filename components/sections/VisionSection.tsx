"use client";

import { motion } from "framer-motion";
import { getDivision } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { CosmicOrbs } from "@/components/ui/CosmicOrbs";
import {
  DivisionBackgroundTint,
  DivisionTitle,
  DivisionFeatureIcon,
  DivisionCTA,
} from "./DivisionSectionParts";

/**
 * /divisions overview — NeoByteVision block.
 * A single large glass-panel centered over a cosmic background.
 * Amber/gold identity (#fbbf24).
 */
export function VisionSection() {
  const d = getDivision("vision")!;
  return (
    <section
      id="vision"
      className="relative isolate overflow-hidden bg-surface-container-lowest px-6 py-24 md:px-12 md:py-32"
    >
      <CosmicOrbs preset="subtle" />
      <DivisionBackgroundTint hex={d.hex} position="50% 50%" opacity={0.045} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <GlassCard
          variant="panel"
          radius="3xl"
          className="flex flex-col items-center gap-10 p-10 text-center md:p-16"
        >
          <Badge color="accent-yellow">{d.statusLabel}</Badge>

          <DivisionTitle shortName="VISION" hex={d.hex} />

          <blockquote className="max-w-2xl font-headline text-xl font-light italic leading-snug text-on-surface-variant md:text-2xl">
            &ldquo;{d.tagline}&rdquo;
          </blockquote>

          <div className="grid w-full gap-5 md:grid-cols-2">
            {d.features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-start gap-3 rounded-2xl border border-outline-variant bg-surface-container-lowest/60 p-6 text-left"
              >
                <DivisionFeatureIcon
                  hex={d.hex}
                  iconName={f.icon ?? d.icon}
                  size={22}
                  className="h-11 w-11 rounded-lg"
                />
                <h3 className="font-headline text-lg font-semibold text-on-background">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <DivisionCTA slug="vision" label="Enter The Core" variant="secondary" />
        </GlassCard>
      </motion.div>
    </section>
  );
}
