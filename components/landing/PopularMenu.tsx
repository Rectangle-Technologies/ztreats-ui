"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PaddedButton } from "@/components/PaddedButton";
import ProductCard from "@/components/landing/ProductCard";
import { popularProducts } from "@/data/products";

export default function PopularMenu() {
	const router = useRouter();

	return (
		<section className="w-full px-6 sm:px-12 py-12" style={{ backgroundColor: "#F7F7F5" }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex flex-col gap-8 lg:flex-row items-center justify-between lg:mb-12">
					<div className="flex items-center gap-3 text-4xl sm:text-5xl font-bold font-[amaranth] relative">
						<Image src="/assets/landing-page/Circle 47.png" height={500} width={500} alt="Circle" className="absolute w-10/11  -left-10 lg:-left-14  mt-10" />
						<h2 className="">Popular</h2>
						<h2 className="text-4xl sm:text-5xl font-bold">Menu</h2>
					</div>
					<PaddedButton size="lg" className="bg-teal-800 hover:bg-teal-700 text-white text-base p-7" onClick={() => router.push('/products')}>
						View More
					</PaddedButton>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
					{popularProducts.map((product) => (
						<ProductCard key={product.id} {...product} page="landing" />
					))}
				</div>
			</div>
		</section>
	);
}
