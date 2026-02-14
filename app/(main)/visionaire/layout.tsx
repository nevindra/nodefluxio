import { generateMetadata } from "@/app/config/sharedMetadata";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Visionaire - AI Video Analytics Platform | Nodeflux",
  "AI video analytics with Face Recognition, License Plate Recognition, People Analytics, and Vehicle Detection for security and smart cities.",
  [
    "Visionaire",
    "AI Video Analytics",
    "Face Recognition System",
    "License Plate Recognition",
    "LPR System",
    "People Analytics",
    "People Counting",
    "Vehicle Detection",
    "ANPR System",
    "Crowd Detection",
    "PPE Detection",
    "Fire Detection AI",
    "Smoke Detection",
    "Real-time Video Analytics",
    "Computer Vision Platform",
    "Smart City Analytics",
    "Retail Analytics",
    "Parking Management AI",
    "Traffic Analytics",
    "Indonesian AI Analytics",
    "Nodeflux Visionaire",
  ],
);

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd({
              name: "Visionaire",
              description:
                "AI-powered video analytics platform with Face Recognition, License Plate Recognition (LPR), People Analytics, and Vehicle Detection for security, retail, parking, and smart city operations.",
              url: "/visionaire",
              image: "/landing-page/visionaire-core.webp",
              category: "BusinessApplication",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Visionaire", url: "/visionaire" },
            ]),
          ),
        }}
      />
      {children}
    </>
  );
}
