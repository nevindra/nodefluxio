import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Visionaire - AI Video Analytics for Face, Vehicle & People Detection | Nodeflux",
  "Visionaire is an AI-powered video analytics platform with Face Recognition, License Plate Recognition (LPR), People Analytics, and Vehicle Detection. Real-time insights for security, retail, parking, and smart city operations.",
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
  return <>{children}</>;
}
