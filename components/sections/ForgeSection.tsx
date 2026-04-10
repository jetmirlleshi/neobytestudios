"use client";

import { motion } from "framer-motion";
import { getDivision } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import {
  DivisionBackgroundTint,
  DivisionTitle,
  DivisionFeatureIcon,
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
        {/* Left: offset 2x2 icon grid */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 grid grid-cols-2 gap-5 lg:order-1"
        >
          {OFFSET_ICONS.map((item, i) => (
            <GlassCard
              key={item.label}
              radius="2xl"
              className={[
                "flex aspect-square flex-col items-start justify-between p-6 transition-transform duration-500 hover:-translate-y-1",
                i % 2 === 1 ? "mt-10" : "",
              ].join(" ")}
            >
              <DivisionFeatureIcon
                hex={d.hex}
                iconName={item.icon}
                size={24}
                className="h-12 w-12 rounded-xl"
              />
              <span className="font-headline text-xs font-semibold uppercase tracking-[0.25em] text-on-surface-variant">
                {item.label}
              </span>
            </GlassCard>
          ))}
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
            {d.features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
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
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <DivisionCTA slug="forge" label="Technical Specs" variant="secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
