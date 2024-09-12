import { Card, CardContent, CardHeader } from "@/components/ui/card";
import visionAiredImage from "@/public/visionaire-core.png";
import Image from "next/image";

export default function Features() {
	const Content = [
		"Flexibility of visual input",
		"Versatile deployment methods",
		"Customizable dashboards",
		"Seamless system integration",
	];
	return (
		<section className="py-12">
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
					<Card>
						<CardHeader>
							<h3 className="text-xl font-semibold">
								Vision AI Integration Platform
							</h3>
						</CardHeader>
						<CardContent>
							<p>
								VisionAIred is a cutting-edge platform that acts as the core and
								brain of computer vision systems, offering unparalleled
								flexibility and integration capabilities.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<h3 className="text-xl font-semibold">Key Features</h3>
						</CardHeader>
						<CardContent>
							<ul className="list-disc list-inside space-y-2">
								{Content.map((item, index) => (
									<li key={index} className="font-semibold">
										{item}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
