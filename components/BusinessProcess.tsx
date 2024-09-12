import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BusinessProcess({
	isContactus,
}: { isContactus: boolean }) {
	return (
		<div className="mx-auto px-4 py-12  rounded-lg m-4">
			<h2 className="text-blue-600 font-semibold mb-4">
				Our AI Consultation Process
			</h2>

			<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
				Enhance Your Operational Security Through Advanced AI Analytics
			</h1>

			<p className="text-xl text-gray-600 mb-8">
				Our team of AI specialists has successfully implemented security and
				surveillance solutions for diverse organizations across multiple
				sectors. We specialize in deploying our existing AI Analytics SKUs to
				optimize your security operations, with the flexibility to develop
				custom solutions when necessary.
			</p>

			<p className="text-xl text-gray-600 mb-12">Our Systematic Approach:</p>

			<div className="space-y-12 w-[70%] mx-auto">
				{[
					{
						number: 1,
						title: "Requirements Analysis",
						description:
							"We begin by thoroughly examining your security needs and existing infrastructure. Our experts will determine which of our AI Analytics SKUs best address your surveillance objectives."
					},
					{
						number: 2,
						title: "System Evaluation",
						description:
							"Our team assesses your current security systems to ensure compatibility with our AI Analytics SKUs and identify any necessary adjustments.",
					},
					{
						number: 3,
						title: "Integration",
						description:
							"We seamlessly integrate our AI Analytics into your surveillance business process, conducting thorough testing to ensure optimal performance and accuracy.",
					},
					{
						number: 4,
						title: "Deployment and Monitoring",
						description:
							"We activate the AI-enhanced surveillance system, providing comprehensive training, ongoing support, and maintenance to ensure continual security optimization.",
					},
				].map((step) => (
					<div key={step.number} className="flex items-start">
						<div className="flex-shrink-0 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
							<span className="text-xl font-semibold">{step.number}</span>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					</div>
				))}
			</div>

			{isContactus ? (
				<div className="mt-12 flex justify-center">
					<Button
						size="lg"
						className="bg-primary hover:bg-secondary text-white"
					>
						<Link href="/contact-us">Schedule your consultation</Link>
					</Button>
				</div>
			) : (
				""
			)}
		</div>
	);
}
