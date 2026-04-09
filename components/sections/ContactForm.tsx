"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { DIVISIONS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";

/** Contact page — form + side info. Submits to /api/contact (Resend). */

const PROJECT_TYPES = [
  "Narrative / Script",
  "Interactive / Game",
  "Tool / Engine",
  "Brand / Vision",
  "Consultation",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-outline-variant bg-surface-container-lowest/60 px-4 py-3 font-body text-sm text-on-background placeholder:text-on-surface-variant/60 transition-colors duration-300 focus:border-primary/70 focus:outline-none focus:ring-2 focus:ring-primary/30";

const labelClass =
  "font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      division: (form.elements.namedItem("division") as HTMLSelectElement).value,
      type: (form.elements.namedItem("type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative px-6 pb-24 md:px-12 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Form panel */}
        <GlassCard variant="panel" radius="3xl" className="p-8 md:p-12" aria-live="polite">
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6 py-12 text-center"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-tertiary/60 bg-tertiary/15 text-tertiary">
                <Icon name="check_circle" size={32} />
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-background md:text-4xl">
                Signal received.
              </h2>
              <p className="max-w-md font-body text-on-surface-variant">
                Your transmission has entered the NeoByte orbit. Expect a reply
                within 48 light-hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-on-background md:text-4xl">
                  Initiate{" "}
                  <span className="cosmic-gradient-text font-light italic">
                    Transmission
                  </span>
                </h2>
                <p className="mt-3 font-body text-on-surface-variant">
                  Open a channel with the studio. All fields are required
                  unless marked otherwise.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@signal.net"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="division" className={labelClass}>
                    Division
                  </label>
                  <select
                    id="division"
                    name="division"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a division
                    </option>
                    {DIVISIONS.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.name}
                      </option>
                    ))}
                    <option value="any">Not sure / cross-division</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className={labelClass}>
                    Project type
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a type
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about the world you want to build."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p role="alert" className="font-body text-sm text-red-400">
                  Transmission failed. Please try again or email us directly.
                </p>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  iconRight={status === "sending" ? "sync" : "send"}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Transmitting..." : "Transmit Signal"}
                </Button>
              </div>
            </form>
          )}
        </GlassCard>

        {/* Side info */}
        <div className="flex flex-col gap-6">
          <GlassCard radius="2xl" className="p-6">
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
              Direct Channel
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 block break-all font-headline text-lg font-semibold text-on-background transition-colors hover:text-primary"
            >
              {SITE.email}
            </a>
          </GlassCard>

          <GlassCard radius="2xl" className="p-6">
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
              Coordinates
            </span>
            <p className="mt-3 font-body text-on-background">
              {SITE.location}
            </p>
            <p className="mt-1 font-body text-sm text-on-surface-variant">
              Remote-first. Orbiting the entire timezone grid.
            </p>
          </GlassCard>

          <GlassCard radius="2xl" className="p-6">
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
              Response Window
            </span>
            <p className="mt-3 font-body text-on-background">
              Within 48 light-hours
            </p>
            <p className="mt-1 font-body text-sm text-on-surface-variant">
              Mon – Fri. Urgent signals get priority routing.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
