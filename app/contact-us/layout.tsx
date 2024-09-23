import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Contact Us",
	"Nodeflux's massive surveillance solutions empower law enforcement and military operations with advanced AI analytics for drones, body-worn cameras, and extensive CCTV networks.",
	[
		"contact Nodeflux",
		"AI video analytics consultation",
		"schedule demo",
		"video analytics inquiry",
		"Nodeflux support",
		"AI solutions contact",
		"video surveillance experts",
		"custom AI solutions",
		"Nodeflux partnership",
		"intelligent video analytics support",
	],
);

export default function ContactUsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
