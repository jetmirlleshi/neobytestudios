import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — NeoByte Studios",
  description:
    "Terms and conditions for using the NeoByte Studios website and services.",
};

const LAST_UPDATED = "April 9, 2026";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#3b82f6]/8 blur-[140px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-[#a78bfa]/6 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-[#a78bfa]">
            Legal Protocol
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-white/40">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the NeoByte Studios website at{" "}
              <a href="https://neobytestudios.com" className="text-[#a78bfa] hover:underline">
                neobytestudios.com
              </a>{" "}
              (&quot;the Site&quot;), you agree to be bound by these Terms of
              Service. If you do not agree, please do not use the Site.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              NeoByte Studios is a creative studio that produces narrative,
              gaming, visual, and digital content amplified by artificial
              intelligence. The Site serves as our portfolio, information hub,
              and primary contact channel.
            </p>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on this Site — including but not limited to text,
              graphics, logos, images, designs, code, and the overall look and
              feel — is the property of NeoByte Studios and is protected by
              international copyright and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative
              works from any content on this Site without our prior written
              consent.
            </p>
          </Section>

          <Section title="4. Use of the Site">
            <p>You agree to use the Site only for lawful purposes and in a manner that does not:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-white/60">
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone&apos;s use of the Site</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Transmit any harmful, offensive, or unlawful content</li>
              <li>Use automated tools to scrape or extract content</li>
            </ul>
          </Section>

          <Section title="5. Contact Form & Communications">
            <p>
              When you submit information through our contact form, you
              represent that the information provided is accurate and that you
              consent to receiving a confirmation email and follow-up
              communications related to your inquiry.
            </p>
            <p>
              We reserve the right not to respond to submissions that are
              abusive, spammy, or unrelated to our services.
            </p>
          </Section>

          <Section title="6. AI-Generated Content Disclaimer">
            <p>
              NeoByte Studios uses artificial intelligence tools as part of our
              creative process. While AI assists in production, all final
              creative decisions and quality control are made by human direction.
              Our published works represent the creative vision of our founder,
              amplified — not replaced — by AI.
            </p>
          </Section>

          <Section title="7. Project Engagements">
            <p>
              Any project engagement initiated through the Site is subject to a
              separate written agreement between NeoByte Studios and the client.
              These Terms of Service do not constitute a contract for services.
              Pricing, deliverables, timelines, and intellectual property
              ownership for commissioned work will be defined in individual
              project agreements.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              The Site and its content are provided &quot;as is&quot; without
              warranties of any kind. NeoByte Studios shall not be liable for
              any direct, indirect, incidental, or consequential damages arising
              from your use of the Site.
            </p>
            <p>
              We do not guarantee uninterrupted access to the Site and reserve
              the right to modify or discontinue any aspect at any time.
            </p>
          </Section>

          <Section title="9. External Links">
            <p>
              The Site may contain links to third-party websites. We are not
              responsible for the content, privacy practices, or availability of
              those sites. Accessing external links is at your own risk.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of Albania, without regard to conflict of law principles. Any
              disputes shall be resolved in the courts of Tirana, Albania.
            </p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>
              We reserve the right to update these Terms at any time. Changes
              take effect upon posting to this page. Continued use of the Site
              after changes constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:contact@neobytestudios.com" className="text-[#a78bfa] hover:underline">
                contact@neobytestudios.com
              </a>.
            </p>
          </Section>

          {/* Footer note */}
          <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center text-sm text-white/40">
            <p>
              These terms are provided for transparency. For specific legal
              advice, please consult a qualified attorney.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-white/90">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
