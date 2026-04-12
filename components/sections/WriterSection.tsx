"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDivision } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  DivisionBackgroundTint,
  DivisionTitle,
  DivisionFeatureIcon,
  DivisionCTA,
} from "./DivisionSectionParts";

/**
 * /divisions overview — NeoByteWriter block.
 * Layout: 2 columns (text left, cosmic portrait orb right).
 * Purple identity color (#c084fc).
 */
export function WriterSection() {
  const d = getDivision("writer")!;
  return (
    <section
      id="writer"
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32"
    >
      <DivisionBackgroundTint hex={d.hex} position="25% 50%" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <Badge color="primary">{d.statusLabel}</Badge>

          <DivisionTitle shortName="WRITER" hex={d.hex} />

          <p className="max-w-xl font-body text-lg text-on-surface-variant">
            {d.description}
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {d.features.map((f) => (
              <GlassCard key={f.title} radius="2xl" className="p-6">
                <DivisionFeatureIcon
                  hex={d.hex}
                  iconName={f.icon ?? d.icon}
                  size={20}
                  className="mb-4 h-10 w-10 rounded-lg"
                />
                <h3 className="font-headline text-lg font-semibold text-on-background">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-sm text-on-surface-variant">
                  {f.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <div className="pt-2">
            <DivisionCTA slug="writer" label="Explore Narrative" variant="secondary" hex={d.hex} />
          </div>
        </motion.div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-3xl"
            style={{
              boxShadow: `inset 0 0 60px ${d.hex}22, 0 0 80px ${d.hex}33`,
            }}
          />
          <Image
            src="/images/writer-hero.webp"
            alt="NeoByteWriter — cosmic pen writing stories in the void"
            width={1200}
            height={675}
            className="h-auto w-full rounded-3xl"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
