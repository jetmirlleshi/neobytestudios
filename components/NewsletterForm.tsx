"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

/**
 * Newsletter signup form with two layout variants:
 * - `inline`: horizontal email + button row (for Footer)
 * - `card`: GlassCard wrapper with title/description (for CTASection)
 */
export function NewsletterForm({ variant = "inline" }: { variant?: "inline" | "card" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const email = (fd.get("email") as string).trim();

    if (!email || !EMAIL_RE.test(email)) {
      setErrorMsg("Enter valid transmission coordinates.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Subscription failed.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Signal lost. Try again.");
      setStatus("error");
    }
  }

  const successView = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-3"
    >
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-tertiary/60 bg-tertiary/15 text-tertiary">
        <Icon name="check_circle" size={18} />
      </div>
      <p className="font-headline text-sm font-semibold text-on-background">
        You&rsquo;re in the orbit.
      </p>
    </motion.div>
  );

  const formView = (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className={variant === "inline" ? "flex gap-3" : "flex flex-col gap-3 sm:flex-row"}>
        <input
          name="email"
          type="email"
          required
          aria-required="true"
          aria-label="Email address"
          placeholder="your@coordinates.net"
          className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest/60 px-4 py-2.5 font-body text-sm text-on-background placeholder:text-on-surface-variant/60 transition-colors duration-300 focus:border-primary/70 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <Button
          type="submit"
          variant="primary"
          size="sm"
          iconRight={status === "sending" ? "sync" : "mail"}
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          className="shrink-0"
        >
          {status === "sending" ? "Joining..." : "Join The Orbit"}
        </Button>
      </div>
      <AnimatePresence>
        {status === "error" && errorMsg && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            role="alert"
            className="text-xs text-red-400"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );

  if (variant === "card") {
    return (
      <GlassCard radius="2xl" className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <div key="success" className="flex flex-col items-center gap-4 text-center">
              {successView}
            </div>
          ) : (
            <div key="form" className="flex flex-col gap-5">
              <div className="text-center">
                <h3 className="font-headline text-xl font-bold tracking-tight text-on-background md:text-2xl">
                  Join{" "}
                  <span className="cosmic-gradient-text font-light italic">The Signal</span>
                </h3>
                <p className="mt-2 font-body text-sm text-on-surface-variant">
                  Rare transmissions about new divisions, projects, and cosmic updates.
                </p>
              </div>
              {formView}
            </div>
          )}
        </AnimatePresence>
      </GlassCard>
    );
  }

  // Inline variant (footer)
  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <div key="success">{successView}</div>
      ) : (
        <div key="form">{formView}</div>
      )}
    </AnimatePresence>
  );
}
