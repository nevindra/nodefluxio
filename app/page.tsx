import Certifications from "@/components/landing-page/Certifications";
import Consolutation from "@/components/landing-page/Consolutation";
import CoreProducts from "@/components/landing-page/CoreProducts";
import Features from "@/components/landing-page/Features";
import TrustedBy from "@/components/landing-page/TrustedBy";
import UseCases from "@/components/landing-page/UseCases";
import PulsatingButton from "@/components/magicui/pulsating-button";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between space-y-4">
			<section className="w-full bg-tertiary py-12 md:py-16">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="flex flex-col items-start text-white mb-8 md:mb-0 md:w-2/5 lg:w-1/3">
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
								Extending Vision Beyond Imagination
							</h1>
							<p className="text-lg mb-6">
							Redefining the Possibilities of Surveillance with Advanced AI Algorithms and Real-time Analytics.
							</p>
							<PulsatingButton className="bg-primary">
								<a href="/contact-us" className="text-lg font-semibold">Schedule your consultation</a>
							</PulsatingButton>
						</div>
						<div className="w-full md:w-3/5 lg:w-2/3 max-w-3xl">
							<Image
								src="/landing-page/hero-1.png"
								alt="Smart Donkey"
								className="w-full h-auto"
								width={2000}
								height={1200}
								priority
							/>
						</div>
					</div>
				</div>
			</section>
			<div className="max-w-[85%] mx-auto">
				<TrustedBy />
				<Features />
				<Certifications />
				<CoreProducts />
				<UseCases />
			</div>
			<Consolutation />
		</main>
	);
}
