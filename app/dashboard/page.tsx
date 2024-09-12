import Hero from "@/components/hero/Hero";

export default function Dashboard() {
	const heroData = {
		title: "VisionAIre Dashboard",
		image: "/landing-page/dashboard-main.png",
		description:
			"A comprehensive, user-friendly interface that provides real-time insights and seamless control over your VisionAIre ecosystem, empowering data-driven decision-making.",
		features: [
			"Customizable widgets for at-a-glance system status",
			"Interactive data visualizations for deep insights",
			"Role-based access control for enhanced security",
		],
	};
	return (
		<main>
			<Hero data={heroData} />
		</main>
	);
}
