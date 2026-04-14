import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/lib/dictionaries";
import { type Locale } from "@/lib/i18n";
import { headers } from "next/headers";

export const metadata = {
  title: "404 — Signal Not Found",
};

export default async function NotFound() {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? headerList.get("referer") ?? "/en";
  const lang = (pathname.split("/")[1] || "en") as Locale;
  let dict: Record<string, string>;
  try {
    const d = await getDictionary(lang);
    dict = d.notFound;
  } catch {
    dict = { label: "Error 404", titlePart1: "Signal", titleHighlight: "Not Found", description: "The coordinates you entered don\u2019t match any known location in the NeoByte universe.", home: "Return to Base" };
  }

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-tertiary">
        {dict.label}
      </p>
      <h1 className="mt-6 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-background md:text-7xl">
        {dict.titlePart1}{" "}
        <span className="cosmic-gradient-text font-light italic">
          {dict.titleHighlight}
        </span>
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-on-surface-variant">
        {dict.description}
      </p>
      <div className="mt-10">
        <Button href={`/${lang}`} variant="primary" size="md" iconRight="home">
          {dict.home}
        </Button>
      </div>
    </section>
  );
}
