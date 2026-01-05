import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
	name: string;
	email: string;
	phone?: string;
	message: string;
}

function validateEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
	if (!phone) return true; // Phone is optional
	const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;
	return phoneRegex.test(phone);
}

function sanitizeInput(input: string): string {
	return input.trim().slice(0, 5000); // Limit input length
}

export async function POST(request: NextRequest) {
	try {
		// Check for required environment variables
		const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL_TO } =
			process.env;

		if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
			console.error("Missing SMTP configuration in environment variables");
			return NextResponse.json(
				{ error: "Server configuration error. Please try again later." },
				{ status: 500 }
			);
		}

		if (!CONTACT_EMAIL_TO) {
			console.error("Missing CONTACT_EMAIL_TO in environment variables");
			return NextResponse.json(
				{ error: "Server configuration error. Please try again later." },
				{ status: 500 }
			);
		}

		// Parse request body
		let body: ContactFormData;
		try {
			body = await request.json();
		} catch {
			return NextResponse.json(
				{ error: "Invalid request body" },
				{ status: 400 }
			);
		}

		const { name, email, phone, message } = body;

		// Validate required fields
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Name, email, and message are required fields" },
				{ status: 400 }
			);
		}

		// Sanitize inputs
		const sanitizedName = sanitizeInput(name);
		const sanitizedEmail = sanitizeInput(email);
		const sanitizedPhone = phone ? sanitizeInput(phone) : "";
		const sanitizedMessage = sanitizeInput(message);

		// Validate email format
		if (!validateEmail(sanitizedEmail)) {
			return NextResponse.json(
				{ error: "Please provide a valid email address" },
				{ status: 400 }
			);
		}

		// Validate phone format (if provided)
		if (sanitizedPhone && !validatePhone(sanitizedPhone)) {
			return NextResponse.json(
				{ error: "Please provide a valid phone number" },
				{ status: 400 }
			);
		}

		// Validate name length
		if (sanitizedName.length < 2 || sanitizedName.length > 100) {
			return NextResponse.json(
				{ error: "Name must be between 2 and 100 characters" },
				{ status: 400 }
			);
		}

		// Validate message length
		if (sanitizedMessage.length < 10 || sanitizedMessage.length > 5000) {
			return NextResponse.json(
				{ error: "Message must be between 10 and 5000 characters" },
				{ status: 400 }
			);
		}

		// Create transporter
		const transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: parseInt(SMTP_PORT, 10),
			secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
			auth: {
				user: SMTP_USER,
				pass: SMTP_PASS,
			},
		});

		// Verify transporter configuration
		try {
			await transporter.verify();
		} catch (verifyError) {
			console.error("SMTP verification failed:", verifyError);
			return NextResponse.json(
				{ error: "Email service is temporarily unavailable. Please try again later." },
				{ status: 503 }
			);
		}

		// Compose email
		const mailOptions = {
			from: `"ZTreats Contact Form" <${SMTP_USER}>`,
			to: CONTACT_EMAIL_TO,
			replyTo: sanitizedEmail,
			subject: `New Contact Form Submission from ${sanitizedName}`,
			text: `
New contact form submission from ZTreats website:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone || "Not provided"}

Message:
${sanitizedMessage}

---
This email was sent from the ZTreats website contact form.
			`.trim(),
			html: `
<!DOCTYPE html>
<html>
<head>
	<style>
		body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
		.container { max-width: 600px; margin: 0 auto; padding: 20px; }
		.header { background-color: #1a1a1a; color: white; padding: 20px; text-align: center; }
		.content { padding: 20px; background-color: #f9f9f9; }
		.field { margin-bottom: 15px; }
		.label { font-weight: bold; color: #555; }
		.value { margin-top: 5px; }
		.message-box { background-color: white; padding: 15px; border-left: 4px solid #25D366; margin-top: 10px; }
		.footer { text-align: center; padding: 15px; color: #777; font-size: 12px; }
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>New Contact Form Submission</h1>
		</div>
		<div class="content">
			<div class="field">
				<div class="label">Name:</div>
				<div class="value">${sanitizedName}</div>
			</div>
			<div class="field">
				<div class="label">Email:</div>
				<div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
			</div>
			<div class="field">
				<div class="label">Phone:</div>
				<div class="value">${sanitizedPhone || "Not provided"}</div>
			</div>
			<div class="field">
				<div class="label">Message:</div>
				<div class="message-box">${sanitizedMessage.replace(/\n/g, "<br>")}</div>
			</div>
		</div>
		<div class="footer">
			This email was sent from the ZTreats website contact form.
		</div>
	</div>
</body>
</html>
			`.trim(),
		};

		// Send email
		try {
			await transporter.sendMail(mailOptions);
		} catch (sendError) {
			console.error("Failed to send email:", sendError);
			return NextResponse.json(
				{ error: "Failed to send your message. Please try again later." },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ message: "Your message has been sent successfully! We'll get back to you soon." },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Unexpected error in contact API:", error);
		return NextResponse.json(
			{ error: "An unexpected error occurred. Please try again later." },
			{ status: 500 }
		);
	}
}
