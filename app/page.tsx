import HeroCarousel from "@/components/landing/HeroCarousel";
import ProductGrid from "@/components/landing/ProductGrid";
import FeedbackSection from "@/components/landing/FeedbackSection";
import PopularMenu from "@/components/landing/PopularMenu";
import WhyZTreats from "@/components/landing/WhyZTreats";
import HampersGifting from "@/components/landing/HampersGifting";
import ClientsTestimonials from "@/components/landing/ClientsTestimonials";
import CTASection from "@/components/landing/CTASection";

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
