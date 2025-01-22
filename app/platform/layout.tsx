import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"VisionAIre Platform - Enterprise Computer Vision Infrastructure | Nodeflux",
	"Power your enterprise with VisionAIre Platform - a scalable computer vision infrastructure for real-time video processing, AI inference, and analytics. Built for enterprise-grade performance.",
	[
		"enterprise computer vision",
		"AI infrastructure platform",
		"video processing engine",
		"real-time AI inference",
		"distributed processing architecture",
		"enterprise video analytics",
		"computer vision deployment",
		"AI model management",
		"video streaming infrastructure",
		"enterprise AI platform",
	],
);

export default function PlatformLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
