const SITE_URL = process.env.SITE_URL || "https://www.nodeflux.ai";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nodeflux",
    url: SITE_URL,
    logo: `${SITE_URL}/nodeflux-logo.webp`,
    description:
      "Indonesia's leading AI company building Video Surveillance Intelligence and LLM-powered AI Agents for enterprise solutions.",
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kemang Timur No.24, Bangka",
      addressLocality: "Jakarta Selatan",
      postalCode: "12730",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "business@nodeflux.io",
      telephone: "+62-22-7181-84",
      contactType: "sales",
    },
    sameAs: ["https://twitter.com/nodefluxio"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nodeflux",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "Nodeflux",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/nodeflux-logo.webp`,
      },
    },
  };
}

export function productJsonLd({
  name,
  description,
  url,
  image,
  category,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${SITE_URL}${url}`,
    image: `${SITE_URL}${image}`,
    applicationCategory: category,
    operatingSystem: "Cloud, On-Premise",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "0",
      priceValidUntil: new Date(
        new Date().getFullYear() + 1,
        11,
        31,
      ).toISOString(),
      description: "Contact sales for enterprise pricing",
    },
    provider: {
      "@type": "Organization",
      name: "Nodeflux",
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    image: image ? `${SITE_URL}${image}` : undefined,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Nodeflux",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/nodeflux-logo.webp`,
      },
    },
  };
}
