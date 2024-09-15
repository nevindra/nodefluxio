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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
