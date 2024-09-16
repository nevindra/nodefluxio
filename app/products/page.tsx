import Hero from "@/components/hero/Hero";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faq } from "@/data/faq";
import { CheckCircle2 } from "lucide-react";
export default function Products() {
	const data = [
		{
			title: "Dashboard",
			itemTitle: "VisionAIre Smart Dashboard",
			description:
				"A comprehensive, user-friendly interface that provides real-time insights and seamless control over your VisionAIre ecosystem, empowering data-driven decision-making.",
			features: [
				"Customizable widgets for at-a-glance system status",
				"Interactive data visualizations for deep insights",
				"Role-based access control for enhanced security",
			],
		},
		{
			title: "Analytics",
			itemTitle: "VisionAIre Analytics",
			description:
				"Advanced AI-powered analytics tool that transforms raw visual data into actionable intelligence, unlocking hidden patterns and optimizing your computer vision operations.",
			features: [
				"Predictive analytics for proactive decision-making",
				"Anomaly detection to identify unusual patterns",
				"Custom report generation for stakeholder communication",
			],
		},
		{
			title: "Platform",
			itemTitle: "VisionAIre Platform",
			description:
				"The robust foundation of the VisionAIre ecosystem, offering unparalleled flexibility and integration capabilities to power your computer vision applications across diverse industries.",
			features: [
				"Scalable architecture to support growing operations",
				"API-first design for seamless third-party integrations",
				"Extensive library of pre-built computer vision models",
			],
		},
		{
			title: "Hardware",
			itemTitle: "VisionAIre Hardware",
			description:
				"Purpose-built, high-performance devices designed to maximize the potential of the VisionAIre platform, ensuring optimal processing and reliability for demanding vision AI tasks.",
			features: [
				"Edge computing capabilities for real-time processing",
				"Ruggedized design for harsh environments",
				"Modular components for easy upgrades and maintenance",
			],
		},
		{
			title: "Stream Compression",
			itemTitle: "VisionAIre Stream Compression",
			description:
				"Cutting-edge compression technology that optimizes bandwidth usage without compromising video quality, enabling efficient transmission and storage of visual data across your VisionAIre network.",
			features: [
				"Adaptive bitrate streaming for optimal performance",
				"AI-enhanced compression algorithms for superior quality",
				"Multi-format support for versatile deployment options",
			],
		},
	];
	const heroData = {
		title: "Nodeflux Products",
		description:
			"Monitor and take action with your video analytics data in real-time to improve your business operations",
		image: "/products-hero.webp",
		features: [
			"Monitor and take action with VisionAIre Dashboard",
			"Gather data with VisionAIre Analytics",
			"Stream data with VisionAIre Stream Compression",
			"Integrate with VisionAIre Platform",
			"Customize with VisionAIre Hardware",
		],
	}
	return (
		<main>
			<Hero data={heroData} />
			<section className="relative py-8 w-[85%] mx-auto mt-4">
				<div className="container mx-auto px-4 space-y-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
						VisionAIre Products
					</h1>
					<Tabs defaultValue={data[0].title}>
						<div className="overflow-x-auto">
							<TabsList className="flex items-center mb-4 min-w-max">
								{data.map((item, index) => (
									<TabsTrigger
										key={index}
										value={item.title}
										className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white"
									>
										{item.title}
									</TabsTrigger>
								))}
							</TabsList>
						</div>
						{data.map((item, index) => (
							<TabsContent key={index} value={item.title}>
								<Card className="text-center">
									<CardHeader>
										<CardTitle>
											<p className="text-2xl md:text-3xl font-bold mb-6">
												{item.itemTitle}
											</p>
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="mb-6">{item.description}</p>
										<ul className="space-y-4 mb-8 inline-block text-left">
											{item.features.map((feature, featureIndex) => (
												<li
													key={featureIndex}
													className="flex items-center space-x-3"
												>
													<CheckCircle2 className="text-green-500 flex-shrink-0" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>
			<section className="py-12">
				<div className="container w-[85%] mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">
						Frequently Asked Questions
					</h2>
					<Accordion type="single" collapsible>
						{faq.map((item, index) => (
							<AccordionItem key={index} value={item.question}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
							))}
					</Accordion>
				</div>
			</section>
		</main>
	);
}
