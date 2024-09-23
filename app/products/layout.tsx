import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Products",
	"Explore Nodeflux's comprehensive suite of AI video analytics products, including intelligent dashboards, advanced analytics platforms, and cutting-edge surveillance solutions for enhanced security and operational efficiency.",
	[
		"Vision AI",
        "Video Analytics",
        "Indonesian Video Analytics",
        "Surveillance Systems",
		"Intelligent Surveillance Systems",
		"Artificial Intelligence",
		"Indonesian AI",
		"AI Solutions",
        "Indonesia Face Recognition",
        "Generative AI",
        "AI Platform",
        "Video Analytics Platform",
	],
);

export default function ProductsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
