import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ContactForm = dynamic(() =>
  import("@/components/sections/ContactForm").then((m) => m.ContactForm),
);

export const metadata: Metadata = {
  title: "Contact — Open A Channel",
  description:
    "Open a transmission channel with NeoByteStudios. Briefs, partnerships, or just a signal into the void — all welcome.",
  alternates: { canonical: "https://neobytestudios.com/contact" },
  openGraph: {
    title: "Contact — Open A Channel",
    description: "Open a transmission channel with NeoByteStudios.",
    url: "https://neobytestudios.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <section className="relative isolate px-6 pt-36 pb-12 md:px-12 md:pt-44 md:pb-16">
        <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-tertiary/60" aria-hidden />
            <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-tertiary">
              Open A Channel
            </span>
            <span className="h-px w-16 bg-tertiary/60" aria-hidden />
          </div>
          <h1 className="mt-8 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl lg:text-8xl">
            Initiate{" "}
            <span className="cosmic-gradient-text font-light italic">
              Transmission
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-on-surface-variant md:text-xl">
            Briefs, partnerships, or pure curiosity. Every signal gets read —
            every serious one gets a reply.
          </p>
        </ScrollReveal>
      </section>
      <ContactForm />
    </>
  );
}
