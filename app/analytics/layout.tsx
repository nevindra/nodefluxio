import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Products",
	"Discover Nodeflux's state-of-the-art AI video analytics capabilities, offering real-time insights, behavior analysis, object detection, and more for smarter, more effective video surveillance and security management.",
	[
		"AI video analytics",
		"intelligent surveillance",
		"real-time video analysis",
		"behavior detection",
		"object recognition",
		"security management",
		"computer vision analytics",
		"video intelligence",
		"smart city solutions",
		"Nodeflux AI",
        "Generative AI",
        "Face Recognition",
        "People Analytics",
        "Vehicle Analytics",
	],
);

export default function AnalyticsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
