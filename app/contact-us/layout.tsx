import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Contact Us - Get in Touch with Nodeflux AI Experts | Nodeflux",
  "Contact Nodeflux for AI Video Analytics, Surveillance Intelligence, and Enterprise LLM Agent solutions. Schedule a demo, request a consultation, or explore partnership opportunities with Indonesia's leading AI company.",
  [
    "Contact Nodeflux",
    "AI Consultation",
    "Schedule Demo",
    "Video Analytics Demo",
    "Nodeflux Partnership",
    "AI Solutions Inquiry",
    "Enterprise AI Contact",
    "Surveillance AI Consultation",
    "Smart City AI Demo",
    "Indonesian AI Company Contact",
    "Nodeflux Support",
    "Custom AI Solutions",
  ],
);

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
