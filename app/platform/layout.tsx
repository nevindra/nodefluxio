import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Platform",
	"Discover Nodeflux's VisionAIre Stream Platform, an integrated solution for streamlining video processing and analysis workflows. Centralize inference processing, database management, and encode-decode streaming for powerful AI-driven video analytics.",
	[
		"VisionAIre Stream Platform",
		"integrated video processing",
		"AI video analysis workflow",
		"centralized processing hub",
		"inference processing",
		"video database management",
		"encode-decode streaming",
		"advanced inference capabilities",
		"scalable video analytics",
		"cross-industry AI platform",
	],
);

export default function PlatformLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
