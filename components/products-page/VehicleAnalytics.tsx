import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VehicleAnalytics() {
	const VehicleAnalytics = [
		{
			title: "Vehicle Analytics",
			descriptions:
				"Nodeflux Vehicle Analytics offers a comprehensive analysis of vehicle movements, classifications, and behaviors captured through video feeds. It can detect and categorize vehicles based on type (e.g., cars, trucks, motorcycles, bus) and provide data that supports traffic management, parking systems, or law enforcement operations.",
			features: [
				"Multiclass Vehicle Classification",
				"Rich Vehicle Analytics Applications to Support Multiple Scenario",
				"Multiple Counter Line and Detection Area",
			],
			videosUrl:
				"https://drive.google.com/file/d/1L0r4z4_auKql1muPE107dP7SohAxKu-a/preview",
			tags: ["New SKU", "Object Detection", "Multiple Logic"],
		},
		{
			title: "License Plate Recognition",
			descriptions:
				"License Plate Recognition (LPR) by Nodeflux uses sophisticated algorithms to identify and read vehicle license plates in real-time, even in challenging environments. It is optimized for Indonesian plate formats but can adapt to other plate types. LPR is essential for traffic enforcement, parking management, and vehicle access control.",
			features: [
				"Adaptive to Withstand in Real Environment",
				"High Accuracy on Various Types of Indonesian Plates",
				"Optimal Value for Different Traffic Scenarios",
			],
			videosUrl:
				"https://drive.google.com/file/d/1L0r4z4_auKql1muPE107dP7SohAxKu-a/preview",
			tags: ["Object Detection"],
		},
	];

	return (
		<>
			<div className="px-4 mt-6">
				<div className="flex flex-col items-center justify-center py-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						Vehicle Analytics
					</h1>
					<p className="text-center text-sm md:text-base">
						Vehicle Oriented Analytics is a cutting-edge technology that enables
						businesses to analyze vehicle object detection in real-time.
					</p>
				</div>
				<Tabs
					defaultValue={VehicleAnalytics[0].title
						.toLowerCase()
						.replace(/\s+/g, "-")}
				>
					<div className="overflow-x-auto">
						<TabsList className="flex items-center mb-4 min-w-max">
							{VehicleAnalytics.map((item, index) => (
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
					{VehicleAnalytics.map((item, index) => (
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
										<iframe
											src={item.videosUrl}
											className="w-full h-full min-h-[300px] rounded-lg"
											allow="autoplay"
											allowFullScreen
											title={item.title}
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
