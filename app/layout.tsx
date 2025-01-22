import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...generateMetadata(
    "Nodeflux",
    "Nodeflux is an Indonesian artificial intelligence company specializing in vision AI, providing solutions for various industries and government sectors, and recognized internationally for its technological advancements and security certifications.",
    [
      "Vision AI",
      "Computer Vision",
      "Artificial Intelligence",
      "Indonesian AI",
      "AI Solutions",
    ]
  ),
  alternates: {
    canonical: "https://www.nodeflux.io/",
  },
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Nodeflux",
            description: "Indonesian Vision AI Company",
            url: "https://www.nodeflux.io/",
            logo: "https://www.nodeflux.io/logo.png",
            sameAs: [
              "https://twitter.com/nodefluxio",
              "https://www.linkedin.com/company/nodeflux",
            ],
          })}
        </script>
      </head>
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
