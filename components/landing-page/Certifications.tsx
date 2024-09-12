import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import nist from "@/public/landing-page/nist.webp";
import tkdn from "@/public/landing-page/tkdn.webp";
import Image from "next/image";

export default function Certifications() {
	// TODO: Change the title and add description for each certification
	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					<span className="text-primary">Local Technology Principal</span> <br /> with <br />{" "}
					<span className="text-primary">World Class Quality</span>
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<Card className="bg-white/10 backdrop-blur-lg">
						<CardHeader>
							<div className="mb-4">
								<Image
									src={tkdn}
									alt="TKDN"
									width={150}
									height={150}
									className="fixed-logo"
								/>
							</div>
							<CardTitle className="text-xl font-semibold text-primary">
								Nodeflux with High TKDN value (99.04%)
							</CardTitle>
						</CardHeader>
						<CardContent className="text-justify">
							<p className="mb-4 ">
								Proud to be Indonesian, Nodeflux is Made in Indonesia, By
								Indonesian, supported by Indonesian investor and consists of all
								Indonesian talented engineers until today. Nodeflux Brand and
								Product is also Registered as Indonesian Intellectual Property.
							</p>
							
						</CardContent>
					</Card>
					<Card className="bg-white/10 backdrop-blur-lg">
						<CardHeader>
							<Image src={nist} alt="NIST" width={100} height={100} />
							<CardTitle className="text-xl font-semibold text-primary">
								Top 25th from 148 (85th Percentile) in NIST FRVT Leaderboard
							</CardTitle>
						</CardHeader>
						<CardContent className="text-justify">
							<p>
								 Nodeflux passed
								NIST’s Face Recognition Vendor Test in 2019. Becoming the 1st
								from Indonesia. Which only 4 from southeast asia 1 Indonesia, 3
								singapore. Nodeflux ranked 25th world's best from ±90 Vision AI
								company around the world.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
