import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Return & Refund Policy | ZTreats",
	description:
		"Learn about ZTreats' return and refund policy. Returns accepted for damaged or incorrect products within 24-48 hours of delivery.",
	keywords: ["return policy", "refund policy", "ZTreats returns", "replacement", "damaged product"],
	openGraph: {
		title: "Return & Refund Policy | ZTreats",
		description: "Learn about ZTreats' return and refund policy for damaged or incorrect orders.",
		url: "https://ztreats.com/policies/refund",
		type: "website",
	},
	alternates: {
		canonical: "/policies/refund",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RefundPolicyPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[amaranth] mb-8 lg:mb-12">Return &amp; Refund Policy</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					Due to the nature of food products, returns are limited and subject to the conditions below.
				</p>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Return Eligibility</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Product received is damaged, or</li>
					<li>Incorrect product was delivered</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Return Request Window</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Requests must be raised within 24-48 hours of delivery.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Proof Requirement</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Customers must provide photos AND unboxing video as proof.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Non-Returnable Cases</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Product has been opened or consumed</li>
					<li>Taste preferences or personal dislike</li>
					<li>Minor variations in product appearance</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Natural Product Disclaimer</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>As our products are natural, variations in size, color, and taste may occur and should not be considered defects.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Refund / Replacement</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Replacement, or</li>
					<li>Refund via UPI / bank transfer</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Processing Time</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Refunds or replacements will be processed within 5-7 working days after verification.</li>
				</ul>
			</div>
		</div>
	);
}
