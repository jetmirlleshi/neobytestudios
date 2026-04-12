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
 * /divisions overview — NeoByteGames block.
 * Centered layout. 3-column grid of feature cards (Unreal, Haptic, Edge).
 * Mint identity (#65ffc8).
 */
export function GamesSection() {
  const d = getDivision("games")!;
  return (
    <section
      id="games"
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32"
    >
      <DivisionBackgroundTint hex={d.hex} position="50% 30%" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Badge color="tertiary">{d.statusLabel}</Badge>

          <div className="mt-8">
            <DivisionTitle shortName="GAMES" hex={d.hex} />
          </div>

          <p className="mt-6 max-w-2xl font-body text-lg text-on-surface-variant">
            {d.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative mt-14 w-full max-w-3xl overflow-hidden rounded-3xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-3xl"
            style={{
              boxShadow: `inset 0 0 60px ${d.hex}22, 0 0 80px ${d.hex}33`,
            }}
          />
          <Image
            src="/images/games-hero.webp"
            alt="NeoByteGames — portal to infinite gaming worlds"
            width={1200}
            height={675}
            className="h-auto w-full rounded-3xl"
          />
        </motion.div>

        <div className="mt-16 grid w-full gap-6 md:grid-cols-3">
          {d.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: "easeOut",
              }}
            >
              <GlassCard
                radius="2xl"
                className="flex h-full flex-col gap-5 p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <DivisionFeatureIcon
                  hex={d.hex}
                  iconName={f.icon ?? d.icon}
                  size={28}
                  className="h-14 w-14 rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-headline text-xl font-semibold text-on-background">
                    {f.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-on-surface-variant">
                    {f.description}
                  </p>
                </div>
                {f.target ? (
                  <span
                    className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: d.hex }}
                  >
                    {f.target}
                  </span>
                ) : null}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <DivisionCTA slug="games" label="Enter The Arena" variant="secondary" hex={d.hex} />
        </div>
      </div>
    </section>
  );
}
