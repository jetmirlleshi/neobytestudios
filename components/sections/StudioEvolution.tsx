"use client";

import { motion } from "framer-motion";
import { STUDIO_EVOLUTION, HEX_BY_COLOR_TOKEN } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function StudioEvolution() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="The Evolution"
          title={
            <>
              Three Orbits of{" "}
              <span className="cosmic-gradient-text font-light italic">
                Becoming
              </span>
            </>
          }
          subtitle="From ignition to stellar persistence. Our trajectory through the void, one gravity well at a time."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-outline-variant bg-outline-variant md:grid-cols-3">
          {STUDIO_EVOLUTION.map((step, i) => {
            const hex = HEX_BY_COLOR_TOKEN[step.colorToken];
            return (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                className="group relative flex flex-col justify-between gap-8 bg-surface-container-lowest p-10 transition-colors duration-500 hover:bg-surface-container-low md:p-12"
              >
                {/* Top: ID + Icon */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-headline text-[10px] font-semibold uppercase tracking-[0.4em] text-on-surface-variant"
                  >
                    {step.id}
                  </span>

                  <div
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(12px)",
                      borderColor: `${hex}66`,
                      boxShadow: `0 0 30px ${hex}33, inset 0 0 12px ${hex}22`,
                      color: hex,
                    }}
                  >
                    <Icon name={step.icon} size={24} />
                  </div>
                </div>

                {/* Middle: title + body */}
                <div className="flex-1">
                  <h3 className="font-headline text-2xl font-semibold leading-tight tracking-tight text-on-background md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 font-body text-[15px] leading-relaxed text-on-surface-variant">
                    {step.description}
                  </p>
                </div>

                {/* Bottom: status bar */}
                <div className="flex items-center gap-3 pt-4">
                  <span
                    aria-hidden
                    className="relative inline-flex h-2 w-2"
                  >
                    <span
                      className="absolute inset-0 animate-ping rounded-full opacity-75"
                      style={{ backgroundColor: hex }}
                    />
                    <span
                      className="relative inline-flex h-2 w-2 rounded-full"
                      style={{ backgroundColor: hex }}
                    />
                  </span>
                  <span
                    className="font-headline text-[11px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: hex }}
                  >
                    {step.status}
                  </span>
                </div>

                {/* Bottom colored bar */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px"
                  style={{
                    background: `linear-gradient(to right, transparent, ${hex}, transparent)`,
                    opacity: 0.6,
                  }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
