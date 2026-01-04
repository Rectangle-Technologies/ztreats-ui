import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Return & Refund Policy | ZTreats",
	description:
		"Learn about ZTreats' return and refund policy. Your satisfaction is our priority.",
	keywords: ["return policy", "refund policy", "ZTreats returns"],
	openGraph: {
		title: "Return & Refund Policy | ZTreats",
		description: "Learn about ZTreats' return and refund policy.",
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
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-5xl font-bold font-[amaranth] mb-12">Return & Refund Policy</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					Your satisfaction is our priority. If you&apos;re not completely happy with your purchase, we&apos;re here to help.
				</p>
				<h2 className="text-xl font-semibold mt-6 mb-3">Return Eligibility</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>Products must be returned within 7 days of delivery</li>
					<li>Items must be unopened and in original packaging</li>
					<li>Perishable items cannot be returned unless damaged or defective</li>
					<li>Contact our support team to initiate a return request</li>
				</ul>
				<h2 className="text-xl font-semibold mt-6 mb-3">Refund Process</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>Refunds will be processed within 5-7 business days after receiving the returned item</li>
					<li>Refunds will be credited to the original payment method</li>
					<li>Shipping charges are non-refundable unless the return is due to our error</li>
					<li>For damaged or defective products, we offer full replacement or refund</li>
				</ul>
			</div>
		</div>
	);
}
