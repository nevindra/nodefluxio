import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Lenz - AI-Powered Video Management System | Nodeflux",
  "Lenz is an enterprise Video Management System (VMS) that unifies 1000+ cameras in one dashboard. AI-powered analysis, real-time alerts, and <100ms streaming latency for smart city and security operations.",
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
  return <>{children}</>;
}
