"use client";

import { motion } from "framer-motion";
import { getDivision } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";

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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(101,255,200,0.10) 0%, rgba(10,10,16,0) 65%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Badge color="tertiary">{d.statusLabel}</Badge>

          <h2 className="mt-8 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-6xl lg:text-7xl">
            NEOBYTE{" "}
            <span className="font-light italic" style={{ color: d.hex }}>
              GAMES
            </span>
          </h2>

          <p className="mt-6 max-w-2xl font-body text-lg text-on-surface-variant">
            {d.description}
          </p>
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
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: `${d.hex}55`,
                    background: `${d.hex}11`,
                    color: d.hex,
                  }}
                >
                  <Icon name={f.icon ?? d.icon} size={28} />
                </div>
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
          <Button
            href="/divisions/games"
            variant="secondary"
            size="md"
            iconRight="arrow_forward"
          >
            Enter The Arena
          </Button>
        </div>
      </div>
    </section>
  );
}
