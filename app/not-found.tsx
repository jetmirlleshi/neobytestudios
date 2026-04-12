import { Button } from "@/components/ui/Button";

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
      <div className="mt-10">
        <Button href="/" variant="primary" size="md" iconRight="home">
          Return to Base
        </Button>
      </div>
    </section>
  );
}
