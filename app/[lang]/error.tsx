"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-tertiary">
        System Error
      </p>
      <h1 className="mt-6 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl">
        Something{" "}
        <span className="cosmic-gradient-text font-light italic">
          Broke
        </span>
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-on-surface-variant">
        An unexpected glitch disrupted the signal. Try again — if the issue
        persists, reach out to us.
      </p>
      <div className="mt-10">
        <Button variant="primary" size="md" iconRight="refresh" onClick={reset}>
          Try Again
        </Button>
      </div>
    </section>
  );
}
