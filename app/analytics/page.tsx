import Hero from "@/components/hero/Hero";
import FaceAnalytics from "@/components/products-page/FaceAnalytics";
import PeopleAnalytics from "@/components/products-page/PeopleAnalytics";

export default function Analytics() {
	const heroData = {
		title: "Nodeflux Analytics",
		description:
			"Monitor and take action with your video analytics data in real-time to improve your business operations",
		image: "/products-hero.webp",
		features: [
			"Customizable widgets for at-a-glance system status",
			"Interactive data visualizations for deep insights",
			"Real-time data streaming for continuous analysis",
		],
	};

	return (
		<main>
			<Hero data={heroData} />
			<section className="mx-auto space-y-4 py-5 bg-[#dfdff2]">
				<div className="container max-w-[85%] mx-auto">
				<FaceAnalytics />
				<PeopleAnalytics />
				</div>
			</section>
		</main>
	);
}
