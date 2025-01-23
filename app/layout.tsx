import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...generateMetadata(
    "Nodeflux - Leading Indonesian Vision AI Company",
    "Nodeflux is an Indonesian artificial intelligence company specializing in vision AI, providing solutions for various industries and government sectors.",
    [
      "Vision AI",
      "Computer Vision",
      "Artificial Intelligence",
      "Indonesian AI",
      "AI Solutions",
    ]
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
          content="9Fm4cy1m85VZzqto2HwmE7qEC7O5YiZh1C5HNTijbys"
        />
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
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
