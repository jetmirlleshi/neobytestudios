"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroImages, studioEvolution } from "@/lib/constants";

/* ───────────────────────────────────────────────────── */
/*  Color utility – maps the data-driven "color" key     */
/*  to concrete Tailwind classes.                        */
/* ───────────────────────────────────────────────────── */
const colorMap: Record<
  string,
  { text: string; bg: string; border: string; bar: string }
> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    border: "border-primary/30",
    bar: "bg-primary",
  },
  secondary: {
    text: "text-secondary",
    bg: "bg-secondary",
    border: "border-secondary/30",
    bar: "bg-secondary",
  },
  tertiary: {
    text: "text-tertiary",
    bg: "bg-tertiary",
    border: "border-tertiary/30",
    bar: "bg-tertiary",
  },
};

/* ───────────────────────────────────────────────────── */
/*  Page component                                       */
/* ───────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      {/* ============================================= */}
      {/* 1 ─ Hero Section                              */}
      {/* ============================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={heroImages.about}
            alt="NeoByteStudios about hero"
            fill
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-screen"
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-8">
          {/* Label */}
          <div className="flex items-center gap-4 uppercase tracking-[0.3em] text-[10px] text-on-surface-variant">
            <span className="h-[1px] w-8 bg-tertiary" />
            <span>Origin Sequence</span>
            <span className="h-[1px] w-8 bg-tertiary" />
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-9xl font-headline font-bold leading-[0.9] tracking-tighter uppercase">
            The Story of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
              NeoByteStudios
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-on-surface-variant max-w-2xl text-sm md:text-base leading-relaxed">
            Engineering narratives at the intersection of classical craftsmanship
            and autonomous intelligence. Founded by Jetmir to bridge the void
            between imagination and execution.
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <span className="block w-px h-16 bg-gradient-to-b from-primary to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
              Initialize Scroll
            </span>
          </div>
        </div>
      </motion.section>

      {/* ============================================= */}
      {/* 2 ─ Quote / Protocol Section                  */}
      {/* ============================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-40 cosmic-gradient"
      >
        <div className="relative grid md:grid-cols-12 max-w-7xl mx-auto px-6">
          {/* Side decoration — left (hidden on mobile) */}
          <div className="hidden md:flex col-span-1 items-center justify-center">
            <span className="text-[10px] text-outline-variant/60 tracking-widest uppercase -rotate-90 whitespace-nowrap">
              01001110 01000101 01001111
            </span>
          </div>

          {/* Main content */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col items-center text-center gap-10">
            {/* Badge pill */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-outline-variant/30 bg-surface-container/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-headline">
                The Protocol
              </span>
            </div>

            {/* Blockquote */}
            <blockquote className="text-4xl md:text-6xl font-headline font-bold leading-[1.1] tracking-tighter">
              &ldquo;We don&rsquo;t build tools; we build{" "}
              <span className="text-tertiary border-b-2 border-tertiary/30">
                vessels
              </span>{" "}
              for the imagination. Every pixel is a star, every line of code a
              law of physics for a new world.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="text-on-surface-variant text-xs uppercase tracking-[0.3em]">
              Jetmir &mdash; Architect
            </p>
          </div>

          {/* Side decoration — right (hidden on mobile) */}
          <div className="hidden md:flex col-span-1 items-center justify-center">
            <span className="text-[10px] text-outline-variant/60 tracking-widest uppercase -rotate-90 whitespace-nowrap">
              STU_PROTO_04.X
            </span>
          </div>
        </div>
      </motion.section>

      {/* ============================================= */}
      {/* 3 ─ Studio Evolution Section                  */}
      {/* ============================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-40 bg-surface-container-lowest overflow-hidden"
      >
        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter">
                Studio Evolution
              </h2>
              <p className="text-secondary text-xs uppercase tracking-[0.3em] mt-3">
                Mapping the Stellar Trajectory
              </p>
            </div>
            <span className="text-tertiary text-3xl font-headline font-bold tracking-tighter">
              2020 / 2024
            </span>
          </div>

          {/* 3-column grid */}
          <div className="grid md:grid-cols-3 gap-px bg-outline-variant/20">
            {studioEvolution.map((item) => {
              const colors = colorMap[item.color] ?? colorMap.primary;

              return (
                <div
                  key={item.id}
                  className="group relative bg-surface-container-lowest p-12 transition-colors duration-300 hover:bg-surface-container-low overflow-hidden"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-15 group-hover:opacity-30">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover mix-blend-screen"
                    />
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Icon + orbit label */}
                    <div className="flex items-center gap-4">
                      <span
                        className={`material-symbols-outlined text-3xl ${colors.text}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {item.icon}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                        {item.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-headline font-bold uppercase tracking-wide">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Color bar + status */}
                    <div className="flex items-center gap-4 mt-4">
                      <span className={`block h-1 w-12 rounded-full ${colors.bar}`} />
                      <span
                        className={`text-[10px] uppercase tracking-[0.3em] ${colors.text}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
