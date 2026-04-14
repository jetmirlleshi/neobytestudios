import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { SetDocumentLang } from "@/components/SetDocumentLang";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: {
    default: "NEOBYTE STUDIOS — Where AI Unlocks Imagination",
    template: "%s — NEOBYTE STUDIOS",
  },
  description: SITE.description,
  keywords: [
    "NeoByte Studios",
    "Cosmic Auteur",
    "AI creative studio",
    "narrative design",
    "game design",
    "AI art",
  ],
  authors: [{ name: "Jetmir" }],
  creator: "Jetmir",
  metadataBase: new URL("https://neobytestudios.com"),
  openGraph: {
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "NEOBYTE STUDIOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "NEOBYTE STUDIOS",
      },
    ],
  },
};

/**
 * Locale layout — renders navbar, footer, and locale-aware content.
 * Dictionary is loaded here and can be passed to child pages via context if needed.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // Preload dictionary to validate locale — pages will load it themselves
  await getDictionary(lang as Locale);

  return (
    <>
      <SetDocumentLang lang={lang} />
      <JsonLd />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <ServiceWorkerRegister />
      <AnalyticsProvider />
      <CookieConsent />
    </>
  );
}
