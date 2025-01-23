import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function Environments() {
	const environments = [
		{
			title: "Pre-Flood Monitoring",
			descriptions:
				"Nodeflux Pre-Flood Monitoring analyzes environmental factors and provides early warnings of potential flooding. By monitoring water levels and weather conditions, it helps authorities and property managers mitigate risks and prepare for possible floods, improving disaster response and public safety.",
			features: [
				"Real-Time Monitoring of Water Levels",
				"Predictive Analytics for Early Warning",
				"Seamless Integration with Disaster Management Systems",
			],
			videosUrl:
				"https://drive.google.com/file/d/1cbIu-paO6HPEsLohvtUvngHcckTzxoC7/preview",
			tags: ["New SKU", "VisionLLM"],
			thumbnail: "/products-page/pre-flood.webp",
		},
		{
			title: "Water Level Monitoring",
			descriptions:
				"Water Level Monitoring by Nodeflux provides continuous tracking of water levels in rivers, reservoirs, or flood-prone areas. It offers real-time data and customizable alerts when water levels exceed predefined thresholds, aiding in flood prevention efforts and resource management.",
			features: [
				"Capability to define multiple levels of interest within a frame.",
				"Rich visual reports for water trends over time",
				"Fostering the Growth of Your Application Ecosystem",
			],
			videosUrl:
				"https://drive.google.com/file/d/1oMWV5j4z_O3ZStXL5mdVxZ3fQdLBxi2m/preview",
			thumbnail: "/products-page/wlm.webp",
			tags: ["New SKU", "Segmentation"],
		},
		{
			title: "Smoke and Fire Detection",
			descriptions:
				"Nodeflux Smoke and Fire Detection solution identifies signs of fire hazards in real-time by detecting smoke and flames in video feeds. It offers rapid alert capabilities to help prevent disasters, making it an essential tool for industrial, commercial, or residential buildings.",
			features: [
				"Accurate detection of smoke and flames in diverse environments",
				"Early-stage alerting system for rapid disaster mitigation",
				"Supports Integration with Fire Response Systems",
			],
			videosUrl:
				"https://drive.google.com/file/d/1LEyd8jbZSczXt0SOI1j_buUlFlON00V1/preview",
			thumbnail: "/products-page/smoke-fire.webp",
			tags: ["New SKU", "Object Detection"],
		},
	];

	return (
		<>
			<div className="container mx-auto px-4 mt-2">
				<div className="flex flex-col items-center justify-center py-4">
					<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						Environment Analytics
					</h2>
					<p className="text-center text-md md:text-lg">
						Harness the power of AI to monitor and protect our environment with
						Nodeflux VisionAIre Analytics' innovative Environment Analytics
						suite. This collection of tools provides critical insights for
						disaster prevention, resource management, and safety enhancement.
					</p>
				</div>
				<Tabs
					defaultValue={environments[0].title
						.toLowerCase()
						.replace(/\s+/g, "-")}
				>
					<div className="overflow-x-auto">
						<TabsList className="flex items-center mb-4 min-w-max">
							{environments.map((item, index) => (
								<TabsTrigger
									key={index}
									value={item.title.toLowerCase().replace(/\s+/g, "-")}
									className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white"
								>
									{item.title}
								</TabsTrigger>
							))}
						</TabsList>
					</div>
					{environments.map((item, index) => (
						<TabsContent
							key={index}
							value={item.title.toLowerCase().replace(/\s+/g, "-")}
						>
							<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
								<div className="order-2 md:order-1">
									<Card className="h-full">
										<CardHeader>
											<CardTitle className="text-xl md:text-2xl">
												{item.title}
											</CardTitle>
											<div>
												{item.tags.map((tag, tagIndex) => (
													<Badge key={tagIndex} className="mr-2">
														{tag}
													</Badge>
												))}
											</div>
										</CardHeader>
										<CardContent>
											<p className="text-justify text-sm">
												{item.descriptions}
											</p>
											<br />
											<ul className="mb-6 text-sm">
												{item.features.map((feature, featureIndex) => (
													<li
														key={featureIndex}
														className="flex items-center mb-2"
													>
														<span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
														<span>{feature}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</div>
								{item.videosUrl && (
									<div className="relative h-full order-1 md:order-2">
										<HeroVideoDialog
											className="dark:hidden block"
											animationStyle="top-in-bottom-out"
											videoSrc={item.videosUrl}
											thumbnailAlt={item.title}
											thumbnailSrc={item.thumbnail}
										/>
									</div>
								)}
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</>
	);
}
