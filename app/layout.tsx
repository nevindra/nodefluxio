import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nodeflux | Computer Vision",
	description:
		"Nodeflux is a Indonesian company that provides cutting-edge solutions for computer vision.",
	icons: {
		icon: "/public/favicon.ico",
		apple: "/public/apple-icon.png",
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
