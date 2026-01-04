import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full bg-transparent pt-16 pb-8">
			{/* Main Footer Content */}
			<div className="mx-auto max-w-7xl px-6 sm:px-12 mb-12">
				{/* Desktop: Single Row Layout | Mobile: Stacked Layout */}
				<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
					{/* Logo */}
					<div className="shrink-0">
						<Image src="/assets/header-logo.png" alt="ZTreats Logo" width={200} height={200} className="h-auto" />
					</div>

					{/* Links and Policies - Side by side on mobile, inline on desktop */}
					<div className="grid grid-cols-2 gap-8 lg:flex lg:gap-16">
						{/* Links */}
						<div>
							<h3 className="font-bold text-black mb-4">Links</h3>
							<nav className="flex flex-col gap-3">
								<Link href="/" className="text-gray-600 hover:text-black transition-colors">
									Home
								</Link>
								<Link href="/products" className="text-gray-600 hover:text-black transition-colors">
									Products
								</Link>
								<Link href="/about" className="text-gray-600 hover:text-black transition-colors">
									About Us
								</Link>
								<Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
									Contact Us
								</Link>
							</nav>
						</div>

						{/* Policies */}
						<div>
							<h3 className="font-bold text-black mb-4">
								<Link href={"/policies"}>Policies</Link>
							</h3>
							<nav className="flex flex-col gap-3">
								<Link href="/policies#privacy" className="text-gray-600 hover:text-black transition-colors">
									Privacy Policy
								</Link>
								<Link href="/policies#terms" className="text-gray-600 hover:text-black transition-colors">
									Terms & Conditions
								</Link>
								<Link href="/policies#shipping" className="text-gray-600 hover:text-black transition-colors">
									Shipping Policy
								</Link>
								<Link href="/policies#refund" className="text-gray-600 hover:text-black transition-colors">
									Return & Refund Policy
								</Link>
							</nav>
						</div>
					</div>

					{/* Contact & Social */}
					<div className="shrink-0">
						<div className="flex flex-col gap-4 mb-6">
							{/* Email */}
							<div className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-gray-600" />
								<a href="mailto:info@example.com" className="text-gray-600 hover:text-black transition-colors">
									info@example.com
								</a>
							</div>

							{/* Phone */}
							<div className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-gray-600" />
								<a href="tel:+11234567890" className="text-gray-600 hover:text-black transition-colors">
									+1 123 456 7890
								</a>
							</div>

							{/* Address */}
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-gray-600 shrink-0 mt-1" />
								<address className="text-gray-600 not-italic">1234 Main Street, City, State, ZIP</address>
							</div>
						</div>

						{/* Social Media Icons */}
						<div className="flex gap-3">
							<a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: "#84CC16" }} aria-label="Facebook">
								<Facebook className="w-5 h-5 text-white" />
							</a>
							<a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: "#EC4899" }} aria-label="Instagram">
								<Instagram className="w-5 h-5 text-white" />
							</a>
							<a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: "#6366F1" }} aria-label="LinkedIn">
								<Linkedin className="w-5 h-5 text-white" />
							</a>
							<a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-black" aria-label="Twitter">
								<Twitter className="w-5 h-5 text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="border-t border-gray-200"></div>
			</div>

			{/* Copyright */}
			<div className="text-center text-gray-500 text-sm mt-8">
				<p>Copyright © 2023 - All rights Reserved</p>
			</div>
		</footer>
	);
}
