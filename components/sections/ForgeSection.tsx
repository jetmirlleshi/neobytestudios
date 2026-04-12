"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDivision } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import {
  DivisionBackgroundTint,
  DivisionTitle,
  DivisionCTA,
} from "./DivisionSectionParts";

/**
 * /divisions overview — NeoByteForge block.
 * Layout: 2 columns — icon grid (2x2 with vertical offset) on the left,
 * text + checklist on the right. Blue identity (#60a5fa).
 */

const OFFSET_ICONS = [
  { icon: "precision_manufacturing", label: "Asset Gen" },
  { icon: "hub", label: "Simulation" },
  { icon: "rebase", label: "Quantum-Safe" },
  { icon: "memory", label: "Core Logic" },
];

export function ForgeSection() {
  const d = getDivision("forge")!;
  return (
    <section
      id="forge"
      className="relative overflow-hidden bg-surface-container-lowest px-6 py-24 md:px-12 md:py-32"
    >
      <DivisionBackgroundTint hex={d.hex} position="75% 50%" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left: hero image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 overflow-hidden rounded-3xl lg:order-1"
        >
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 rounded-3xl"
              style={{
                boxShadow: `inset 0 0 60px ${d.hex}22, 0 0 80px ${d.hex}33`,
              }}
            />
            <Image
              src="/images/forge-hero.webp"
              alt="NeoByteForge — energy orb of computational creation"
              width={1200}
              height={675}
              className="h-auto w-full rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Right: copy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="order-1 flex flex-col gap-8 lg:order-2"
        >
          <Badge color="secondary">{d.statusLabel}</Badge>

          <DivisionTitle shortName="FORGE" hex={d.hex} />

          <p className="max-w-xl font-body text-lg text-on-surface-variant">
            {d.description}
          </p>

          <ul className="flex flex-col gap-4">
            {d.features.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <span
                  className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                  style={{
                    borderColor: `${d.hex}66`,
                    background: `${d.hex}15`,
                    color: d.hex,
                  }}
                >
                  <Icon name="check" size={14} weight={600} />
                </span>
                <div>
                  <h3 className="font-headline text-base font-semibold text-on-background">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant">
                    {f.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="pt-2">
            <DivisionCTA slug="forge" label="Technical Specs" variant="secondary" hex={d.hex} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
