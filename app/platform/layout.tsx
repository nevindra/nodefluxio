import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "VisionAIre Platform - Enterprise AI Video Analytics Platform | Nodeflux",
  "Indonesia's trusted AI video analytics platform for security. Scalable infrastructure for surveillance, smart cities & retail analytics.",
  [
    "nodeflux",
    "Indonesian AI platform",
    "Government surveillance platform",
    "Smart city infrastructure",
    "Enterprise security platform",
    "Video analytics system",
    "Surveillance infrastructure",
    "AI security platform",
    "Government video analytics",
    "Smart retail analytics",
    "Indonesian tech solution",
  ]
);

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
