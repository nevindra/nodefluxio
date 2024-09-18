import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function FaceAnalytics() {
	const Biometrics = [
		{
			title: "Face Recognition",
			descriptions:
				"Face Recognition by Nodeflux is an AI-powered computer vision solution that accurately identifies and verifies individuals by analyzing facial features from video streams or images. It is designed for real-time applications, leveraging deep learning algorithms to detect and recognize faces in a wide range of environments. This solution can be used for access control, security monitoring, and identity verification.",
			features: [
				"Dynamic Watchlist Management",
				"High Processing and Accuracy",
				"Proven in Many International Events",
			],
			thumbnail: "/products-page/face-recognition.webp",
			videosUrl:
				"https://drive.google.com/file/d/1ZbXkMKnxze8Dj1fG-ZWeMkjlQ6dsw7EK/preview",
			tags: ["Most Popular"],
		},
	];
	return (
		<>
			<div className="container mx-auto px-4 mt-2">
				<div className="flex flex-col items-center justify-center py-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						Face Analytics
					</h1>
					<p className="text-center text-md md:text-lg">
						Nodeflux VisionAIre Analytics presents a groundbreaking Face
						Analytics solution, unlocking the power of advanced facial
						recognition technology. This cutting-edge system offers unparalleled
						accuracy and speed, revolutionizing security, customer service, and
						personalized experiences across various industries.
					</p>
				</div>
				<Tabs
					defaultValue={Biometrics[0].title.toLowerCase().replace(/\s+/g, "-")}
				>
					<div className="overflow-x-auto">
						<TabsList className="flex items-center mb-4 min-w-max">
							{Biometrics.map((item, index) => (
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
					{Biometrics.map((item, index) => (
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
