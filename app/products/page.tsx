import { Metadata } from "next";
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

export default function ProductPage() {
  return (
		<section className="bg-[#F7F7F5]">
			<FriedVsDriedBanner />
			<ProductListing />
			<ProductsGallery />
			<FAQSection />
		</section>
  );
}
