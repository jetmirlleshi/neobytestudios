"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
      <button
        onClick={reset}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-headline text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
      >
        Try Again
      </button>
    </section>
  );
}
