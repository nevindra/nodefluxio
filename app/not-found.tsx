import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<main>
			<section className="py-12">
				<div className="container w-[85%] mx-auto px-4 space-y-4">
					<div className="flex flex-col justify-center text-center">
						<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
							404 Page Not Found
						</h2>
						<p className="text-sm italic">
							The page you are looking for does not exist.
						</p>
						<div className="mt-3">
							<Button className="bg-primary text-white px-6 py-3 rounded-md">
								<Link href="/">Go to Home</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
