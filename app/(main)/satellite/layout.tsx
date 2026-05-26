import { generateMetadata } from "@/app/config/sharedMetadata";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Vision AI for Space-Edge Satellite | Nodeflux",
  "Nodeflux Vision AI for Space-Edge Satellite: on-orbit inference for sovereign maritime, border, disaster, and environmental intelligence.",
  [
    "Space-Edge Satellite",
    "Vision AI Satellite",
    "On-Orbit Inference",
    "SAR AI",
    "Synthetic Aperture Radar",
    "Satellite AI",
    "Maritime Surveillance",
    "Dark Vessel Detection",
    "Space Computing",
    "Orbital AI",
    "Sovereign Intelligence",
    "Indonesian Satellite",
    "Nodeflux Satellite",
  ],
);

export default function SatelliteLayout({
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
              name: "Vision AI for Space-Edge Satellite",
              description:
                "On-orbit inference platform bridging terrestrial sensors and orbital telemetry to deliver decision-ready intelligence — directly from orbit, in minutes, not days.",
              url: "/satellite",
              image: "/satellite/satellite_earth_background.png",
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
              { name: "Satellite", url: "/satellite" },
            ]),
          ),
        }}
      />
      {children}
    </>
  );
}
