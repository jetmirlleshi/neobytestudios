import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "NEOBYTE STUDIOS — Where AI Unlocks Imagination",
    template: "%s — NEOBYTE STUDIOS",
  },
  description:
    "A monoauthor creative studio amplified by artificial intelligence. Sculpting cosmic narratives, engineering immersive worlds, and weaving visual poems through the prism of AI.",
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
    title: "NEOBYTE STUDIOS — Where AI Unlocks Imagination",
    description:
      "A monoauthor creative studio amplified by AI. Beyond The Void.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og", width: 1200, height: 630, alt: "NEOBYTE STUDIOS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEOBYTE STUDIOS — Where AI Unlocks Imagination",
    description:
      "A monoauthor creative studio amplified by AI. Beyond The Void.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background font-body">
        <Navbar />
        <div id="main-content" className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
