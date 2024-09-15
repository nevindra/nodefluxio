import ParticlesBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

type HeroData = {
    title: string;
    description: string;
    image: string;
    features: string[];
};

export default function Hero({ data }: { data: HeroData }) {
    return (
        <>
        <Script
				src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
				strategy="beforeInteractive"
			/>
			<section
				className="py-4 md:py-8 bg-primary bg-opacity-100 bg-blend-overlay bg-cover bg-center overflow-hidden"
				style={{
					backgroundColor: "#4c12a1",
				}}
			>
				<ParticlesBackground />
				<div className="container px-4 flex flex-col md:flex-row items-center relative text-white">
					<div className="w-full md:w-1/2 px-4 md:px-8 mb-8 md:mb-0">
						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							{data.title}
						</h1>
						<p className="mb-6">
							{data.description}
						</p>
						<ul className="mb-6">
							{data.features.map((feature, index) => (
								<li key={index} className="flex items-center mb-2">
									<CheckCircle2 className="text-green-500 mr-2" />
									{feature}
								</li>
							))}
						</ul>
						<Button className="bg-secondary text-primary px-6 py-3 rounded-md">
							Schedule your consultation
						</Button>
					</div>
					<div className="w-full md:w-1/2">
						<Image
							src={data.image}
							alt="VisionAIre Analytics"
							width={600}
							height={400}
							className="w-full h-auto"
						/>
					</div>
				</div>
			</section>
        </>
    );
}