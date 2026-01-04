"use client";

import { useState } from "react";
import { Facebook, Instagram, Twitter, ArrowRight, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import Link from "next/link";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Reset form
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
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
							<Input
								type="text"
								name="name"
								placeholder="Your Name"
								value={formData.name}
								onChange={handleChange}
								required
								className=" bg-white h-12"
							/>
							<Input
								type="email"
								name="email"
								placeholder="Email Address"
								value={formData.email}
								onChange={handleChange}
								required
								className=" bg-white h-12"
							/>
							<Input
								type="tel"
								name="phone"
								placeholder="Phone Number"
								value={formData.phone}
								onChange={handleChange}
								className=" bg-white h-12"
							/>
						</div>

						<Textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={20}
							className="bg-white"
						/>

						<Button
							type="submit"
							className="w-full md:w-1/3 bg-gray-900 hover:bg-gray-800 text-white py-6 flex items-center gap-2 transition-colors"
						>
							Leave us a Message
							<ArrowRight className="w-4 h-4" />
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
