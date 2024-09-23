import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
	"Nodeflux | Smart Retail Solutions",
	"Revolutionize your retail operations with Nodeflux's smart retail solutions, providing AI-driven insights on customer behavior, store performance, and inventory management.",
	[
		"smart retail analytics",
        "retail video analytics",
		"retail intelligence",
		"customer behavior analysis",
		"store performance optimization",
		"inventory management",
		"queue management",
		"heat mapping",
		"footfall analysis",
		"loss prevention",
		"Nodeflux for retail",
	],
);

export default function SmartRetailLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
