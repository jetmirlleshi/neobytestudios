import type { Metadata } from "next";
import { LegalSection as Section, LegalPageHeader } from "@/components/ui/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy — NeoByte Studios",
  description:
    "How NeoByte Studios collects, uses, and protects your personal data.",
  alternates: { canonical: "https://neobytestudios.com/legal/privacy" },
  robots: { index: false, follow: true },
};

const LAST_UPDATED = "April 13, 2026";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#a78bfa]/8 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/6 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <LegalPageHeader title="Privacy Policy" lastUpdated={LAST_UPDATED} />

        {/* Content */}
        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <Section title="1. Who We Are">
            <p>
              NeoByte Studios (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a creative studio
              operated by Jetmir. We create narrative,
              gaming, visual, and digital experiences amplified by artificial
              intelligence.
            </p>
            <p>
              For any privacy-related questions, contact us at{" "}
              <a href="mailto:contact@neobytestudios.com" className="text-[#a78bfa] hover:underline">
                contact@neobytestudios.com
              </a>.
            </p>
          </Section>

          <Section title="2. Data We Collect">
            <p>We collect personal data only when you voluntarily provide it:</p>
            <p className="mt-2"><strong className="text-white/90">Contact form:</strong></p>
            <ul className="ml-4 mt-1 list-disc space-y-1 text-white/60">
              <li>Full name</li>
              <li>Email address</li>
              <li>Division of interest</li>
              <li>Project type</li>
              <li>Message content</li>
            </ul>
            <p className="mt-3"><strong className="text-white/90">Newsletter:</strong></p>
            <ul className="ml-4 mt-1 list-disc space-y-1 text-white/60">
              <li>Email address (required)</li>
            </ul>
            <p className="mt-2 text-white/60">
              By subscribing to our newsletter, you explicitly consent to
              receiving periodic updates about new divisions, projects, and
              studio news. You can unsubscribe at any time via the link in
              every email.
            </p>
            <p className="mt-3">
              We use <strong className="text-white/90">Vercel Web Analytics</strong> to
              collect anonymous, aggregated page-view data (no personal
              information, no cross-site tracking). Analytics are activated{" "}
              <strong className="text-white/90">only after you accept</strong> via the
              consent banner. Your choice is stored in your browser&apos;s
              localStorage under the key <code className="text-white/80">cookie-consent</code> —
              this is not a cookie and is never sent to our servers.
            </p>
          </Section>

          <Section title="3. How We Use Your Data">
            <p>Your data is used exclusively to:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-white/60">
              <li>Respond to your inquiry</li>
              <li>Send you a confirmation email</li>
              <li>Communicate about potential projects</li>
              <li>Send newsletter updates (only if you subscribed)</li>
            </ul>
            <p className="mt-3">
              We will never sell, rent, or share your personal data with third
              parties for marketing purposes.
            </p>
          </Section>

          <Section title="4. Email Processing">
            <p>
              Our contact form and newsletter use <strong className="text-white/90">Resend</strong> as
              our email delivery and subscriber management service. When you
              submit the contact form or subscribe to our newsletter, your data
              is processed by Resend to deliver emails and manage your
              subscription. Resend acts as a data processor on our behalf and
              does not use your data for any other purpose.
            </p>
          </Section>

          <Section title="5. Data Storage & Security">
            <p>
              Your contact form submissions are delivered via email and are not
              stored in a separate database. We protect your data through
              industry-standard security measures including encrypted
              transmission (TLS/SSL), authenticated email delivery (SPF, DKIM,
              DMARC), and secure hosting on Vercel.
            </p>
          </Section>

          <Section title="6. Your Rights (GDPR)">
            <p>
              If you are located in the European Economic Area, you have the
              right to:
            </p>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-white/60">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{" "}
              <a href="mailto:contact@neobytestudios.com" className="text-[#a78bfa] hover:underline">
                contact@neobytestudios.com
              </a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your personal data only as long as necessary to fulfill
              the purpose for which it was collected, typically for the duration
              of any ongoing communication or project. You may request deletion
              at any time.
            </p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>Our website uses the following third-party services:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-white/60">
              <li><strong className="text-white/90">Vercel</strong> — hosting and deployment</li>
              <li><strong className="text-white/90">Resend</strong> — transactional email delivery</li>
              <li><strong className="text-white/90">Google Fonts</strong> — typography (loaded via Next.js, no tracking)</li>
              <li><strong className="text-white/90">Vercel Web Analytics</strong> — privacy-focused, anonymous page-view analytics (consent-based, no PII)</li>
            </ul>
          </Section>

          <Section title="9. Children&apos;s Privacy">
            <p>
              Our services are not directed to individuals under 16. We do not
              knowingly collect data from children. If you believe we have
              collected data from a minor, please contact us immediately.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. Your
              continued use of our website after changes constitutes acceptance
              of the updated policy.
            </p>
          </Section>

          {/* Footer note */}
          <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center text-sm text-white/60">
            <p>
              This policy is provided for transparency. For specific legal
              advice, please consult a qualified attorney.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
