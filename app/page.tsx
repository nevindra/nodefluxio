import Certifications from "@/components/landing-page/Certifications";
import CoreProducts from "@/components/landing-page/CoreProducts";
import Features from "@/components/landing-page/Features";
import TrustedBy from "@/components/landing-page/TrustedBy";
import UseCases from "@/components/landing-page/UseCases";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between space-y-4">
			<section
				className="relative flex flex-col justify-center items-center space-y-4 py-16 w-full"
				style={{
					backgroundImage: "url('/landing-page/hero-main.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="bg-black bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-lg text-center text-white max-w-4xl mx-auto">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
						See Beyond the Horizon
					</h1>
					<h2 className="text-lg sm:text-xl md:text-2xl text-white mt-2 sm:mt-3 md:mt-4">
						Advanced computer vision for real-time intelligence and threat
						detection.
					</h2>
					<Button className="mt-4 sm:mt-5 md:mt-6 bg-primary text-white">
						<Link href="/contact-us">Connect with us</Link>
					</Button>
				</div>
			</section>
			<div className="max-w-[85%] mx-auto">
				<TrustedBy />
				<Features />
				<CoreProducts />
				<UseCases />
				<Certifications />
			</div>
		</main>
	);
}
