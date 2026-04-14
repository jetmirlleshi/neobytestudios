import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline — Signal Lost",
};

export default function OfflinePage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-tertiary">
        Signal Lost
      </p>
      <h1 className="mt-6 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl">
        You&rsquo;re{" "}
        <span className="cosmic-gradient-text font-light italic">Offline</span>
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-on-surface-variant">
        It looks like your connection dropped. Reconnect to the network to
        continue exploring the NeoByte universe.
      </p>
    </section>
  );
}
