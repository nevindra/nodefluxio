"use client";

import Hero from "@/components/hero/Hero";
import Stream from "@/components/platform/stream";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";

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
		},
		{
			title: "Versatile Input Integration",
			description:
				"Seamlessly incorporates data from diverse sources such as traditional security cameras, body-worn cameras, drones, and other video capture devices, ensuring comprehensive coverage and flexibility.",
		},
		{
			title: "Advanced Inference Capabilities",
			description:
				"Employs cutting-edge artificial intelligence algorithms to perform real-time analysis on video streams, enabling rapid decision-making and actionable insights.",
		},
		{
			title: "Efficient Encode-Decode Streaming",
			description:
				"Utilizes state-of-the-art encoding and decoding technologies to optimize video transmission and storage, ensuring high-quality video delivery while minimizing bandwidth and storage requirements.",
		},
		{
			title: "Scalable Database Architecture",
			description:
				"Features a robust database system capable of handling large volumes of video data and metadata, facilitating efficient storage, retrieval, and management of information.",
		},
		{
			title: "Unified Analytics Dashboard",
			description:
				"Provides a comprehensive analytics interface that aggregates data from multiple sources, offering in-depth insights and facilitating data-driven decision-making processes.",
		},
		{
			title: "Extensible Platform Design",
			description:
				"Supports integration with third-party applications and custom modules, allowing for tailored solutions that meet specific industry or organizational requirements.",
		},
		{
			title: "Cross-Industry Applicability",
			description:
				"Designed to cater to a wide range of sectors including security, retail, healthcare, and industrial applications, offering versatile deployment options across various use cases.",
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
				<Card className="mt-8">
					<CardHeader>
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
							Our VisionAIre Stream Platform
						</h2>
						<CardDescription className="text-sm md:text-base text-black text-justify">
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
					<CardContent>
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
							Key Features
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{features.map((feature, index) => (
								<div
									key={index}
									className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
								>
									<div className="flex items-center mb-3">
										<span className="w-3 h-3 bg-primary rounded-full mr-3 flex-shrink-0" />
										<h4 className="text-lg font-semibold text-primary">
											{feature.title}
										</h4>
									</div>
									<p className="text-sm text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
