import Image from "next/image";
import { Button } from "../ui/button";

export default function Consolutation() {
	return (
		<section className="w-full bg-primary py-12 md:py-16 relative">
            <div 
				className="absolute inset-0 z-0 opacity-30"
				style={{
					backgroundImage: 'url(/landing-page/pattern.webp)',
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			<div className="container mx-auto px-4 relative">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="flex flex-col items-start text-white mb-8 md:mb-0 md:mr-8 max-w-lg">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
							Looking for another solution?
						</h2>
						<p className="text-lg mb-6">Contact us to learn more about our solutions.</p>
						<Button variant="outline" className="text-primary ">
							<a href="/contact-us" className="text-lg font-semibold">
								Schedule your consultation
							</a>
						</Button>
					</div>
					<div className="w-full md:w-1/2 max-w-md">
						<Image
							src="/landing-page/smart-donkey.webp"
							alt="Smart Donkey"
							className="w-full h-auto sm:h-92"
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}