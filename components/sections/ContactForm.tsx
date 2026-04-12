"use client";

import { useState, type FormEvent, type FocusEvent } from "react";
import { motion } from "framer-motion";
import { DIVISIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { ContactSidebar } from "@/components/sections/ContactSidebar";

/** Contact page — form + side info. Submits to /api/contact (Resend). */

const PROJECT_TYPES = [
  "Narrative / Script",
  "Interactive / Game",
  "Tool / Engine",
  "Brand / Vision",
  "Consultation",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function validate(name: string, value: string): string | undefined {
  if (name === "name" && !value.trim()) return "Identify the transmission source.";
  if (name === "email") {
    if (!value.trim()) return "Transmission coordinates required.";
    if (!EMAIL_RE.test(value)) return "Enter valid transmission coordinates.";
  }
  if (name === "message" && !value.trim()) return "A message is required to decode your intent.";
  return undefined;
}

const baseInputClass =
  "w-full rounded-xl border bg-surface-container-lowest/60 px-4 py-3 font-body text-sm text-on-background placeholder:text-on-surface-variant/60 transition-colors duration-300 focus:outline-none focus:ring-2";

function inputClass(hasError: boolean) {
  return `${baseInputClass} ${hasError ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/30" : "border-outline-variant focus:border-primary/70 focus:ring-primary/30"}`;
}

const labelClass =
  "font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.currentTarget;
    setTouched((prev) => new Set(prev).add(name));
    const error = validate(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  }

  function fieldError(name: keyof FieldErrors) {
    return touched.has(name) ? fieldErrors[name] : undefined;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");

    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      division: fd.get("division") as string,
      type: fd.get("type") as string,
      message: fd.get("message") as string,
    };

    // Validate all fields before submit
    const errors: FieldErrors = {};
    for (const key of ["name", "email", "message"] as const) {
      errors[key] = validate(key, data[key]);
    }
    setFieldErrors(errors);
    setTouched(new Set(["name", "email", "message"]));
    if (Object.values(errors).some(Boolean)) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "send failed");
      }
      setStatus("sent");
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Transmission failed.",
      );
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
                    aria-required="true"
                    placeholder="Your callsign"
                    aria-invalid={!!fieldError("name")}
                    aria-describedby={fieldError("name") ? "name-error" : undefined}
                    onBlur={handleBlur}
                    className={inputClass(!!fieldError("name"))}
                  />
                  {fieldError("name") && (
                    <p id="name-error" className="text-xs text-red-400">
                      {fieldError("name")}
                    </p>
                  )}
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
                    aria-required="true"
                    placeholder="your@coordinates.net"
                    aria-invalid={!!fieldError("email")}
                    aria-describedby={fieldError("email") ? "email-error" : undefined}
                    onBlur={handleBlur}
                    className={inputClass(!!fieldError("email"))}
                  />
                  {fieldError("email") && (
                    <p id="email-error" className="text-xs text-red-400">
                      {fieldError("email")}
                    </p>
                  )}
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
                    className={inputClass(false)}
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
                    className={inputClass(false)}
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
                  aria-required="true"
                  rows={6}
                  placeholder="Tell us about the world you want to build."
                  aria-invalid={!!fieldError("message")}
                  aria-describedby={fieldError("message") ? "message-error" : undefined}
                  onBlur={handleBlur}
                  className={`${inputClass(!!fieldError("message"))} resize-none`}
                />
                {fieldError("message") && (
                  <p id="message-error" className="text-xs text-red-400">
                    {fieldError("message")}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p role="alert" className="font-body text-sm text-red-400">
                  {serverError || "Transmission failed. Please try again or email us directly."}
                </p>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  iconRight={status === "sending" ? "sync" : "send"}
                  disabled={status === "sending"}
                  aria-busy={status === "sending"}
                >
                  {status === "sending" ? "Transmitting..." : "Transmit Signal"}
                </Button>
              </div>
            </form>
          )}
        </GlassCard>

        <ContactSidebar />
      </div>
    </section>
  );
}
