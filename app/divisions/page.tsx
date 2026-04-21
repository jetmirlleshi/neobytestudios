"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { divisions } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Helper: renders a Material Symbols icon with FILL enabled          */
/* ------------------------------------------------------------------ */
function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: "'FILL' 1" }}
    >
      {name}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared Framer-Motion scroll preset                                 */
/* ------------------------------------------------------------------ */
const scrollAnim = {
  initial: { opacity: 0, y: 60 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.15 } as const,
  transition: { duration: 0.9 } as const,
};

function stagger(i: number) {
  return {
    ...scrollAnim,
    transition: { duration: 0.9, delay: i * 0.12 },
  };
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */
export default function DivisionsPage() {
  const writer = divisions[0];
  const forge = divisions[1];
  const games = divisions[2];
  const vision = divisions[3];

  return (
    <main className="min-h-screen bg-background text-on-background overflow-hidden">
      {/* ============================================================ */}
      {/* HEADER                                                        */}
      {/* ============================================================ */}
      <section className="py-24 px-12 max-w-7xl mx-auto text-center">
        <motion.h1
          {...scrollAnim}
          className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface"
        >
          THE DIVISIONS
        </motion.h1>
        <motion.p
          {...scrollAnim}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-on-surface-variant text-lg md:text-xl leading-relaxed"
        >
          Mapping the architecture of the void. Four pillars of digital
          transcendence, engineered for the next era of cinematic immersion.
        </motion.p>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1 — NEOBYTEWRITER                                     */}
      {/* ============================================================ */}
      <section id="writer" className="relative py-24 overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={writer.heroImage}
            alt=""
            fill
            className="object-cover opacity-40 mix-blend-screen"
            priority
          />
          {/* Horizontal gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          {/* Vertical gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <motion.div {...scrollAnim}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/20 text-primary text-xs font-headline uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  {writer.statusLabel}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                {...scrollAnim}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-6 text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none"
              >
                NEOBYTE
                <br />
                <span className="text-primary-dim">WRITER</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                {...scrollAnim}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-6 text-on-surface-variant leading-relaxed max-w-lg"
              >
                {writer.description}
              </motion.p>

              {/* 2x2 Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {writer.features.map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    {...stagger(i + 2)}
                    className="glass-card rounded-2xl p-5"
                  >
                    <Icon
                      name={feat.icon ?? "star"}
                      className="text-primary text-3xl"
                    />
                    <h3 className="mt-3 text-on-surface font-headline font-semibold text-sm uppercase tracking-wider">
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-on-surface-variant text-xs leading-relaxed">
                      {feat.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div {...scrollAnim} transition={{ duration: 0.9, delay: 0.5 }}>
                <Link
                  href={`/divisions/${writer.slug}`}
                  className="inline-flex items-center gap-2 mt-10 text-tertiary font-headline text-sm uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Explore Narrative
                  <Icon name="arrow_forward" className="text-base" />
                </Link>
              </motion.div>
            </div>

            {/* Image column — circular container with glow */}
            <motion.div
              {...scrollAnim}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Primary glow */}
                <div className="absolute inset-0 rounded-full bg-primary/35 blur-[80px]" />
                {/* Circular image */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-primary/20">
                  {writer.featureImage && (
                    <Image
                      src={writer.featureImage}
                      alt={writer.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — NEOBYTEFORGE                                      */}
      {/* ============================================================ */}
      <section
        id="forge"
        className="relative bg-surface-container-low py-24 overflow-hidden"
      >
        {/* Background hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={forge.heroImage}
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-surface-container-low" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low via-transparent to-surface-container-low" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: 2x2 icon grid with offset */}
            <motion.div
              {...scrollAnim}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Column 1 — pushed down */}
                <div className="flex flex-col gap-4 mt-12">
                  {(["architecture", "hub"] as const).map((iconName) => (
                    <div
                      key={iconName}
                      className="glass-card rounded-2xl p-6 flex items-center justify-center aspect-square"
                    >
                      <Icon
                        name={iconName}
                        className="text-secondary text-5xl"
                      />
                    </div>
                  ))}
                </div>
                {/* Column 2 — pushed up */}
                <div className="flex flex-col gap-4 -mt-12">
                  {(["precision_manufacturing", "rebase"] as const).map(
                    (iconName) => (
                      <div
                        key={iconName}
                        className="glass-card rounded-2xl p-6 flex items-center justify-center aspect-square"
                      >
                        <Icon
                          name={iconName}
                          className="text-secondary text-5xl"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right side: text */}
            <div className="order-1 lg:order-2">
              {/* Badge */}
              <motion.div {...scrollAnim}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-secondary/20 text-secondary text-xs font-headline uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                  </span>
                  {forge.statusLabel}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                {...scrollAnim}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-6 text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none"
              >
                NEOBYTE
                <br />
                <span className="text-secondary-dim">FORGE</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                {...scrollAnim}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-6 text-on-surface-variant leading-relaxed max-w-lg"
              >
                {forge.description}
              </motion.p>

              {/* Feature list with check icons */}
              <div className="mt-8 flex flex-col gap-4">
                {forge.features.map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    {...stagger(i + 2)}
                    className="flex items-center gap-3"
                  >
                    <Icon
                      name="check_circle"
                      className="text-secondary text-xl"
                    />
                    <span className="text-on-surface font-headline text-sm uppercase tracking-wider">
                      {feat.title}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.div {...scrollAnim} transition={{ duration: 0.9, delay: 0.5 }}>
                <Link
                  href={`/divisions/${forge.slug}`}
                  className="inline-flex items-center gap-2 mt-10 px-8 py-3 rounded-full bg-secondary text-on-secondary font-headline font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(105,156,255,0.4)] transition-all"
                >
                  Technical Specs
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — NEOBYTEGAMES                                      */}
      {/* ============================================================ */}
      <section id="games" className="relative py-24 overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={games.heroImage}
            alt=""
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          {/* Badge */}
          <motion.div {...scrollAnim} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tertiary/40 bg-tertiary/20 text-tertiary text-xs font-headline uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
              </span>
              {games.statusLabel}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            {...scrollAnim}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none"
          >
            NEOBYTE
            <br />
            <span className="text-tertiary-dim">GAMES</span>
          </motion.h2>

          {/* 3-column feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { ...games.features[0], target: "TARGET: HARDCORE GAMERS" },
              { ...games.features[1], target: "TARGET: VR ENTHUSIASTS" },
              { ...games.features[2], target: "TARGET: GLOBAL AUDIENCE" },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                {...stagger(i + 1)}
                className="glass-card rounded-[2rem] p-8 text-left hover:bg-tertiary/10 transition-colors"
              >
                {/* Icon box */}
                <div className="w-14 h-14 rounded-xl bg-tertiary/30 flex items-center justify-center">
                  <Icon
                    name={feat.icon ?? "sports_esports"}
                    className="text-tertiary text-3xl"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-on-surface font-headline font-semibold text-lg">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-on-surface-variant text-sm leading-relaxed">
                  {feat.description}
                </p>

                {/* Target label */}
                <span className="inline-block mt-5 text-[10px] text-tertiary font-headline uppercase tracking-[0.25em]">
                  {feat.target}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — NEOBYTEVISION                                     */}
      {/* ============================================================ */}
      <section
        id="vision"
        className="relative bg-surface py-24 overflow-hidden"
      >
        {/* Background hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={vision.heroImage}
            alt=""
            fill
            className="object-cover opacity-40 mix-blend-color-dodge"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            {...scrollAnim}
            className="glass-card rounded-[3rem] p-12 md:p-20 border border-white/10"
          >
            {/* Badge */}
            <motion.div {...scrollAnim} transition={{ duration: 0.9, delay: 0.1 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/20 text-yellow-500 text-xs font-headline uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
                </span>
                {vision.statusLabel}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              {...scrollAnim}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-6 text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none"
            >
              NEOBYTE
              <br />
              <span className="text-yellow-500">VISION</span>
            </motion.h2>

            {/* Italic quote */}
            <motion.p
              {...scrollAnim}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-6 text-on-surface-variant italic text-lg leading-relaxed max-w-2xl"
            >
              &ldquo;Seeing beyond the event horizon of current technology.
              Pioneering brand aesthetics and R&D into neural-link interfaces.&rdquo;
            </motion.p>

            {/* 2-column feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {vision.features.map((feat, i) => (
                <motion.div key={feat.title} {...stagger(i + 3)}>
                  <h3 className="text-yellow-500 font-headline font-semibold text-sm uppercase tracking-wider">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-on-surface-variant text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.div {...scrollAnim} transition={{ duration: 0.9, delay: 0.6 }}>
              <Link
                href={`/divisions/${vision.slug}`}
                className="inline-flex items-center gap-2 mt-12 px-8 py-3 rounded-full border border-yellow-500/70 text-yellow-500 font-headline font-bold text-xs uppercase tracking-widest hover:bg-yellow-500/10 transition-all"
              >
                Enter The Core
                <Icon name="arrow_forward" className="text-base" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
