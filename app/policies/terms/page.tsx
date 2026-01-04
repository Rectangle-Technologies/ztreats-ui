import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms & Conditions | ZTreats",
	description:
		"Read ZTreats' Terms and Conditions. By using our website, you agree to be bound by these terms.",
	keywords: ["terms and conditions", "terms of service", "ZTreats terms"],
	openGraph: {
		title: "Terms & Conditions | ZTreats",
		description: "Read ZTreats' Terms and Conditions for using our website and services.",
		url: "https://ztreats.com/policies/terms",
		type: "website",
	},
	alternates: {
		canonical: "/policies/terms",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function TermsConditionsPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-5xl font-bold font-[amaranth] mb-12">Terms & Conditions</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					By accessing and using the ZTreats website, you agree to be bound by these Terms and Conditions. Please read them carefully before making a purchase.
				</p>
				<h2 className="text-xl font-semibold mt-6 mb-3">General Terms</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>You must be at least 18 years old to make a purchase</li>
					<li>All prices are listed in Indian Rupees (₹) and include applicable taxes</li>
					<li>Product images are for illustration purposes; actual products may vary slightly</li>
					<li>We reserve the right to modify prices and product availability without notice</li>
				</ul>
				<h2 className="text-xl font-semibold mt-6 mb-3">Order Acceptance</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>All orders are subject to availability and confirmation</li>
					<li>We reserve the right to refuse or cancel any order at our discretion</li>
					<li>Order confirmation will be sent via email upon successful placement</li>
				</ul>
			</div>
		</div>
	);
}
