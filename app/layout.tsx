import type { Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Root layout — minimal shell.
 * Fonts, CSS, and <html>/<body> tags only.
 * Locale-specific content (navbar, footer) lives in app/[lang]/layout.tsx.
 */
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
        <meta name="theme-color" content="#0a0a14" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=architecture,arrow_forward,auto_stories,bolt,check,check_circle,close,cloud_done,edit_note,expand_more,home,hub,lan,language,mail,memory,menu,movie_filter,precision_manufacturing,rebase,refresh,rocket_launch,send,shutter_speed,sports_esports,sync,terminal,videogame_asset&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background font-body">
        {children}
      </body>
    </html>
  );
}
