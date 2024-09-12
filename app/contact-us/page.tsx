import BusinessProcess from "@/components/BusinessProcess";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
	return (
		<main className="flex flex-col items-center justify-between space-y-4 max-w-[85%] mx-auto">
			<BusinessProcess isContactus={false} />
			<div className="px-4 py-7 rounded-lg m-4 w-full">
				<Card>
					<CardHeader>
						<CardTitle>Contact Us</CardTitle>
						<CardDescription>
							Fill out the form below to get in touch with our team.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="John Doe" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="company-name">Company Name</Label>
							<Input id="company-name" placeholder="Acme Inc." />
						</div>
						<div className="space-y-2">
							<Label htmlFor="company-address">Company Address</Label>
							<Input
								id="company-address"
								placeholder="123 Business St, City, Country"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="company-email">Company Email</Label>
							<Input
								id="company-email"
								type="email"
								placeholder="contact@company.com"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone-number">Phone Number</Label>
							<Input
								id="phone-number"
								type="tel"
								placeholder="+1 (555) 123-4567"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="Enter your message here"
								className="min-h-[100px]"
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full">Submit</Button>
					</CardFooter>
				</Card>
			</div>
		</main>
	);
}
