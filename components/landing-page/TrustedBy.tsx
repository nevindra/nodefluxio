"use client";
import statistics from "@/public/landing-page/statistics.webp";
import Image from "next/image";
import { useEffect, useRef } from "react";

const TrustedBy = () => {
	const companies = [
		{ name: "BIN", logo: "/landing-page/logos/bin.png" },
		{ name: "Divtik", logo: "/landing-page/logos/divtik.png" },
		{ name: "Brimob", logo: "/landing-page/logos/brimob.png" },
		{ name: "Polri", logo: "/landing-page/logos/polri.png" },
		{ name: "Mabes", logo: "/landing-page/logos/mabes.png" },
		{ name: "BNPT", logo: "/landing-page/logos/bnpt.png" },
		{ name: "Baintelkam", logo: "/landing-page/logos/baintelkam.png" },
		{ name: "Imigrasi", logo: "/landing-page/logos/imigrasi.png" },
		{ name: "Beacukai", logo: "/landing-page/logos/beacukai.png" },
		{ name: "jsc", logo: "/landing-page/logos/jsc.jpg" },
		{ name: "Jabar", logo: "/landing-page/logos/diskom-jabar.png" },
		{ name: "Jatim", logo: "/landing-page/logos/kominfo-jatim.png" },

		// { name: "Telkom", logo: "/landing-page/logos/telkom.png" },
		// { name: "Jasamarga", logo: "/landing-page/logos/jasamarga.png" },
	];
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log("Animation effect running");
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		const scrollAnimation = () => {
			if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
				scrollContainer.scrollLeft = 0;
			} else {
				scrollContainer.scrollLeft += 2; // Increased scroll speed
			}
		};

		const animationId = setInterval(scrollAnimation, 20); // Decreased interval for faster movement

		return () => clearInterval(animationId);
	}, []);

	return (
		<section className="w-full py-7">
			<div className="mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
					<span className="text-primary font-bold">Experience</span> That You Can Trust
				</h2>
				
				<div className="flex justify-center px-4 sm:px-0">
					<Image
						src={statistics}
						alt="Statistics"
						className="w-full h-auto"
						priority
					/>
				</div>
				<div className="pt-6 flex justify-center">
					{/* <RainbowButton className="bg-primary">
						<a href="/company-profile" className="text-lg font-semibold">
							View Our Company Profile
						</a>
					</RainbowButton> */}
				</div>
			</div>
		</section>
	);
};

export default TrustedBy;
