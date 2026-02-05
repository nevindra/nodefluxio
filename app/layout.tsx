import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OperationalGrid from "@/components/OperationalGrid";
import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...generateMetadata(
    "Nodeflux - AI Company for Video Surveillance & Intelligent Agents",
    "Nodeflux is Indonesia's leading AI company building Video Surveillance Intelligence and LLM-powered AI Agents. Enterprise solutions for smart cities, public safety, and security operations.",
    [
      "Video Surveillance AI",
      "LLM Agent",
      "AI Agent",
      "Agentic AI",
      "Vision AI",
      "Computer Vision",
      "Surveillance Intelligence",
      "CCTV Analytics",
      "Smart City AI",
      "Public Safety AI",
      "Indonesian AI Company",
      "Enterprise AI Platform",
      "Video Analytics",
      "Face Recognition",
      "Visionaire",
      "Lenz",
    ],
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="YJevxjbOP3qnYa2wMu3sQaDoy7cxLdH3cdTnDwbcqQI"
        />
        <meta
          name="google-site-verification"
          content="8SnxIePEB-VC_C7XKtNeeYOFuxTN3ee62wLS63nAcl4"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXB0ZPP5V1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXB0ZPP5V1');
          `}
        </Script>
      </head>
      <body className={jakartaSans.className}>
        <SmoothScroll>
          <OperationalGrid />
          <ScrollProgress />
          <NavigationBar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
