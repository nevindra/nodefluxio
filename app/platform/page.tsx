"use client";

import Hero from "@/components/hero/Hero";
import Stream from "@/components/platform/stream";


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
	return (
		<main>
			<Hero data={heroData} />
			<section className="py-8 w-[85%] mx-auto mt-4">
				<h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
					Unifed Stream Platform
				</h1>
                <Stream />
			</section>
		</main>
	);
}
