import { Metadata } from "next";
import SmoothScrollWrapper from "@/components/policies/SmoothScrollWrapper";

export const metadata: Metadata = {
	title: "Policies",
	description:
		"Read ZTreats' policies including Privacy Policy, Terms & Conditions, Shipping Policy, and Return & Refund Policy. We believe in transparency.",
	keywords: [
		"privacy policy",
		"terms and conditions",
		"shipping policy",
		"refund policy",
		"ZTreats policies",
	],
	openGraph: {
		title: "ZTreats Policies",
		description:
			"Privacy Policy, Terms & Conditions, Shipping Policy, and Return & Refund Policy.",
		url: "https://ztreats.com/policies",
		type: "website",
	},
	alternates: {
		canonical: "/policies",
	},
	robots: {
		index: true,
		follow: true,
	},
};

function PolicyPage() {
	return (
		<SmoothScrollWrapper>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h1 className="text-5xl font-bold font-[amaranth] mb-12">Policies</h1>

			{/* Privacy Policy */}
			<section id="privacy" className="mb-16 scroll-mt-24">
				<h2 className="text-3xl font-bold font-[amaranth] mb-6">Privacy Policy</h2>
				<div className="space-y-4 text-gray-700">
					<p className="leading-relaxed">
						At ZTreats, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
					</p>
					<h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Personal information (name, email, phone number, address)</li>
						<li>Payment information (processed securely through our payment partners)</li>
						<li>Order history and preferences</li>
						<li>Device and browser information for website optimization</li>
					</ul>
					<h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Process and fulfill your orders</li>
						<li>Send order confirmations and updates</li>
						<li>Respond to your inquiries and provide customer support</li>
						<li>Improve our website and services</li>
					</ul>
				</div>
			</section>

			{/* Terms & Conditions */}
			<section id="terms" className="mb-16 scroll-mt-24">
				<h2 className="text-3xl font-bold font-[amaranth] mb-6">Terms & Conditions</h2>
				<div className="space-y-4 text-gray-700">
					<p className="leading-relaxed">
						By accessing and using the ZTreats website, you agree to be bound by these Terms and Conditions. Please read them carefully before making a purchase.
					</p>
					<h3 className="text-xl font-semibold mt-6 mb-3">General Terms</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>You must be at least 18 years old to make a purchase</li>
						<li>All prices are listed in Indian Rupees (₹) and include applicable taxes</li>
						<li>Product images are for illustration purposes; actual products may vary slightly</li>
						<li>We reserve the right to modify prices and product availability without notice</li>
					</ul>
					<h3 className="text-xl font-semibold mt-6 mb-3">Order Acceptance</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>All orders are subject to availability and confirmation</li>
						<li>We reserve the right to refuse or cancel any order at our discretion</li>
						<li>Order confirmation will be sent via email upon successful placement</li>
					</ul>
				</div>
			</section>

			{/* Shipping Policy */}
			<section id="shipping" className="mb-16 scroll-mt-24">
				<h2 className="text-3xl font-bold font-[amaranth] mb-6">Shipping Policy</h2>
				<div className="space-y-4 text-gray-700">
					<p className="leading-relaxed">
						We strive to deliver your orders quickly and safely. Please review our shipping policy for details on delivery times and charges.
					</p>
					<h3 className="text-xl font-semibold mt-6 mb-3">Delivery Timeline</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Orders are processed within 1-2 business days</li>
						<li>Standard delivery takes 3-7 business days depending on location</li>
						<li>Express delivery options available at checkout for select areas</li>
						<li>You will receive tracking information via email once your order ships</li>
					</ul>
					<h3 className="text-xl font-semibold mt-6 mb-3">Shipping Charges</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Free shipping on orders above ₹500</li>
						<li>Standard shipping charges apply for orders below ₹500</li>
						<li>Additional charges may apply for remote locations</li>
					</ul>
				</div>
			</section>

			{/* Return & Refund Policy */}
			<section id="refund" className="mb-8 scroll-mt-24">
				<h2 className="text-3xl font-bold font-[amaranth] mb-6">Return & Refund Policy</h2>
				<div className="space-y-4 text-gray-700">
					<p className="leading-relaxed">
						Your satisfaction is our priority. If you&apos;re not completely happy with your purchase, we&apos;re here to help.
					</p>
					<h3 className="text-xl font-semibold mt-6 mb-3">Return Eligibility</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Products must be returned within 7 days of delivery</li>
						<li>Items must be unopened and in original packaging</li>
						<li>Perishable items cannot be returned unless damaged or defective</li>
						<li>Contact our support team to initiate a return request</li>
					</ul>
					<h3 className="text-xl font-semibold mt-6 mb-3">Refund Process</h3>
					<ul className="list-disc list-inside space-y-2 ml-4">
						<li>Refunds will be processed within 5-7 business days after receiving the returned item</li>
						<li>Refunds will be credited to the original payment method</li>
						<li>Shipping charges are non-refundable unless the return is due to our error</li>
						<li>For damaged or defective products, we offer full replacement or refund</li>
					</ul>
				</div>
			</section>
		</div>
		</SmoothScrollWrapper>
	);
}

export default PolicyPage;
