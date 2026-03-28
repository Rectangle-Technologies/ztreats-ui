import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms & Conditions | ZTreats",
	description:
		"Read ZTreats' Terms and Conditions. Covers website usage, order acceptance, pricing, payments, cancellations, and jurisdiction.",
	keywords: ["terms and conditions", "terms of service", "ZTreats terms", "order policy", "Surat"],
	openGraph: {
		title: "Terms & Conditions | ZTreats",
		description: "Read ZTreats' Terms and Conditions for using our website and placing orders.",
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
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
			<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[amaranth] mb-8 lg:mb-12">Terms &amp; Conditions</h1>

			<div className="space-y-4 text-gray-700">
				<p className="leading-relaxed">
					By placing an order or accessing the ZTreats website, you agree to be bound by the following Terms and Conditions.
				</p>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Website Usage</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>This website is intended for product display and informational purposes only.</li>
					<li>Orders are placed manually via WhatsApp, phone, or Instagram.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Order Acceptance</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>ZTreats reserves the right to accept or refuse any order at its sole discretion.</li>
					<li>Delivery timelines may vary, especially for customised orders.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Pricing</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>All prices are subject to change without prior notice.</li>
					<li>Final pricing will be confirmed during order placement.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Payments</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>UPI</li>
					<li>Cash on Delivery (COD)</li>
					<li>Cash</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Order Cancellation</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Orders can be cancelled before payment is collected or confirmed.</li>
					<li>Once payment is completed or the order is processed, cancellation may not be possible.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>All content on this website, including images, text, and branding, is the property of ZTreats and may not be used without prior permission.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">User Eligibility</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>Users must be 18 years or older to place an order.</li>
				</ul>
				<h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Jurisdiction</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>All disputes are subject to the jurisdiction of courts in Surat, Gujarat.</li>
				</ul>
			</div>
		</div>
	);
}
