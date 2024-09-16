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
import topologi from "@/public/solutions/massive-surveillance.png";
import { CheckCircle2, CheckCircleIcon } from "lucide-react";
import Image from "next/image";

export default function MassiveSurveillance() {
	const listUseCases = [
		{
			title: "Tactical Body Worn Surveillance",
			description:
				"Monitor and take action with your video analytics data in real-time to improve your business operations",
			icon: CheckCircle2,
			iconColor: "text-green-500",
			analytics: ["Face Recognition", "Face Searching"],
		},
		{
			title: "Drone Surveillance",
			description:
				"Monitor and take action with your video analytics data in real-time to improve your business operations",
			icon: CheckCircle2,
			iconColor: "text-green-500",
			analytics: [
				"Face Recognition",
				"Face Searching",
				"Anomaly Detection",
				"Riot Detection",
				"People Analytics",
				"Vehicle Analytics",
			],
		},
		{
			title: "CCTVs Camera Surveillance",
			description:
				"Monitor and take action with your video analytics data in real-time to improve your business operations",
			icon: CheckCircle2,
			iconColor: "text-green-500",
			analytics: [
				"Face Recognition",
				"Face Searching",
				"Anomaly Detection",
				"Riot Detection",
				"People Analytics",
				"Vehicle Analytics",
			],
		},
	];
	return (
		<main>
			<section className="py-4 md:py-8 bg-primary">
				<div className="container px-4 flex flex-col md:flex-row items-center text-white">
					<div className="w-full md:w-1/2 px-4 md:px-8 mb-8 md:mb-0">
						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							VisionAIre Massive Surveillance
						</h1>
						<p className="mb-6 text-justify">
							VisionAIre can be used for monitoring in massive surveillance
							scenarios for Law or Military operations. Suitable for
							surveillance of large groups of people, such as police patrols,
							military operations, or crowd control.
						</p>
						<ul className="mb-6">
							<li className="flex items-center mb-2">
								<CheckCircleIcon size={16} className="mr-1" />
								Tactical Body Worn Surveillance
							</li>
							<li className="flex items-center mb-2">
								<CheckCircleIcon size={16} className="mr-1" />
								Drone Surveillance
							</li>
							<li className="flex items-center mb-2">
								<CheckCircleIcon size={16} className="mr-1" />
								CCTVs Camera Surveillance
							</li>
						</ul>
						<Button className="bg-secondary text-white px-6 py-3 rounded-md">
							Schedule your consultation
						</Button>
					</div>
					<div className="w-full md:w-1/2">
						<Image
							src={visionaire}
							alt="VisionAIre Analytics"
							width={600}
							height={400}
							className="w-full h-auto"
						/>
					</div>
				</div>
			</section>
			<section className="py-12">
				<div className="container w-[85%] mx-auto px-4 space-y-4">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
						Topology and Architecture
					</h2>
					<div>
						<Image
							src={topologi}
							alt="VisionAIre Analytics"
							width={1920}
							height={1080}
							className="w-full mx-auto"
						/>
						<p className="text-[8px] italic">
							*Example topology for a massive surveillance use case
						</p>
					</div>
					<div className="flex flex-col justify-center text-center">
						<h1 className="text-xl md:text-2xl font-bold mb-4">
							VisionAIre Massive Surveillance Use Cases
						</h1>
						<p className="text-sm italic">
							With VisionAIre it's possible to monitor and take action with your
							video analytics data in real-time to improve your business
							operations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{listUseCases.map((useCase, index) => (
							<Card key={index} className="flex flex-col h-full">
								<CardHeader className="text-md md:text-lg font-bold mb-2">
									<h3>{useCase.title}</h3>
									<CardDescription className="text-sm font-normal">
										{useCase.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex-grow">
									<p className="font-semibold mb-2">Analytics Used:</p>
									<ul className="space-y-2">
										{useCase.analytics.map((feature, index) => (
											<li key={index} className="flex items-center space-x-2">
												<CheckCircle2
													className={`${useCase.iconColor} flex-shrink-0 w-4 h-4`}
												/>
												<span className="text-sm">{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			<section className="py-3">
				<Card className="container w-[85%] mx-auto px-4 ">
					<CardHeader>
						<CardTitle className="text-xl md:text-2xl font-bold mb-4">
							Benefits of VisionAIre Massive Surveillance
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							VisionAIre Massive Surveillance provides the following benefits:
						</p>
						<br />
						<ul className="space-y-2">
							<li className="flex items-center">
								<CheckCircleIcon size={16} className="text-green-500 mr-1" />
								<span>Real-time data visualization</span>
							</li>
							<li className="flex items-center">
								<CheckCircleIcon size={16} className="text-green-500 mr-1" />
								<span>Integrated alert system</span>
							</li>
							<li className="flex items-center">
								<CheckCircleIcon size={16} className="text-green-500 mr-1" />
								<span>Integrated alert system</span>
							</li>
						</ul>
					</CardContent>
				</Card>
			</section>
			<section className="py-3">
				<Consolutation />
			</section>
		</main>
	);
}
