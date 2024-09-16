import Hero from "@/components/hero/Hero";
import Safari from "@/components/magicui/safari";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
	const heroData = {
		title: "VisionAIre Dashboard",
		image: "/landing-page/dashboard-main.webp",
		description:
			"A comprehensive, user-friendly interface that provides real-time insights and seamless control over your VisionAIre ecosystem, empowering data-driven decision-making.",
		features: [
			"Customizable widgets for at-a-glance system status",
			"Interactive data visualizations for deep insights",
			"Role-based access control for enhanced security",
		],
	};
	const features = [
		{
			title: "Monitor All Streams in One Place",
			description:
				"A centralized dashboard where users can view and manage multiple live streams simultaneously. This dashboard should be responsive for optimal viewing across different devices.",
			image: "/dashboard/streams.jpeg",
			capabilities: [
				"Stream Aggregation: The dashboard should be able to aggregate and display live streams from various sources (e.g., cameras, RTSP feeds).",
				"Customizable Sorting and Filtering: Users should have the flexibility to sort and filter streams based on criteria like device name, location, stream type, or AI model.",
				"Real-time Updates: The dashboard should refresh in real time to ensure that users always see the latest stream data.",
			],
		},
		{
			title: "Single Stream View",
			description:
				"A dedicated page for viewing a specific camera's live stream, AI model inference results, and relevant statistics.",

			image: "/dashboard/single.jpeg",
			capabilities: [
				"Live Stream Display: The page should show the live stream from the selected camera in high quality.",
				"AI Inference Visualization: Inference results from the AI model should be displayed in a clear and visually appealing manner.",
				"Dynamic Statistics: The page should provide real-time statistics based on the chosen analytics (e.g., object count, vehicle speed, anomaly detection).",
				"Stream Health Monitoring: The page should indicate the health status of the stream (e.g., connection stability, frame rate).",
			],
		},
		{
			title: "Event History",
			description:
				"A page where users can search and view historical event data from all cameras and AI models.",
			image: "/dashboard/event.jpeg",
			capabilities: [
				"Comprehensive Search: Users should be able to search for events based on various criteria, including time, camera, AI model, event type, and specific attributes (e.g., object class, vehicle license plate).",
				"Detailed Event Information: When an event is selected, the page should display detailed information such as timestamp, location, image/video evidence, and AI model inference results.",
				"Data Export: Users should have the option to export event data for further analysis or storage.",
				"Time-Based Visualization: The page should allow users to visualize event data over time using charts or graphs.",
			],
		},
	];
	return (
		<main>
			<Hero data={heroData} />
			<section className="relative flex flex-col max-w-[85%] mx-auto my-4">
				<div className="flex flex-col items-center justify-center my-4">
					<h1 className="text-3xl font-bold text-center mb-4">
						Reimagine the way you monitor and manage your business with
						Nodeflux.
					</h1>
					<p className="text-center text-lg mb-6">
						Nodeflux is a cutting-edge AI-powered solution that empowers
						businesses to streamline their operations, enhance security, and
						optimize their digital experiences. With its advanced analytics
						capabilities, Nodeflux enables you to make data-driven decisions,
						identify patterns, and gain valuable insights into your business
						operations.
					</p>
				</div>
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center mb-12"
					>
						<div
							className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 w-full`}
						>
							<div className="relative w-full lg:w-1/2">
								<Safari
									url="nodeflux.io"
									className="w-full h-auto"
									src={feature.image}
								/>
							</div>
							<Card className="bg-white backdrop-blur-lg w-full lg:w-1/2">
								<CardHeader>
									<CardTitle className="text-xl font-semibold text-primary">
										{feature.title}
									</CardTitle>
									<CardDescription className="text-justify">
										{feature.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>Capabilities:</p>
									<br />
									<ul className="list-disc list-inside space-y-2">
										{feature.capabilities.map((capability, capIndex) => (
											<li key={capIndex}>{capability}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
