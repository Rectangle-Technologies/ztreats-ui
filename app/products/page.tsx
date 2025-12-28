import FriedVsDriedBanner from "@/components/products/FriedVsDriedBanner";
import ProductListing from "@/components/products/ProductListing";
import ProductsGallery from "@/components/products/ProductsGallery";
import FAQSection from "@/components/products/FAQSection";

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
