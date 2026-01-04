import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shipping Policy | ZTreats",
	description:
		"Learn about ZTreats' shipping policy including delivery timelines, shipping charges, and tracking information.",
	keywords: ["shipping policy", "delivery", "ZTreats shipping"],
	openGraph: {
		title: "Shipping Policy | ZTreats",
		description: "Learn about ZTreats' shipping policy and delivery timelines.",
		url: "https://ztreats.com/policies/shipping",
		type: "website",
	},
	alternates: {
		canonical: "/policies/shipping",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function ShippingPolicyPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-5xl font-bold font-[amaranth] mb-12">Shipping Policy</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					We strive to deliver your orders quickly and safely. Please review our shipping policy for details on delivery times and charges.
				</p>
				<h2 className="text-xl font-semibold mt-6 mb-3">Delivery Timeline</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>Orders are processed within 1-2 business days</li>
					<li>Standard delivery takes 3-7 business days depending on location</li>
					<li>Express delivery options available at checkout for select areas</li>
					<li>You will receive tracking information via email once your order ships</li>
				</ul>
				<h2 className="text-xl font-semibold mt-6 mb-3">Shipping Charges</h2>
				<ul className="list-disc list-inside space-y-2 ml-4">
					<li>Free shipping on orders above ₹500</li>
					<li>Standard shipping charges apply for orders below ₹500</li>
					<li>Additional charges may apply for remote locations</li>
				</ul>
			</div>
		</div>
	);
}
