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

export default function SmartRetail() {
	const listUseCases = [
		{
			name: "Customer Journey Mapping",
			description:
				"Utilize advanced AI analytics to track and analyze customer movements, interactions, and behaviors within retail spaces for optimized store layouts and personalized experiences.",
			relevantAnalytics: ["People Analytics", "Face Recognition"],
			benefits: [
				"Optimized store layouts based on customer behavior patterns",
				"Personalized shopping experiences for returning customers",
				"Data-driven merchandising and product placement strategies",
			],
		},
		{
			name: "Queue Management",
			description:
				"Implement an AI-powered system to monitor and manage queues, optimizing staffing and improving customer satisfaction.",
			relevantAnalytics: ["People Analytics", "Crowd Estimation"],
			benefits: [
				"Reduced wait times and improved customer satisfaction",
				"Optimized staff allocation based on real-time demand",
				"Enhanced operational efficiency during peak hours",
			],
		},
		{
			name: "VIP or Blacklisted Management",
			description:
				"Deploy a facial recognition system to identify VIP customers for enhanced service or detect blacklisted individuals for security purposes.",
			relevantAnalytics: [
				"Face Recognition",
				"Face Searching and Matching API",
			],
			benefits: [
				"Enhanced personalized service for VIP customers",
				"Improved store security and loss prevention",
				"Quick alert system for staff to respond appropriately to different customer types",
			],
		},
	];

	const benefits = [
		"Data-driven decision making for retail strategy and operations",
		"Enhanced customer experience leading to increased loyalty and sales",
		"Improved operational efficiency and resource allocation",
		"Competitive advantage through advanced retail analytics and insights",
	];

	return (
		<main className="bg-gray-50">
			<section className="py-12 md:py-20 bg-primary">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-white">
					<div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
							VisionAIre Smart Retail Solution
						</h1>
						<p className="mb-8 text-lg leading-relaxed">
							A cutting-edge retail analytics and security platform built on
							Nodeflux VisionAIre. This solution combines computer vision-based
							theft prevention with customer behavior insights, queue
							management, and foot traffic analysis to optimize store operations
							and security.
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
							src="/solutions/retail-solution.webp"
							alt="VisionAIre Analytics Topology"
							width={1920}
							height={1080}
							className="w-full mx-auto rounded-lg shadow-lg"
						/>
						<p className="text-xs italic text-center mt-2 text-gray-600">
							*Example topology for a massive surveillance use case
						</p>
					</div>
					<div className="text-center mb-12">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
							VisionAIre Smart Retail Solution Use Cases
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
								Benefits of VisionAIre Smart Retail Solution
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-lg mb-6 text-gray-700">
								VisionAIre Smart Retail Solution offers the following advantages:
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
