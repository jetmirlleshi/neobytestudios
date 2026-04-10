import { SITE } from "@/lib/constants";

const BASE_URL = "https://neobytestudios.com";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: BASE_URL,
    email: SITE.email,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: SITE.founderTitle,
    },
    description: SITE.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: BASE_URL,
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name },
  },
];

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

/**
 * Renders a BreadcrumbList schema for a specific page.
 * Usage: <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About" }]} />
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
