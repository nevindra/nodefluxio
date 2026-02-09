import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Contact Us - Get in Touch with Nodeflux AI Experts",
  "Contact Nodeflux for AI Video Analytics, Surveillance Intelligence, and LLM Agent solutions. Schedule a demo or explore partnership opportunities.",
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
