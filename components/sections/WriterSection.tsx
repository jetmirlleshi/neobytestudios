"use client";

import { motion } from "framer-motion";
import { getDivision } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";

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
      {/* Subtle purple radial tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 50%, rgba(192,132,252,0.10) 0%, rgba(10,10,16,0) 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <Badge color="primary">{d.statusLabel}</Badge>

          <h2 className="font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-6xl lg:text-7xl">
            NEOBYTE{" "}
            <span
              className="font-light italic"
              style={{ color: d.hex }}
            >
              WRITER
            </span>
          </h2>

          <p className="max-w-xl font-body text-lg text-on-surface-variant">
            {d.description}
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {d.features.map((f) => (
              <GlassCard key={f.title} radius="2xl" className="p-6">
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: `${d.hex}55`,
                    background: `${d.hex}11`,
                    color: d.hex,
                  }}
                >
                  <Icon name={f.icon ?? d.icon} size={20} />
                </div>
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
            <Button
              href="/divisions/writer"
              variant="primary"
              size="md"
              iconRight="arrow_forward"
            >
              Explore Narrative
            </Button>
          </div>
        </motion.div>

        {/* Right: cosmic portrait orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(192,132,252,0.45) 0%, rgba(192,132,252,0.15) 40%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="relative flex h-full w-full items-center justify-center rounded-full border"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              borderColor: `${d.hex}44`,
              boxShadow: `inset 0 0 60px ${d.hex}22, 0 0 80px ${d.hex}33`,
            }}
          >
            <Icon
              name={d.icon}
              size={96}
              fill
              style={{ color: d.hex }}
            />
            {/* Rotating dashed orbit ring */}
            <span
              aria-hidden
              className="absolute inset-4 rounded-full border border-dashed"
              style={{
                borderColor: `${d.hex}33`,
                animation: "spin 40s linear infinite",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
