import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Massive Security Surveillance Solutions",
	"Nodeflux's massive surveillance solutions empower law enforcement and military operations with advanced AI analytics for drones, body-worn cameras, and extensive CCTV networks.",
	[
		"massive surveillance",
		"law enforcement technology",
		"military surveillance",
		"drone analytics",
		"bodycam integration",
		"CCTV networks",
		"AI-powered security",
		"real-time threat detection",
		"large-scale video analysis",
		"Nodeflux for public safety",
	],
);

export default function MassiveSurveillanceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
