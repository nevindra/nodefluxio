import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "VisionAIre Dashboard - Security Command Center | Nodeflux",
  "Advanced security command center for real-time surveillance monitoring. Trusted by Indonesian government & enterprises for smart city and security operations.",
  [
    "security command center",
    "surveillance dashboard",
    "smart city monitoring",
    "security operations center",
    "real-time threat detection",
    "government security system",
    "enterprise surveillance",
    "Indonesian security platform",
    "video analytics dashboard",
    "security monitoring system",
  ]
);

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
