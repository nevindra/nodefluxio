import type { Metadata } from "next";

export function generateMetadata(
	title: string,
	description: string,
	keywords: string[],
): Metadata {
	return {
		title: {
			template: "%s",
			default: title,
		},
		description,
		keywords,
		openGraph: {
			type: "website",
			locale: "en_US",
			url: "https://www.nodeflux.io/",
			siteName: "Nodeflux",
			title,
			description,
			images: [
				{
					url: "/landing-page/visionaire-core.webp",
					width: 1200,
					height: 630,
					alt: "Nodeflux Vision AI",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			site: "@nodefluxio",
			creator: "@nodefluxio",
			images: ["/landing-page/visionaire-core.webp"],
			title,
			description,
		},
	};
}

export const defaultMetadata = generateMetadata(
	"Computer Vision",
	"Nodeflux - Leading Indonesian Vision AI Company specializing in computer vision solutions for various industries and government sectors.",
	[
		"Vision AI",
		"Computer Vision",
		"Artificial Intelligence",
		"Indonesian AI",
		"AI Solutions",
	],
);
