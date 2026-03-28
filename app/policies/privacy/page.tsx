import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | ZTreats",
	description:
		"Learn how ZTreats collects, uses, and protects your personal information. We are committed to safeguarding your privacy.",
	keywords: ["privacy policy", "data protection", "ZTreats privacy", "personal data"],
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
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[amaranth] mb-8 lg:mb-12">Privacy Policy</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					ZTreats respects your privacy and is committed to protecting your personal information.
				</p>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Name</li>
					<li>Phone number</li>
					<li>Email address</li>
					<li>Delivery address</li>
					<li>Order details</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">How We Collect Data</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>WhatsApp communication</li>
					<li>Phone orders</li>
					<li>Email communication</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Processing and fulfilling orders</li>
					<li>Customer support and communication</li>
					<li>Order-related updates</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Data Sharing</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>We do not sell or rent your personal data.</li>
					<li>Your data may be shared only with shipping partners for order fulfillment.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Data Security</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>We take reasonable measures to ensure your data is stored securely.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Your Rights</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>You may request access, correction, or deletion of your personal data by contacting us.</li>
				</ul>
			</div>
		</div>
	);
}
