import statistics from "@/public/landing-page/statistics.webp";
import Image from "next/image";

const TrustedBy = () => {
	return (
		<section className="w-full py-7">
			<div className="mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
					Trusted Key Players in{" "}
					<span className="text-[#e84a2e]">Indonesia</span>
				</h2>
				<div className="flex justify-center px-4 sm:px-0">
					<Image
						src={statistics}
						alt="Statistics"
						className="w-full h-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default TrustedBy;
