import HeroCarousel from '@/components/HeroCarousel';
import ProductGrid from '@/components/ProductGrid';
import FeedbackSection from '@/components/FeedbackSection';
import PopularMenu from '@/components/PopularMenu';
import WhyZTreats from '@/components/WhyZTreats';
import HampersGifting from '@/components/HampersGifting';
import ClientsTestimonials from '@/components/ClientsTestimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
		<>
			<section className="bg-gray-200">
				<div className="max-w-7xl  mx-auto ">
					<HeroCarousel />
				</div>
			</section>
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
