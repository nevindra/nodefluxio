import type { Metadata } from "next";

export function generateMetadata(
	title: string,
	description: string,
	keywords: string[],
): Metadata {
	return {
		metadataBase: new URL(process.env.SITE_URL || 'https://www.nodeflux.io'),
		title: {
			template: "%s",
			default: title,
		},
		description,
		keywords,
		alternates: {
		  canonical: './',
		},
		openGraph: {
			type: "website",
			locale: "en_US",
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
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
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
