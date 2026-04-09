import { SITE } from "@/lib/constants";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: "https://neobytestudios.com",
  email: SITE.email,
  founder: {
    "@type": "Person",
    name: SITE.founder,
    jobTitle: SITE.founderTitle,
  },
  description:
    "A monoauthor creative studio amplified by artificial intelligence. Sculpting cosmic narratives, engineering immersive worlds, and weaving visual poems through the prism of AI.",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
