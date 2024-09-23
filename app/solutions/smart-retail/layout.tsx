import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Smart City Solutions",
	"Build safer, more efficient urban environments with Nodeflux's smart city solutions, integrating AI video analytics for traffic management, public safety, and urban planning.",
	[
		"smart city systems",
		"urban AI solutions",
		"traffic management",
		"public safety enhancement",
		"urban planning tools",
		"smart infrastructure",
		"city-wide surveillance",
		"environmental monitoring",
		"crowd management",
		"Nodeflux for smart cities",
	],
);

export default function SmartRetailLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
