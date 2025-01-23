import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function PeopleBehavior() {
	const PeopleBehavior = [
		{
			title: "Person Smoking Detection",
			descriptions:
				"Person Smoking Detection by Nodeflux detects individuals smoking in restricted or no-smoking areas. This solution helps organizations enforce smoking policies and ensure compliance in environments such as offices, public buildings, or transportation hubs.",
			features: [
				"Real-time detection of prohibited smoking activities",
				"Customizable Alerts for Prohibited Areas",
				"Supports Integration with Existing Monitoring Systems",
			],
			thumbnail: "/products-page/person-smoking.webp",
			tags: ["New SKU", "Object Detection"],
			videosUrl:
				"https://drive.google.com/file/d/1MHk61R5ZAtaasOQix4uY3loLCm1rltPB/view?usp=drive_link",
		},
		{
			title: "Person Playing Handphone Detection",
			descriptions:
				"Nodeflux Person Playing Handphone Detection automatically monitors for mobile phone usage in restricted areas, enhancing safety in environments like industrial sites, driving scenarios, or secure zones where distractions are dangerous or prohibited.",
			features: [
				"Accurate Detection of Phone Use",
				"Real-Time Monitoring in Restricted Areas",
				"Customizable Notifications and Alerts",
			],
			thumbnail: "/products-page/person-playing-handphone.webp",
			tags: ["New SKU", "Object Detection"],
			videosUrl:
				"https://drive.google.com/file/d/19KpTDiFxI2b7F0dBlfn88v2sZ4rs8uXX/view?usp=drive_link",
		},
	];

	return (
		<>
			<div className="mt-6">
				<div className="flex flex-col items-center justify-center py-4">
					<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						People Behavior Analytics
					</h2>
					<p className="text-center text-base md:text-lg">
						Elevate your understanding of human actions and interactions with
						Nodeflux VisionAIre Analytics' innovative People Behavior Analytics.
						This suite offers unprecedented insights into specific behaviors,
						enabling proactive management and improved policy enforcement.
					</p>
				</div>
				<Tabs
					defaultValue={PeopleBehavior[0].title
						.toLowerCase()
						.replace(/\s+/g, "-")}
				>
					<div className="overflow-x-auto">
						<TabsList className="flex items-center mb-4 min-w-max">
							{PeopleBehavior.map((item, index) => (
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
					{PeopleBehavior.map((item, index) => (
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
