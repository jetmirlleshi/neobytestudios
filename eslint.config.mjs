import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...nextCoreWebVitals,
  {
    files: ["**/layout.tsx"],
    rules: {
      // App Router uses layout.tsx, not pages/_document.js
      "@next/next/no-page-custom-font": "off",
    },
  },
  {
    ignores: [".next/", "node_modules/", "tmp*/"],
  },
];

export default config;
