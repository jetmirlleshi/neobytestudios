import dynamic from "next/dynamic";

export const LazyCTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((m) => m.CTASection),
);
