import Link from "next/link";

export const metadata = {
  title: "404 — Signal Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-tertiary">
        Error 404
      </p>
      <h1 className="mt-6 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl">
        Signal{" "}
        <span className="cosmic-gradient-text font-light italic">
          Not Found
        </span>
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-on-surface-variant">
        The coordinates you entered don&rsquo;t match any known location in the
        NeoByte universe.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-headline text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
      >
        Return to Base
      </Link>
    </section>
  );
}
