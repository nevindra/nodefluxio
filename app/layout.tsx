import { generateMetadata } from "@/app/config/sharedMetadata";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = generateMetadata(
	"Nodeflux",
	"Nodeflux is an Indonesian artificial intelligence company specializing in vision AI, providing solutions for various industries and government sectors, and recognized internationally for its technological advancements and security certifications.",
	[
		"Vision AI",
		"Computer Vision",
		"Artificial Intelligence",
		"Indonesian AI",
		"AI Solutions",
	],
);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta
				name="google-site-verification"
				content="YJevxjbOP3qnYa2wMu3sQaDoy7cxLdH3cdTnDwbcqQI"
			/>
			<body className={inter.className}>
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
