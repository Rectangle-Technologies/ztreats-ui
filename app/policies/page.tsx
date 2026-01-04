import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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

const policies = [
	{
		title: "Privacy Policy",
		description: "Learn how we collect, use, and protect your personal information.",
		href: "/policies/privacy",
	},
	{
		title: "Terms & Conditions",
		description: "Read our terms of service and conditions for using our website.",
		href: "/policies/terms",
	},
	{
		title: "Shipping Policy",
		description: "Information about delivery timelines, shipping charges, and tracking.",
		href: "/policies/shipping",
	},
	{
		title: "Return & Refund Policy",
		description: "Understand our return eligibility and refund process.",
		href: "/policies/refund",
	},
];

function PolicyPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-5xl font-bold font-[amaranth] mb-12">Policies</h1>

			<div className="grid gap-6 md:grid-cols-2">
				{policies.map((policy) => (
					<Link
						key={policy.href}
						href={policy.href}
						className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
					>
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-2xl font-bold font-[amaranth] mb-2 group-hover:text-lime-600 transition-colors">
									{policy.title}
								</h2>
								<p className="text-gray-600">{policy.description}</p>
							</div>
							<ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-lime-600 transition-colors" />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default PolicyPage;
