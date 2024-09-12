import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function PeopleAnalytics() {
	const Analytics = [
		{
			title: "People Analytics",
			descriptions: "VisionAIre People Analytics is a Vision Artiﬁcial Intelligence Analytics Software which provides accurate detection for people in video streams.",
			features: [
				"Detected people are highlighted in the video stream",
				"Real-time data visualization",
				"Customizable dashboards",
				"Seamless system integration",
			],
		}
	]
	return (
		<>
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center justify-center py-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
						People Oriented Analytics
					</h1>
					<p className="text-center text-sm md:text-base">
						People Oriented Analytics is a cutting-edge technology that enables
						businesses to analyze human object detection in real-time.
					</p>
				</div>
				<Tabs defaultValue="people-analytics">
					<TabsList className="flex justify-center max-w-[80%]mx-auto p-4">
						<TabsTrigger value="people-analytics">People Analytics</TabsTrigger>
						<TabsTrigger value="crowd-estimation">Crowd Estimation</TabsTrigger>
						<TabsTrigger value="ppe-detection">PPE Detection</TabsTrigger>
					</TabsList>
					<TabsContent value="people-analytics" >
						<div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
							<Card className="w-full md:w-1/2">
								<CardHeader>
									<CardTitle className="text-xl md:text-2xl">
										People Analytics
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-justify text-sm">
										VisionAIre People Analytics is a Vision Artiﬁcial
										Intelligence Analytics Software which provides accurate
										detection for people in video streams.
									</p>
									<br />
									<ul className="mb-6 text-sm">
										<li className="flex items-center mb-2">
											<span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
											<span>
												Proven Record with 200 Million Face Searching and
												Matching
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
					</TabsContent>
					<TabsContent value="crowd-estimation">
						<Card className="w-full md:w-1/2">
							<CardHeader>
								<CardTitle className="text-xl md:text-2xl">
									Crowd Estimation
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-justify text-sm">
									VisionAIre Crowd Estimation is a Vision Artiﬁcial Intelligence
									Analytics Software which provides accurate detection for
									people in video streams.
								</p>
								<br />
								<ul className="mb-6 text-sm">
									<li className="flex items-center mb-2">
										<span className="w-2 h-2 bg-[#4c12a1] rounded-full mr-2 flex-shrink-0"></span>
										<span>
											Proven Record with 200 Million Face Searching and Matching
										</span>
									</li>
									<li className="flex items-center mb-2">
										<span className="w-2 h-2 bg-[#4c12a1] rounded-full mr-2 flex-shrink-0"></span>
										<span>Flexibility on Device Integration</span>
									</li>
									<li className="flex items-center mb-2">
										<span className="w-2 h-2 bg-[#4c12a1] rounded-full mr-2 flex-shrink-0"></span>
										<span>Adaptability for Any Needs</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
}
