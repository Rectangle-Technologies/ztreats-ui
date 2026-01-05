"use client";

import { useState } from "react";
import { Instagram, ArrowRight, Linkedin, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { toast } from "sonner";

interface FormErrors {
	name?: string;
	email?: string;
	phone?: string;
	message?: string;
}

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<FormErrors>({});

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		// Validate name
		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		} else if (formData.name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters";
		} else if (formData.name.trim().length > 100) {
			newErrors.name = "Name must be less than 100 characters";
		}

		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!emailRegex.test(formData.email.trim())) {
			newErrors.email = "Please enter a valid email address";
		}

		// Validate phone (optional but must be valid if provided)
		if (formData.phone.trim()) {
			const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;
			if (!phoneRegex.test(formData.phone.trim())) {
				newErrors.phone = "Please enter a valid phone number";
			}
		}

		// Validate message
		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		} else if (formData.message.trim().length > 5000) {
			newErrors.message = "Message must be less than 5000 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error for this field when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form
		if (!validateForm()) {
			toast.error("Please fix the errors in the form");
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name.trim(),
					email: formData.email.trim(),
					phone: formData.phone.trim() || undefined,
					message: formData.message.trim(),
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to send message");
			}

			toast.success(data.message || "Message sent successfully!");

			// Reset form
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});
			setErrors({});
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "Something went wrong. Please try again later.";
			toast.error(errorMessage);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="w-full py-12 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-8">
					{/* Left Section - Heading and Social Icons */}
					<div className="flex justify-between">
						<h2 className="text-3xl sm:text-5xl font-bold font-[amaranth] text-black mb-12">
							Get in touch with us. <br className="lg:hidden"/>We&apos;re here to assist you.
						</h2>

						{/* Social Icons */}
						<div className="flex flex-col gap-4">
							{/* <Link
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5 text-gray-700" />
							</Link> */}
							<Link
								href="https://www.instagram.com/ztreats.india?igsh=Ymg3ODF2MjJwZzFv"
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5 text-gray-700" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/ztreats/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
								aria-label="Twitter"
							>
								<Linkedin className="w-5 h-5 text-gray-700" />
							</Link>
						</div>
					</div>

					{/* Right Section - Contact Form */}
					<form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:w-2/3">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							<div className="flex flex-col gap-1">
								<Input
									type="text"
									name="name"
									placeholder="Your Name"
									value={formData.name}
									onChange={handleChange}
									disabled={isSubmitting}
									className={`bg-white h-12 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
								/>
								{errors.name && (
									<span className="text-red-500 text-sm">{errors.name}</span>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<Input
									type="email"
									name="email"
									placeholder="Email Address"
									value={formData.email}
									onChange={handleChange}
									disabled={isSubmitting}
									className={`bg-white h-12 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
								/>
								{errors.email && (
									<span className="text-red-500 text-sm">{errors.email}</span>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<Input
									type="tel"
									name="phone"
									placeholder="Phone Number (Optional)"
									value={formData.phone}
									onChange={handleChange}
									disabled={isSubmitting}
									className={`bg-white h-12 ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
								/>
								{errors.phone && (
									<span className="text-red-500 text-sm">{errors.phone}</span>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-1">
							<Textarea
								name="message"
								placeholder="Message"
								value={formData.message}
								onChange={handleChange}
								disabled={isSubmitting}
								rows={20}
								className={`bg-white ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
							/>
							{errors.message && (
								<span className="text-red-500 text-sm">{errors.message}</span>
							)}
						</div>

						<Button
							type="submit"
							disabled={isSubmitting}
							className="w-full md:w-1/3 bg-gray-900 hover:bg-gray-800 text-white py-6 flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
						>
							{isSubmitting ? (
								<>
									<Loader2 className="w-4 h-4 animate-spin" />
									Sending...
								</>
							) : (
								<>
									Leave us a Message
									<ArrowRight className="w-4 h-4" />
								</>
							)}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
