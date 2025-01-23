import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"VisionAIre Analytics - Advanced AI Video Analytics Solutions | Nodeflux",
	"Transform your business with Nodeflux's enterprise AI video analytics. From facial recognition to behavior analysis, our real-time analytics deliver actionable insights for security, retail, and smart cities.",
	[
		"nodeflux",
		"AI video analytics platform",
		"facial recognition system",
		"behavior analytics software",
		"people counting analytics",
		"vehicle recognition system",
		"anomaly detection AI",
		"real-time video analytics",
		"enterprise analytics solution",
		"computer vision analytics",
		"smart city analytics",
		"retail analytics platform",
		"security analytics system",
		"crowd analytics software",
		"traffic analysis AI"
	],
);

export default function AnalyticsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
