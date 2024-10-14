"use client";

import Hero from "@/components/hero/Hero";
import Stream from "@/components/platform/stream";
import {
	Card,
	CardDescription,
	CardHeader
} from "@/components/ui/card";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Platform() {
	const heroData = {
		title: "VisionAIre Platform",
		image: "/products-hero.webp",
		description:
			"The robust foundation of the VisionAIre ecosystem, offering unparalleled flexibility and integration capabilities to power your computer vision applications across diverse industries.",
		features: [
			"Scalable architecture to support growing operations",
			"API-first design for seamless third-party integrations",
			"Extensive library of pre-built computer vision models",
		],
	};

	const features = [
		{
			title: "Centralized Processing Hub",
			description:
				"Consolidates inference processing, database management, and encode-decode streaming into a single, cohesive platform, optimizing resource utilization and simplifying system architecture.",
			link: "/",
		},
		{
			title: "Versatile Input Integration",
			description:
				"Seamlessly incorporates data from diverse sources such as traditional security cameras, body-worn cameras, drones, and other video capture devices, ensuring comprehensive coverage and flexibility.",
			link: "/",
		},
		{
			title: "Advanced Inference Capabilities",
			description:
				"Employs cutting-edge artificial intelligence algorithms to perform real-time analysis on video streams, enabling rapid decision-making and actionable insights.",
			link: "/",
		},
		{
			title: "Efficient Encode-Decode Streaming",
			description:
				"Utilizes state-of-the-art encoding and decoding technologies to optimize video transmission and storage, ensuring high-quality video delivery while minimizing bandwidth and storage requirements.",
			link: "/",
		},
		{
			title: "Scalable Database Architecture",
			description:
				"Features a robust database system capable of handling large volumes of video data and metadata, facilitating efficient storage, retrieval, and management of information.",
			link: "/",
		},
		{
			title: "Unified Analytics Dashboard",
			description:
				"Provides a comprehensive analytics interface that aggregates data from multiple sources, offering in-depth insights and facilitating data-driven decision-making processes.",
			link: "/",
		},
	];

	return (
		<main>
			<Hero data={heroData} />
			<section className="py-8 w-[85%] mx-auto mt-4">
				<h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
					Unifed VisionAIre Stream Platform
				</h1>
				<Stream />
				<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
							Our VisionAIre Stream Platform
						</h2>
				<Card className="mt-8">
					<CardHeader>
						<CardDescription className="text-sm md:text-base text-black text-center">
							The VisionAIre Platform is an advanced, integrated solution
							designed to streamline and enhance video processing and analysis
							workflows. This comprehensive system serves as a centralized hub
							for managing various aspects of video data handling, including
							inference processing, database management, and encode-decode
							streaming. By consolidating these critical functions, VisionAIre
							Platform offers a robust and efficient framework for organizations
							seeking to leverage the power of video analytics and artificial
							intelligence in their operations.
						</CardDescription>
					</CardHeader>
				</Card>
				<HoverEffect items={features} className="" />
			</section>
		</main>
	);
}
