import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
export default function FaceAnalytics() {
	return (
		<>
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center justify-center py-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						Face Analytics
					</h1>
					<p className="text-center text-sm md:text-base">
						Face Analytics is a cutting-edge technology that enables businesses
						to analyze and understand human faces in real-time. By leveraging
						the power of computer vision, this technology can provide valuable
						insights into customer behavior, preferences, and sentiment.
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
					<Card className="w-full md:w-1/2 rounded-xl border-2">
						<CardHeader>
							<CardTitle className="text-xl md:text-2xl mx-5">
								Face Recognition
							</CardTitle>
						</CardHeader>
						<CardContent className="mx-5">
							<p className="text-justify text-sm">
								Visionaire Face Recognition Surveillance by Nodeflux is a Vision
								Artiﬁcial Intelligence Analytics Software which provides
								accurate searching and recognition with searching mechanism 1:N.
								Using deep learning algorithms to enhance the accuracy of facial
								inferencing, Nodeflux Face Recognition automatically detects
								facial features and classifies them into recognized or
								unrecognized persons.
							</p>
							<br />
							<ul className="mb-6 text-sm">
								<li className="flex items-center mb-2">
									<span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
									<span>
										Proven Record with 200 Million Face Searching and Matching
									</span>
								</li>
								<li className="flex items-center mb-2">
									<span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
									<span>Flexibility on Device Integration</span>
								</li>
								<li className="flex items-center mb-2">
									<span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
									<span>Adaptability for Any Needs</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="bg-primary text-white px-6 py-3 rounded-md mx-5">
								Read more
							</Button>
						</CardFooter>
					</Card>
					<div className="w-full md:w-1/2 mt-3 md:mt-0">
						<video className="w-full rounded-lg" controls>
							<source
								src="https://www.w3schools.com/html/mov_bbb.mp4"
								type="video/mp4"
							/>
							<track
								src="https://www.w3schools.com/html/mov_bbb.vtt"
								kind="captions"
								srcLang="en"
								label="English"
								default
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</>
	);
}
