import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Nodeflux | Enterprise AI Video Analytics Solutions",
  "Leading Indonesian AI video analytics for government & enterprise security, smart city, and retail. Trusted by institutions for surveillance and analytics.",
  [
    "nodeflux",
    "Enterprise Video Analytics",
    "Government Surveillance Systems",
    "Smart City Indonesia",
    "Smart Retail Analytics",
    "Indonesian AI Company",
    "Security Video Analytics",
    "Face Recognition Indonesia",
    "Video Analytics Platform",
    "AI Surveillance System",
    "CCTV Analytics",
    "Intelligent Video Analytics",
    "B2G Solutions Indonesia",
  ]
);

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
