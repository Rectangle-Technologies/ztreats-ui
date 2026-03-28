import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shipping Policy | ZTreats",
	description:
		"Learn about ZTreats' shipping policy including delivery timelines, shipping charges, and Pan India coverage. Free shipping on orders above ₹899.",
	keywords: ["shipping policy", "delivery", "ZTreats shipping", "Pan India delivery", "Delhivery"],
	openGraph: {
		title: "Shipping Policy | ZTreats",
		description: "Learn about ZTreats' shipping policy, delivery timelines, and shipping charges.",
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
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[amaranth] mb-8 lg:mb-12">Shipping Policy</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					At ZTreats, we aim to deliver your orders in a timely and efficient manner while ensuring product quality and freshness.
				</p>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Order Processing</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>All orders are processed after confirmation via WhatsApp, phone, or Instagram.</li>
					<li>Orders are typically dispatched within 24-36 hours of order confirmation and payment (if applicable).</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Shipping Coverage</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>We offer Pan India shipping.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Delivery Timeline</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Within 300 km of Surat: 2-3 working days</li>
					<li>Other locations: 4-7 working days</li>
				</ul>
				<p className="leading-relaxed">
					Delivery timelines are estimates and may vary due to unforeseen circumstances such as weather, logistics delays, or high order volumes.
				</p>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Shipping Charges</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Free shipping on orders above ₹899.</li>
					<li>For orders below ₹899, shipping charges are calculated based on delivery location and will be communicated at the time of order confirmation.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Delivery Partner</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>We currently ship via Delhivery and other reliable courier partners as needed.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Packaging</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>All products are securely packed in sealed pouches to maintain freshness and hygiene.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Damaged Shipments</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>If your order arrives damaged, please contact us within 24-48 hours of delivery.</li>
					<li>A replacement will be provided free of cost after verification.</li>
					<li>Damaged shipment issues are typically processed within 24 hours, however timelines may vary depending on the transport partner.</li>
				</ul>
			</div>
		</div>
	);
}
