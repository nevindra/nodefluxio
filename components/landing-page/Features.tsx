import { Card, CardContent, CardHeader } from "@/components/ui/card";
import visionAiredImage from "@/public/landing-page/visionaire-core.webp";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";

export default function Features() {
	const features = [
		{
		  title: "Flexibility of visual input",
		  description: "VisionAIre is capable of utilizing various visual inputs as its stream input.",
		},
		{
		  title: "Versatile deployment methods",
		  description: "VisionAIre offers the flexibility to be deployed on any server and accessed conveniently through a web browser.",
		},
		{
		  title: "Customizable dashboards",
		  description: "VisionAIre allows for the use of existing dashboards or the creation of new ones to suit specific requirements.",
		},
		{
		  title: "Seamless system integration",
		  description: "VisionAIre is designed to integrate seamlessly with existing systems, eliminating any complexities in the process.",
		},
	  ];
	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-center mb-12">
				Complete{" "}
				<span className="text-primary">Video Analytics Surveillance</span>{" "}
				Platform
			</h2>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="relative h-64 md:h-96 lg:h-auto lg:flex-1">
					<Image
						src={visionAiredImage}
						alt="VisionAIre Platform"
						className="rounded-lg shadow-xl object-cover"
						layout="fill"
					/>
				</div>
				<div className="flex flex-col gap-8 lg:flex-1">
					<ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
						<Card className="relative flex w-full flex-col overflow-hidden rounded-lg border bg-background md:shadow-xl">
							<CardHeader>
								<h3 className="text-xl font-semibold">
									Vision AI Integration Platform
								</h3>
							</CardHeader>
							<CardContent>
								<p>
									VisionAIre is a cutting-edge platform that acts as the core
									and brain of computer vision systems, offering unparalleled
									flexibility and integration capabilities.
								</p>
							</CardContent>
						</Card>
					</ShineBorder>
					<ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
						<Card className="relative flex w-full flex-col overflow-hidden rounded-lg border bg-background md:shadow-xl">
							<CardHeader>
								<h3 className="text-xl font-semibold">
									Vision AI Integration Platform
								</h3>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-2">
									{features.map((item, index) => (
										<li key={index} className="text-justify">
											<span className="font-semibold">{item.title}</span>: {item.description}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</ShineBorder>
				</div>
			</div>
		</section>
	);
}
