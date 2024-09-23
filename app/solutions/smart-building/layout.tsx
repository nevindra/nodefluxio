import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Integrated Smart Building Solutions",
	"Transform your property with Nodeflux's integrated smart building solutions, leveraging AI video analytics for enhanced security, energy efficiency, and occupant comfort.",
	[
		"smart building integration",
		"AI-powered building management",
		"intelligent security systems",
        "building security system",
        "building surveillance",
		"smart access control",
		"building automation",
		"predictive maintenance",
		"workspace optimization",
		"Nodeflux for smart buildings",
	],
);

export default function SmartBuildingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
