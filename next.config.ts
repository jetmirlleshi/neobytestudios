import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: distDir can be overridden via NEXT_DIST_DIR when building inside
  // the Cowork sandbox (its FUSE mount refuses to unlink Next's cache files).
  // On Windows / Vercel this env var is unset and defaults to `.next`.
  ...(process.env.NEXT_DIST_DIR
    ? { distDir: process.env.NEXT_DIST_DIR }
    : {}),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
