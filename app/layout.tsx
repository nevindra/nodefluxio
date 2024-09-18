import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "Nodeflux | %s",
		default: "Nodeflux | Computer Vision",
	},
	description:
		"Nodeflux is an Indonesian artificial intelligence company specializing in vision AI, providing solutions for various industries and government sectors, and recognized internationally for its technological advancements and security certifications.",
	icons: {
		icon: "favicon.ico",
		apple: "apple-icon.png",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.nodeflux.io/", // Replace with your actual URL
		siteName: "Nodeflux",
		title: "Nodeflux | Computer Vision",
		description: "Nodeflux - Leading Indonesian Vision AI Company",
		images: [
			{
				url: "/landing-page/visionaire-core.webp",
				width: 1200,
				height: 630,
				alt: "Nodeflux Vision AI",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@nodefluxio", // Replace with your actual Twitter handle
		creator: "@nodefluxio", // Replace with your actual Twitter handle
		title: "Nodeflux | Computer Vision",
		description: "Leading Indonesian Vision AI Company",
		images: ["/landing-page/visionaire-core.webp"],
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="google-site-verification" content="YJevxjbOP3qnYa2wMu3sQaDoy7cxLdH3cdTnDwbcqQI" />
			<body className={inter.className}>
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
