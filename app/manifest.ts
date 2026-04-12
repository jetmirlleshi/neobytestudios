import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEOBYTE STUDIOS — Where AI Unlocks Imagination",
    short_name: "NEOBYTE",
    description:
      "A monoauthor creative studio amplified by artificial intelligence.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a14",
    theme_color: "#a78bfa",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
