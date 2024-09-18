import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { name, companyName, companyEmail, phoneNumber, message } =
			await request.json();

		const { data, error } = await resend.emails.send({
			from: "Nodeflux Submission <onboarding@nodeflux.io>",
			to: ["business@nodeflux.io"],
			subject: "New Contact Form Submission",
			html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Company Email:</strong> ${companyEmail}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
		});

		if (error) {
            console.log(error);
			return NextResponse.json({ error }, { status: 400 });
		}

		return NextResponse.json({ message: "Email sent successfully", data });
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
