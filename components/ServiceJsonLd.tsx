import type { Division } from "@/lib/types";
import { SITE } from "@/lib/constants";

const BASE_URL = "https://neobytestudios.com";

export function ServiceJsonLd({ division }: { division: Division }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: division.name,
    description: division.description,
    url: `${BASE_URL}/divisions/${division.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: BASE_URL,
    },
    serviceType: division.statusLabel,
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE_URL}/contact`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
