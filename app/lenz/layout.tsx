import { generateMetadata } from "@/app/config/sharedMetadata";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Lenz - AI-Powered Video Management System | Nodeflux",
  "Enterprise Video Management System unifying 1000+ cameras in one dashboard. AI-powered analysis, real-time alerts, and low-latency streaming.",
  [
    "Lenz",
    "Video Management System",
    "VMS",
    "AI Video Analytics",
    "Camera Management Platform",
    "Surveillance Dashboard",
    "Enterprise VMS",
    "Real-time Video Monitoring",
    "Smart City Surveillance",
    "CCTV Management Software",
    "Multi-camera Dashboard",
    "Video Surveillance Platform",
    "AI Object Detection",
    "Security Operations Center",
    "On-premise Video Management",
    "Hybrid Cloud VMS",
    "Indonesian VMS",
    "Nodeflux Lenz",
  ],
);

export default function DashboardLayout({
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
              name: "Lenz",
              description:
                "Enterprise Video Management System (VMS) that unifies 1000+ cameras in one dashboard with AI-powered analysis, real-time alerts, and low-latency streaming for smart city and security operations.",
              url: "/lenz",
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
              { name: "Lenz", url: "/lenz" },
            ]),
          ),
        }}
      />
      {children}
    </>
  );
}
