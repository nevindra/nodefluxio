"use client";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";

export default function CoreProducts() {
	const Products = [
		{
			title: "Dashboard",
			content:
				"A comprehensive, user-friendly interface that provides real-time insights and seamless control over your VisionAIre Nodeflux ecosystem, empowering data-driven decision-making.",
			image: "/landing-page/dashboard-main.webp",
			link: "/dashboard",
			button: "Explore New Dashboard",
			animationData: "/lottie/dashboard.lottie", // Use the path to the .lottie file
		},
		{
			title: "Analytics",
			content:
				"Advanced AI-powered analytics tool that transforms raw visual data into actionable intelligence, unlocking hidden patterns and optimizing your computer vision operations.",
			image: "/landing-page/Analytics.png",
			link: "/analytics",
			button: "Introducing Vision LLM",
			animationData: "/lottie/analytics.lottie", // Use the path to the .lottie file
		},
		{
			title: "Platform",
			content:
				"The robust foundation of the VisionAIre Nodeflux ecosystem, offering unparalleled flexibility and integration capabilities to power your computer vision applications across diverse industries.",
			image: "/landing-page/platform-main.webp",
			link: "/platform",
			button: "View Our Platform",
			animationData: "/lottie/platform.lottie", // Use the path to the .lottie file
		},
	];
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 }, // Trigger when 10% of the section is visible
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section className="py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
					Our <span className="text-primary">Core Products</span>
				</h2>
				<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
					{Products.map((product, index) => (
						<Card
							key={index}
							className="flex flex-col relative overflow-hidden"
						>
							<BorderBeam
								duration={20}
								size={400}
								colorFrom="#ffaa40"
								colorTo="#9c40ff"
							/>
							<CardHeader>
								<DotLottieReact
									src={product.animationData}
									loop
									className="w-full h-auto"
									autoplay
								/>
								<CardTitle className="text-xl sm:text-2xl sm:text-center">
									{product.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex-grow text-center">
								<p className="text-sm sm:text-base">{product.content}</p>
							</CardContent>
							<CardFooter className="flex justify-center">
								<Link href={product.link} className="group">
									<AnimatedGradientText>
										🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
										<span
											className={cn(
												`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
											)}
										>
											{product.button}
										</span>
										<ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
									</AnimatedGradientText>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
