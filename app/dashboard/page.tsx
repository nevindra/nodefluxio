import Hero from "@/components/hero/Hero";
import Safari from "@/components/magicui/safari";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: 'VisionAIre Dashboard - Advanced AI Video Analytics Platform | Nodeflux',
  description: 'Experience real-time video analytics with VisionAIre Dashboard. Monitor multiple streams, analyze AI insights, and make data-driven decisions with our enterprise-grade computer vision platform.',
};

export default function Dashboard() {
	const heroData = {
		title: "VisionAIre Dashboard: Enterprise AI Video Analytics Platform",
		image: "/landing-page/dashboard-main.webp",
		description:
			"Transform your business operations with our enterprise-grade AI video analytics dashboard. Get real-time insights, advanced analytics, and secure monitoring capabilities all in one powerful platform.",
		features: [
			"Real-time AI video analytics with customizable dashboards",
			"Enterprise-grade security with role-based access control",
			"Advanced data visualization and analytics reporting",
		],
	};
	const features = [
		{
			title: "Unified Video Stream Management",
			description:
				"Manage and analyze multiple video streams in real-time through our enterprise-grade dashboard. Perfect for businesses requiring comprehensive video analytics and monitoring solutions across different locations.",
			image: "/dashboard/streams.jpeg",
			capabilities: [
				"Centralized Stream Management: Monitor unlimited video feeds from IP cameras, CCTV, and RTSP sources",
				"Advanced Filtering System: Organize streams by location, device type, or custom tags for efficient management",
				"Enterprise-grade Performance: Experience real-time updates with minimal latency across all streams",
			],
		},
		{
			title: "Advanced AI-Powered Stream Analytics",
			description:
				"Leverage cutting-edge computer vision technology to extract actionable insights from your video streams. Our AI models provide real-time analysis for security, operations, and business intelligence.",
			image: "/dashboard/single.jpeg",
			capabilities: [
				"High-Definition Stream Analysis: Crystal-clear video monitoring with AI-enhanced visualization",
				"Real-time AI Processing: Instant object detection, tracking, and behavioral analysis",
				"Performance Analytics: Comprehensive metrics dashboard for stream health and AI model performance",
				"Enterprise Security Features: End-to-end encryption and secure video transmission",
			],
		},
		{
			title: "Comprehensive Event Intelligence System",
			description:
				"Access and analyze historical event data with our powerful search and analytics tools. Perfect for businesses requiring detailed audit trails and data-driven insights.",
			image: "/dashboard/event.jpeg",
			capabilities: [
				"Enterprise Search Capabilities: Advanced filtering across all cameras and AI models with custom parameters",
				"Forensic Analysis Tools: Detailed event reconstruction with AI-enhanced metadata",
				"Business Intelligence Export: Generate custom reports and analytics in multiple formats",
				"Visual Analytics Dashboard: Interactive timeline and trend analysis for better decision-making",
			],
		},
	];
	return (
		<main>
			<Hero data={heroData} />
			<section className="relative flex flex-col max-w-[85%] mx-auto my-4">
				<div className="flex flex-col items-center justify-center my-4">
					<h2 className="text-3xl font-bold text-center mb-4">
						Transform Your Business Operations with AI-Powered Video Analytics
					</h2>
					<p className="text-center text-lg mb-6">
						Nodeflux delivers enterprise-grade AI video analytics that revolutionizes how businesses monitor, analyze, and optimize their operations. Our platform combines advanced computer vision technology with intuitive analytics tools, enabling real-time insights and data-driven decision-making across your organization.
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
										<h3>{feature.title}</h3>
									</CardTitle>
									<CardDescription className="text-justify">
										{feature.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<h4 className="font-medium mb-2">Key Capabilities:</h4>
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
