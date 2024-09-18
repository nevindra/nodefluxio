import Consolutation from "@/components/landing-page/Consolutation";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import visionaire from "@/public/products-hero.webp";
import { CheckCircle2, CheckCircleIcon } from "lucide-react";
import Image from "next/image";

export default function SmartCity() {
	const listUseCases = [
		{
			name: "Citizen Monitoring",
			description:
				"Implement an AI-driven system to monitor public spaces for citizen safety, emergency detection, and public service optimization.",
			relevantAnalytics: [
				"People Analytics",
				"Anomaly Detection",
				"Face Recognition",
			],
			benefits: [
				"Enhanced public safety through rapid incident detection",
				"Improved emergency response times",
				"Data-driven optimization of public services",
			],
		},
		{
			name: "Public Area Monitoring",
			description:
				"Deploy AI-powered surveillance in public areas to manage crowd safety, detect potential security threats, and ensure compliance with public regulations.",
			relevantAnalytics: [
				"Crowd Estimation",
				"People Fighting",
				"Anomaly Detection",
				"Personal Protective Equipment",
			],
			benefits: [
				"Proactive crowd management and safety enforcement",
				"Rapid detection and response to public disturbances",
				"Improved cleanliness and regulation compliance in public spaces",
			],
		},
		{
			name: "Traffic Monitoring",
			description:
				"Utilize AI analytics for comprehensive traffic monitoring, enabling real-time traffic management, incident detection, and long-term urban planning.",
			relevantAnalytics: [
				"Vehicle Analytics",
				"License Plate Recognition",
				"Anomaly Detection",
			],
			benefits: [
				"Real-time traffic flow optimization and congestion reduction",
				"Rapid incident detection and response on city roads",
				"Data-driven urban planning for improved city infrastructure",
			],
		},
	];

	const benefits = [
		"Enhanced public safety and security across the city",
		"Improved quality of life through optimized urban services",
		"Data-driven decision making for city management and development",
		"Increased operational efficiency in managing city resources and infrastructure",
	];

	return (
		<main className="bg-gray-50">
			<section className="py-12 md:py-20 bg-primary">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-white">
					<div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
							VisionAIre Smart City Solution
						</h1>
						<p className="mb-8 text-lg leading-relaxed">
							An advanced urban management system utilizing Nodeflux
							VisionAIre's computer vision technology. It enables city-wide
							surveillance, traffic monitoring, public safety analysis, and
							infrastructure management, creating safer and more efficient urban
							environments.
						</p>
						<ul className="mb-8 space-y-3">
							{listUseCases.map((useCase, index) => (
								<li key={index} className="flex items-center">
									<CheckCircleIcon size={20} className="mr-3 text-secondary" />
									<span className="text-lg">{useCase.name}</span>
								</li>
							))}
						</ul>
						<Button className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
							Schedule your consultation
						</Button>
					</div>
					<div className="w-full md:w-1/2 mt-8 md:mt-0">
						<Image
							src={visionaire}
							alt="VisionAIre Analytics"
							width={600}
							height={400}
							className="w-full h-auto rounded-lg shadow-2xl"
						/>
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto px-4 max-w-[85%]">
					<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
						Topology and Architecture
					</h2>
					<div className="mb-8">
						<Image
							src="/solutions/smart-city.webp"
							alt="VisionAIre Analytics Topology"
							width={1920}
							height={1080}
							className="w-full mx-auto rounded-lg shadow-lg"
						/>
						<p className="text-xs italic text-center mt-2 text-gray-600">
							*Example topology for a smart city solution use case
						</p>
					</div>
					<div className="text-center mb-12">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
							VisionAIre Smart City Solution Use Cases
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Monitor and act on real-time video analytics to enhance your
							operations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{listUseCases.map((useCase, index) => (
							<Card
								key={index}
								className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg"
							>
								<CardHeader>
									<h3 className="text-xl font-bold mb-2 text-primary">
										{useCase.name}
									</h3>
									<CardDescription className="text-gray-600">
										{useCase.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex flex-col flex-grow">
									<div className="mb-4">
										<p className="font-semibold mb-2 text-primary">
											Analytics Used:
										</p>
										<ul className="space-y-2">
											{useCase.relevantAnalytics.map((feature, index) => (
												<li key={index} className="flex items-center">
													<CheckCircle2 className="text-green-500 flex-shrink-0 w-5 h-5 mr-2" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
									<div>
										<p className="font-semibold mb-2 text-primary">Benefits:</p>
										<ul className="space-y-2">
											{useCase.benefits.map((benefit, index) => (
												<li key={index} className="flex items-start">
													<CheckCircleIcon className="text-green-500 flex-shrink-0 w-5 h-5 mr-2 mt-1" />
													<span>{benefit}</span>
												</li>
											))}
										</ul>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto px-4 max-w-[85%]">
					<Card className="shadow-xl">
						<CardHeader>
							<CardTitle className="text-2xl md:text-3xl font-bold text-primary">
								Benefits of VisionAIre Smart City Solution
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-lg mb-6 text-gray-700">
								VisionAIre Smart City Solution offers the following advantages:
							</p>
							<ul className="space-y-4">
								{benefits.map((benefit, index) => (
									<li key={index} className="flex items-start">
										<CheckCircleIcon
											size={24}
											className="text-green-500 mr-3 flex-shrink-0 mt-1"
										/>
										<span className="text-gray-800">{benefit}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className="py-16">
				<Consolutation />
			</section>
		</main>
	);
}
