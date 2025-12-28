import Image from "next/image";
import { PaddedButton } from "@/components/PaddedButton";
import ProductCard from "@/components/landing/ProductCard";
import { products } from "@/data/products";

export default function PopularMenu() {
	return (
		<section className="w-full px-6 sm:px-12 py-12" style={{ backgroundColor: "#F7F7F5" }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex items-center justify-between mb-12">
					<div className="flex items-center gap-3 text-4xl sm:text-5xl font-bold relative">
						<Image src="/assets/landing-page/Circle 47.png" height={400} width={400} alt="Circle" className="absolute w-4/5  -left-10  mt-8" />
						<h2 className="">Popular</h2>
						<h2 className="text-4xl sm:text-5xl font-bold">Menu</h2>
					</div>
					<PaddedButton size="xl" className="bg-teal-700 hover:bg-teal-800 text-white">
						View More
					</PaddedButton>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
		</section>
	);
}
