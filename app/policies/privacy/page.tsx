import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | ZTreats",
	description:
		"Learn how ZTreats collects, uses, and protects your personal information. We are committed to safeguarding your privacy.",
	keywords: ["privacy policy", "data protection", "ZTreats privacy"],
	openGraph: {
		title: "Privacy Policy | ZTreats",
		description: "Learn how ZTreats collects, uses, and protects your personal information.",
		url: "https://ztreats.com/policies/privacy",
		type: "website",
	},
	alternates: {
		canonical: "/policies/privacy",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function PrivacyPolicyPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-5xl font-bold font-[amaranth] mb-12">Privacy Policy</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					At ZTreats, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
				</p>
				<h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>Personal information (name, email, phone number, address)</li>
					<li>Payment information (processed securely through our payment partners)</li>
					<li>Order history and preferences</li>
					<li>Device and browser information for website optimization</li>
				</ul>
				<h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>Process and fulfill your orders</li>
					<li>Send order confirmations and updates</li>
					<li>Respond to your inquiries and provide customer support</li>
					<li>Improve our website and services</li>
				</ul>
			</div>
		</div>
	);
}
