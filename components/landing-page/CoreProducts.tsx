import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CoreProducts() {
	const Products = [
		{
			title: "Dashboard",
			content:
				"A comprehensive, user-friendly interface that provides real-time insights and seamless control over your VisionAIre ecosystem, empowering data-driven decision-making.",
			image: "/landing-page/dashboard-main.webp",
			link: "/dashboard",
		},
		{
			title: "Analytics",
			content:
				"Advanced AI-powered analytics tool that transforms raw visual data into actionable intelligence, unlocking hidden patterns and optimizing your computer vision operations.",
			image: "/landing-page/analytics-main.webp",
			link: "/analytics",
		},
		{
			title: "Platform",
			content:
				"The robust foundation of the VisionAIre ecosystem, offering unparalleled flexibility and integration capabilities to power your computer vision applications across diverse industries.",
			image: "/landing-page/platform-main.webp",
			link: "/platform",
		},
	];
	return (
		<section className="py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
					Our <span className="text-primary">Core Products</span>
				</h2>
				<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
					{Products.map((product, index) => (
						<Card key={index} className="flex flex-col">
							<CardHeader>
								<div className="relative w-full aspect-[4/3] mb-4">
									<Image
										src={product.image}
										alt={product.title}
										fill
										className="rounded-lg object-cover"
									/>
								</div>
								<CardTitle className="text-xl sm:text-2xl sm:text-center">
									{product.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex-grow text-center">
								<p className="text-sm sm:text-base">{product.content}</p>
							</CardContent>
							<CardFooter className="flex justify-center">
								<Button className="w-full sm:w-auto bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base">
									<Link href={product.link}>Learn More</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
