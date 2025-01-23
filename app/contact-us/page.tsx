"use client";
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
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { useForm } from "react-hook-form";

const contactFormSchema = z.object({
	name: z
		.string()
		.min(4, "Name is required and must be at least 4 characters long"),
	companyName: z
		.string()
		.min(5, "Company name is required and must be at least 5 characters long"),
	companyEmail: z.string().email("Invalid email address"),
	phoneNumber: z.string().min(10, "Phone number is required"),
	message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = {
	name: string;
	companyName: string;
	companyEmail: string;
	phoneNumber: string;
	message: string;
};

export default function ContactUs() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				toast({
					title: "Success",
					description: "Email sent successfully! We'll get back to you soon.",
					variant: "default",
				});
				reset();
			} else {
				throw new Error("Failed to send email");
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast({
				title: "Error sending email",
				description: "Please try again later. Or you can directly contact us at business@nodeflux.io",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="flex flex-col items-center justify-between space-y-4 max-w-[85%] mx-auto">
			<Toaster />
			<div className="mx-auto p-6 w-full my-4">
				<h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
					Contact Us
				</h1>
				<Card>
					<form onSubmit={handleSubmit(onSubmit)}>
						<CardHeader>
							<CardDescription className="text-sm md:text-base text-center text-black">
								Fill out the form below to get in touch with our team.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{/* Name Input */}
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="John Doe" {...register("name")} />
								{errors.name?.message && (
									<p className="text-red-500 text-sm">{errors.name.message}</p>
								)}
							</div>
							{/* Company Name Input */}
							<div className="space-y-2">
								<Label htmlFor="companyName">Company Name</Label>
								<Input
									id="companyName"
									placeholder="Acme Inc."
									{...register("companyName")}
								/>
								{errors.companyName?.message && (
									<p className="text-red-500 text-sm">
										{errors.companyName.message}
									</p>
								)}
							</div>
							{/* Company Email Input */}
							<div className="space-y-2">
								<Label htmlFor="companyEmail">Company Email</Label>
								<Input
									id="companyEmail"
									type="email"
									placeholder="contact@company.com"
									{...register("companyEmail")}
								/>
								{errors.companyEmail?.message && (
									<p className="text-red-500 text-sm">
										{errors.companyEmail.message}
									</p>
								)}
							</div>
							{/* Phone Number Input */}
							<div className="space-y-2">
								<Label htmlFor="phoneNumber">Phone Number</Label>
								<Input
									id="phoneNumber"
									type="tel"
									placeholder="+1 (555) 123-4567"
									{...register("phoneNumber")}
								/>
								{errors.phoneNumber?.message && (
									<p className="text-red-500 text-sm">
										{errors.phoneNumber.message}
									</p>
								)}
							</div>
							{/* Message Input */}
							<div className="space-y-2">
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									placeholder="Enter your message here"
									className="min-h-[100px]"
									{...register("message")}
								/>
								{errors.message?.message && (
									<p className="text-red-500 text-sm">
										{errors.message.message}
									</p>
								)}
							</div>
						</CardContent>
						<CardFooter>
							<Button className="w-full" type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Submitting..." : "Submit"}
							</Button>
						</CardFooter>
					</form>
				</Card>
			</div>
		</main>
	);
}
