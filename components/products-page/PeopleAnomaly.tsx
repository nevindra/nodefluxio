import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function PeopleAnomaly() {
	const PeopleAnomaly = [
		{
			title: "Person Shooting Detection",
			descriptions:
				"Person Using Firearms Detection by Nodeflux enhances security in high-risk areas by detecting individuals holding or using firearms. This solution enables rapid response by security personnel and is particularly useful for critical infrastructures such as airports, government buildings, or public spaces.",
			features: [
				"Immediate Detection of Firearms",
				"Customizable Alert System for Threat Response",
				"Real-Time Integration with Security Systems",
			],
			videosUrl:
				"https://drive.google.com/file/d/14HGrcmPyY_x8qPXecOqGzP4I19VDpOUl/preview",
			tags: ["New SKU", "Object Detection"],
			thumbnail: "/products-page/person-shooting.webp",
		},
		{
			title: "People Fighting/Riots Detection",
			descriptions:
				"Nodeflux People Fighting/Riots Recognition monitors for signs of physical confrontations or riots within crowds. By detecting aggressive behavior or sudden movements, it allows authorities to intervene quickly, preventing escalation and maintaining public safety.",
			features: [
				"Real-time analysis of violent or aggressive behavior",
				"Scalable system for monitoring large crowds",
				"Custom Alerts for Quick Response",
			],
			videosUrl:
				"https://drive.google.com/file/d/1xb-gvFFhRPJPWj7gRZUrdlr58Kg11FL4/preview",
			tags: ["New SKU", "Vision LLM", "In Depth Analysis"],
			thumbnail: "/products-page/people-fighting.webp",
		},
		{
			title: "ATM Burglary Detection",
			descriptions:
				"Nodeflux ATM Burglary Incident Recognition detects suspicious activity around ATMs, such as tampering or burglary attempts. It is designed to enhance the security of banking systems and prevent financial crimes by alerting authorities in real-time.",
			features: [
				"Tamper detection specific to ATM systems",
				"Real-time alerts for burglary attempts",
				"Full integration with existing bank security infrastructures",
			],
			videosUrl:
				"https://drive.google.com/file/d/1ySrj7EaVYubWTQm1zj8_js2MrF0jKbCP/preview",
			tags: ["New SKU", "Vision LLM", "In Depth Analysis"],
			thumbnail: "/products-page/atm-burglary.webp",
		},
		{
			title: "Vandalism Detection",
			descriptions:
				"Vandalism Attempt Recognition by Nodeflux detects attempts to damage property or engage in vandalism in public or private areas. It supports real-time alerts and video evidence collection, helping to maintain order and reduce property damage.",
			features: [
				"Early-stage detection of suspicious behavior",
				"Detailed event logging for forensic analysis",
				"Scalable to public and private property monitoring",
			],
			videosUrl:
				"https://drive.google.com/file/d/1M7KcGS9OL9cysCeSQSqScXjouhnjvb0u/preview",
			tags: ["New SKU", "Vision LLM", "In Depth Analysis"],
			thumbnail: "/products-page/vandalism-detection.webp",
		},
	];

	return (
		<>
			<div className="mt-6">
				<div className="flex flex-col items-center justify-center py-4">
					<h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						People Anomaly Analytics
					</h2>
					<p className="text-center text-md md:text-lg">
						Stay one step ahead of potential security threats and disruptive
						behaviors with Nodeflux VisionAIre Analytics' advanced People
						Anomaly Analytics. This suite employs sophisticated AI algorithms to
						detect and alert on unusual or concerning activities.
					</p>
				</div>
				<Tabs
					defaultValue={PeopleAnomaly[0].title
						.toLowerCase()
						.replace(/\s+/g, "-")}
				>
					<div className="overflow-x-auto">
						<TabsList className="flex items-center mb-4 min-w-max">
							{PeopleAnomaly.map((item, index) => (
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
					{PeopleAnomaly.map((item, index) => (
						<TabsContent
							key={index}
							value={item.title.toLowerCase().replace(/\s+/g, "-")}
						>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
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
									<div className="order-1 md:order-2">
										<div className="relative h-full order-1 md:order-2">
											<HeroVideoDialog
												className="dark:hidden block"
												animationStyle="top-in-bottom-out"
												videoSrc={item.videosUrl}
												thumbnailAlt={item.title}
												thumbnailSrc={item.thumbnail}
											/>
										</div>
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
