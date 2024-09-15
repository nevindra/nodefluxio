import statistics from "@/public/landing-page/statistics.webp";
import Image from "next/image";

const TrustedBy = () => {
	const companies = [
		{ name: "BIN", logo: "/landing-page/logos/bin.png" },
		{ name: "Divtik", logo: "/landing-page/logos/divtik.png" },
		{ name: "Brimob", logo: "/landing-page/logos/brimob.png" },
		{ name: "Polri", logo: "/landing-page/logos/polri.png" },
		{ name: "Mabes", logo: "/landing-page/logos/mabes.png" },
		{name: "BNPT", logo: "/landing-page/logos/bnpt.png"},
		{name: "Baintelkam", logo: "/landing-page/logos/baintelkam.png"},
		{ name: "Imigrasi", logo: "/landing-page/logos/imigrasi.png" },
		{ name: "Beacukai", logo: "/landing-page/logos/beacukai.png" },
		{ name: "jsc", logo: "/landing-page/logos/jsc.jpg" },
		{ name: "Jabar", logo: "/landing-page/logos/diskom-jabar.png" },
		{ name: "Jatim", logo: "/landing-page/logos/kominfo-jatim.png" }
		
		// { name: "Telkom", logo: "/landing-page/logos/telkom.png" },
		// { name: "Jasamarga", logo: "/landing-page/logos/jasamarga.png" },
	];
	return (
		<section className="w-full py-7">
			<div className="mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
					Trusted Key Players in{" "}
					<span className="text-[#e84a2e]">Indonesia</span>
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
					{companies.map((company) => (
						<div key={company.name} className="w-24 h-14 sm:h-16 relative">
							<Image
								src={company.logo}
								alt={`${company.name} logo`}
								fill
								sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 14vw"
								style={{ objectFit: "contain" }}
								priority
							/>
						</div>
					))}
				</div>
				<div className="flex justify-center px-4 sm:px-0">
					<Image src={statistics} alt="Statistics" className="w-full h-auto" priority/>
				</div>
			</div>
		</section>
	);
};

export default TrustedBy;
