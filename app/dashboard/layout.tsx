import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Dashboard",
	"Explore the features of Nodeflux's powerful dashboard, offering real-time insights, customizable analytics, and intuitive controls for managing your AI-powered video surveillance and analytics system.",
	[
		"Nodeflux dashboard",
		"AI video analytics interface",
		"real-time surveillance monitoring",
		"customizable analytics dashboard",
		"video data visualization",
		"intelligent alert system",
		"user-friendly analytics controls",
		"video surveillance management",
		"data-driven security insights",
		"AI-powered monitoring platform",
	],
);

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
