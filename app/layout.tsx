import type { Metadata } from "next";
import { Space_Grotesk, Inter, Unbounded, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "600", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NeoByte Studios | Where AI Unlocks Imagination",
  description:
    "Quattro prodotti AI — Writer, Forge, Games, Vision — orbitano attorno al tuo concept. Tu porti la scintilla, noi costruiamo pianeta, cielo e fandom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${spaceGrotesk.variable} ${inter.variable} ${unbounded.variable} ${jetbrainsMono.variable}`}
    >
      <body data-variant="orbital" data-anim="high">
        {children}
      </body>
    </html>
  );
}
