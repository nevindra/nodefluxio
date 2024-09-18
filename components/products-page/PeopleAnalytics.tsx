import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function PeopleAnalytics() {
	const PeopleAnalytics = [
		{
			title: "People Analytics",
			descriptions:
				"People Analytics by Nodeflux is an AI-driven solution designed to provide accurate detection, tracking, and analysis of people in video streams. It helps organizations monitor crowd behavior, track foot traffic, and gather insights for decision-making in real-time. This solution is useful in various environments, including smart cities, retail, and public spaces, enhancing both operational efficiency and security.",
			features: [
				"Enabler for Enrichment Attribute Data Insight",
				"Rich People Analytics Applications",
				"Multiple Counter Line and Detection Area",
			],
			videosUrl:
				"https://drive.google.com/file/d/1YTVcfuTqeYarTlZmSB4wl9aibCUZE56t/preview",
			tags: ["New SKU", "Object Detection", "Multiple Logic"],
			thumbnail: "/products-page/people-analytics.webp",
		},
		{
			title: "Crowd Estimation",
			descriptions:
				"Crowd Estimation by Nodeflux is an AI-powered solution designed to estimate the number of people in a specific area using video surveillance. This technology provides real-time data on crowd size and density, helping organizations manage large gatherings, optimize public safety, and make informed decisions in crowded environments.",
			features: [
				"Adjustable for Low and High Density Environment",
				"Capable to Estimate More Than 1000 People in Crowd",
				"Support with Multiple Point of View",
			],
			videosUrl:
				"https://drive.google.com/file/d/1yGDE5cKL4OnwuwVALSL2jTCvtEZ6uY29/preview",
			tags: ["Object Estimation"],
			thumbnail: "/products-page/crowd-estimation.webp",
		},
		{
			title: "Personal Protective Equipment Detection",
			descriptions:
				"Nodeflux Personal Protective Equipment (PPE) Detection ensures workplace safety by automatically identifying whether individuals are wearing the required safety gear, such as helmets, glasses, and vests. It is ideal for construction sites, factories, or other hazardous work environments where compliance with safety regulations is critical.",
			features: [
				"Flexible with full frame and counting logics",
				"Multiple Attribute Detection ",
				"Optional with Face Recognition module",
			],
			videosUrl:
				"https://drive.google.com/file/d/1mcr2_WqLtA4vPUAQHgw-jxCAL5ZqCRRF/preview",
			tags: ["New SKU", "Object Detection"],
			thumbnail: "/products-page/ppe-detection.webp",
		},
	];
	return (
		<>
			<div className="mt-6">
				<div className="flex flex-col items-center justify-center py-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						People Oriented Analytics
					</h1>
					<p className="text-center text-md md:text-lg">
						Transform your understanding of human behavior and movement patterns
						with Nodeflux VisionAIre Analytics' comprehensive People Oriented
						Analytics suite. This powerful collection of tools provides
						invaluable insights for crowd management, safety compliance, and
						operational optimization.
					</p>
				</div>
				<Tabs
					defaultValue={PeopleAnalytics[0].title
						.toLowerCase()
						.replace(/\s+/g, "-")}
				>
					<div className="overflow-x-auto">
						<TabsList className="flex items-center mb-4 min-w-max">
							{PeopleAnalytics.map((item, index) => (
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
					{PeopleAnalytics.map((item, index) => (
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
														<span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
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
