"use client";

import { motion } from "framer-motion";
import type { Division } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { CosmicOrbs } from "@/components/ui/CosmicOrbs";
import { SectionHeader } from "@/components/ui/SectionHeader";

/* ============ Hero ============ */

export function DivisionHero({ d, dict, divDict, lang }: { d: Division; dict?: Record<string, any>; divDict?: Record<string, any>; lang?: string }) {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden px-6 pt-28 pb-16 md:px-12">
      <CosmicOrbs preset="hero" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 tech-grid opacity-[0.35]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 70% 40%, ${d.hex}22 0%, rgba(10,10,16,0) 60%)`,
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <Badge color={d.colorToken}>{divDict?.statusLabel ?? d.statusLabel}</Badge>

          <h1 className="font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl lg:text-8xl">
            {d.shortName.charAt(0) + d.shortName.slice(1).toLowerCase()}
            <br />
            <span className="font-light italic" style={{ color: d.hex }}>
              {(divDict?.tagline ?? d.tagline).split(" ").slice(0, 3).join(" ")}
            </span>
          </h1>

          <p className="max-w-2xl font-body text-lg text-on-surface-variant md:text-xl">
            {divDict?.description ?? d.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              href={lang ? `/${lang}/contact` : "/contact"}
              variant="primary"
              size="md"
              iconRight="rocket_launch"
            >
              {(dict?.commission ?? "Commission {shortName}").replace("{shortName}", d.shortName)}
            </Button>
            <Button href={lang ? `/${lang}/divisions` : "/divisions"} variant="secondary" size="md">
              {dict?.allDivisions ?? "All Divisions"}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${d.hex}55 0%, ${d.hex}1a 40%, transparent 70%)`,
              filter: "blur(40px)",
            }}
          />
          <div
            className="relative flex h-full w-full items-center justify-center rounded-full border"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              borderColor: `${d.hex}44`,
              boxShadow: `inset 0 0 80px ${d.hex}22, 0 0 100px ${d.hex}33`,
            }}
          >
            <Icon name={d.icon} size={120} fill style={{ color: d.hex }} />
            <span
              aria-hidden
              className="absolute inset-6 rounded-full border border-dashed"
              style={{
                borderColor: `${d.hex}33`,
                animation: "spin 50s linear infinite",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ Mission ============ */

export function DivisionMission({ d, dict, divDict }: { d: Division; dict?: Record<string, any>; divDict?: Record<string, any> }) {
  const m = dict?.mission;
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          align="center"
          label={m?.label ?? "Mission"}
          title={
            <>
              The{" "}
              <span className="font-light italic" style={{ color: d.hex }}>
                {m?.titleHighlight ?? "mandate"}
              </span>
            </>
          }
          subtitle={divDict?.tagline ?? d.tagline}
        />
        <p className="mx-auto mt-10 max-w-3xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
          {divDict?.description ?? d.description}{" "}
          {(m?.suffix ?? "Within the NeoByte universe, {name} carries the charge of turning raw intent into structured reality \u2014 operating at the intersection of classical craftsmanship and autonomous intelligence.").replace("{name}", d.name)}
        </p>
      </div>
    </section>
  );
}

/* ============ Capabilities ============ */

export function DivisionCapabilities({ d, dict, divDict }: { d: Division; dict?: Record<string, any>; divDict?: Record<string, any> }) {
  const c = dict?.capabilities;
  const caps = divDict?.capabilities ?? d.capabilities;
  return (
    <section className="relative bg-surface-container-lowest px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={c?.label ?? "Capabilities"}
          title={
            <>
              What we{" "}
              <span className="font-light italic" style={{ color: d.hex }}>
                {c?.titleHighlight ?? "ship"}
              </span>
            </>
          }
          subtitle={(c?.subtitle ?? "Core services offered by {name}. All battle-tested through Jetmir's solo-with-AI pipeline.").replace("{name}", d.name)}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {caps.map((cap: string, i: number) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard radius="2xl" className="flex items-start gap-5 p-6">
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: `${d.hex}55`,
                    background: `${d.hex}11`,
                    color: d.hex,
                  }}
                >
                  <Icon name="bolt" size={20} />
                </div>
                <p className="font-body text-base text-on-background">{cap}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Process ============ */

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Signal",
    description:
      "We open a channel with the client. Deep listening, constraint mapping, creative alignment.",
  },
  {
    id: "02",
    title: "Forge",
    description:
      "Rapid prototyping with AI-amplified workflows. Ideas become tangible artifacts within days, not months.",
  },
  {
    id: "03",
    title: "Refine",
    description:
      "Human craftsmanship dials in the details. Every pixel, word, and frame is interrogated.",
  },
  {
    id: "04",
    title: "Launch",
    description:
      "Delivery of the finished vessel, with ongoing orbit support for evolution post-release.",
  },
];

export function DivisionProcess({ d, dict }: { d: Division; dict?: Record<string, any> }) {
  const p = dict?.process;
  const steps = p?.steps ?? PROCESS_STEPS;
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={p?.label ?? "Process"}
          title={
            <>
              Four{" "}
              <span className="font-light italic" style={{ color: d.hex }}>
                {p?.titleHighlight ?? "gravity wells"}
              </span>
            </>
          }
          subtitle={p?.subtitle ?? "A repeatable orbit from signal to launch. No BS, no bloated kickoffs."}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step: { id: string; title: string; description: string }, i: number) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard radius="2xl" className="h-full p-6">
                <span
                  className="font-headline text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: d.hex }}
                >
                  {step.id}
                </span>
                <h3 className="mt-3 font-headline text-xl font-semibold text-on-background">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-sm text-on-surface-variant">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Artifacts placeholder ============ */

export function DivisionArtifacts({ d, dict }: { d: Division; dict?: Record<string, any> }) {
  const a = dict?.artifacts;
  return (
    <section className="relative bg-surface-container-lowest px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label={a?.label ?? "Signature Artifacts"}
          title={
            <>
              Featured{" "}
              <span className="font-light italic" style={{ color: d.hex }}>
                {a?.titleHighlight ?? "vessels"}
              </span>
            </>
          }
          subtitle={a?.subtitle ?? "The studio is young. New artifacts are entering orbit \u2014 the archive updates as soon as each one lands."}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: n * 0.1 }}
            >
              <GlassCard
                radius="2xl"
                className="flex aspect-[4/5] flex-col justify-between p-6"
              >
                <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
                  {(a?.artifactLabel ?? "ARTIFACT / {number}").replace("{number}", String(n).padStart(2, "0"))}
                </span>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-on-background">
                    {a?.inTransit ?? "In transit"}
                  </h3>
                  <p
                    className="mt-2 font-headline text-[11px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: d.hex }}
                  >
                    {a?.comingOrbit ?? "\u25cf Coming Orbit"}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA ============ */

export function DivisionCTA({ d, dict, lang }: { d: Division; dict?: Record<string, any>; lang?: string }) {
  const ct = dict?.ctaSection;
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <CosmicOrbs preset="cta" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2 className="font-headline text-4xl font-bold leading-[1.05] tracking-tighter text-on-background md:text-6xl">
          Ready to enter{" "}
          <span className="font-light italic" style={{ color: d.hex }}>
            {(ct?.titleHighlight ?? "the {shortName} orbit?").replace("{shortName}", d.shortName.toLowerCase())}
          </span>
        </h2>
        <p className="mt-6 max-w-xl font-body text-lg text-on-surface-variant">
          {ct?.subtitle ?? "Open a channel with the studio. First contact is always free \u2014 signals travel at light-speed."}
        </p>
        <div className="mt-10">
          <Button href={lang ? `/${lang}/contact` : "/contact"} variant="primary" size="lg" iconRight="send">
            {ct?.button ?? "Initiate Transmission"}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
