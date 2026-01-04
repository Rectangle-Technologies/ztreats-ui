import { Metadata } from "next";
import HeroCarousel from "@/components/landing/HeroCarousel";
import ProductGrid from "@/components/landing/ProductGrid";
import FeedbackSection from "@/components/landing/FeedbackSection";
import PopularMenu from "@/components/landing/PopularMenu";
import WhyZTreats from "@/components/landing/WhyZTreats";
import HampersGifting from "@/components/landing/HampersGifting";
import ClientsTestimonials from "@/components/landing/ClientsTestimonials";
import CTASection from "@/components/landing/CTASection";

export const metadata: Metadata = {
	title: "Home - Premium Nuts, Dry Fruits & Gift Hampers",
	description:
		"Welcome to ZTreats! Shop premium quality roasted cashews, almonds, walnuts, and beautifully curated gift hampers. Perfect for healthy snacking and gifting.",
	keywords: [
		"buy nuts online",
		"premium dry fruits",
		"gift hampers India",
		"healthy snacks",
		"roasted cashews",
		"almonds online",
	],
	openGraph: {
		title: "ZTreats - Premium Nuts, Dry Fruits & Gift Hampers",
		description:
			"Shop premium quality roasted cashews, almonds, walnuts, and beautifully curated gift hampers.",
		url: "https://ztreats.com",
		type: "website",
	},
	alternates: {
		canonical: "/",
	},
};

export default function Home() {
	return (
		<>
			<div className="max-w-7xl  mx-auto pb-6">
				<HeroCarousel />
			</div>
			<ProductGrid />
			<FeedbackSection />
			<PopularMenu />
			<WhyZTreats />
			<HampersGifting />
			<ClientsTestimonials />
			<CTASection />
		</>
	);
}
