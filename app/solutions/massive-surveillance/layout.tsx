import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Advanced Military & Law Enforcement Surveillance System | Nodeflux",
	"Enterprise-grade surveillance system for military and law enforcement. Featuring AI-powered facial recognition, tactical body cameras, drone integration, and real-time threat detection for mission-critical operations.",
	[
		"nodeflux",
		"military surveillance system",
		"law enforcement surveillance",
		"tactical body cameras",
		"drone surveillance system",
		"AI facial recognition",
		"real-time threat detection",
		"command center software",
		"military security solutions",
		"tactical surveillance",
		"integrated CCTV system",
		"security operations center",
		"mission-critical surveillance",
		"military-grade analytics",
		"force protection systems"
	],
);

export default function MassiveSurveillanceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
