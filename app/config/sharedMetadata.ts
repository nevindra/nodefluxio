import type { Metadata } from "next";

export function generateMetadata(
  title: string,
  description: string,
  keywords: string[],
): Metadata {
  return {
    metadataBase: new URL(process.env.SITE_URL || "https://www.nodeflux.ai"),
    title: {
      template: "%s",
      default: title,
    },
    description,
    keywords,
    alternates: {
      canonical: "./",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Nodeflux",
      title,
      description,
      images: [
        {
          url: "/landing-page/visionaire-core.webp",
          width: 1200,
          height: 630,
          alt: "Nodeflux - Video Surveillance AI & LLM Agents",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@nodefluxio",
      creator: "@nodefluxio",
      images: ["/landing-page/visionaire-core.webp"],
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const defaultMetadata = generateMetadata(
  "Nodeflux - AI Company for Video Surveillance & Intelligent Agents",
  "Nodeflux is Indonesia's leading AI company building Video Surveillance Intelligence and LLM-powered AI Agents. Enterprise solutions for smart cities, public safety, and security operations.",
  [
    "Video Surveillance AI",
    "LLM Agent",
    "AI Agent",
    "Agentic AI",
    "Vision AI",
    "Computer Vision",
    "Surveillance Intelligence",
    "CCTV Analytics",
    "Smart City AI",
    "Public Safety AI",
    "Indonesian AI Company",
    "Enterprise AI Platform",
  ],
);
