import { Metadata } from "next";
import { Suspense } from "react";
import FriedVsDriedBanner from "@/components/products/FriedVsDriedBanner";
import ProductListing from "@/components/products/ProductListing";
import ProductsGallery from "@/components/products/ProductsGallery";
import FAQSection from "@/components/products/FAQSection";

export const metadata: Metadata = {
	title: "Products - Premium Nuts & Dry Fruits",
	description:
		"Browse our complete collection of premium nuts, dry fruits, and snacks. Roasted cashews, almonds, walnuts, pistachios, and more. Fresh quality guaranteed.",
	keywords: [
		"buy cashews online",
		"roasted almonds",
		"premium walnuts",
		"dry fruits online",
		"healthy snacks",
		"pistachios",
		"mixed nuts",
	],
	openGraph: {
		title: "ZTreats Products - Premium Nuts & Dry Fruits",
		description:
			"Shop our complete collection of premium nuts, dry fruits, and healthy snacks.",
		url: "https://ztreats.com/products",
		type: "website",
	},
	alternates: {
		canonical: "/products",
	},
};

function ProductListingFallback() {
	return (
		<div className="w-full px-6 sm:px-12 py-12">
			<div className="mx-auto max-w-7xl">
				<div className="animate-pulse">
					<div className="h-10 bg-gray-200 rounded w-64 mb-8"></div>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
						{[...Array(8)].map((_, i) => (
							<div key={i} className="bg-gray-200 rounded-xl h-64"></div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function ProductPage() {
	return (
		<section className="bg-[#F7F7F5]">
			<FriedVsDriedBanner />
			<Suspense fallback={<ProductListingFallback />}>
				<ProductListing />
			</Suspense>
			<ProductsGallery />
			<FAQSection />
		</section>
	);
}
