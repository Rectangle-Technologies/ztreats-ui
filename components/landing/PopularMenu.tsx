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

					{/* Heading */}
					<div className="flex items-center gap-3 text-4xl sm:text-5xl font-bold font-[amaranth]">

						{/* Popular (with circle) */}
						<div className="relative inline-block">

							<span className="relative z-10">Popular</span>

							<Image
								src="/assets/landing-page/Circle 47.png"
								width={500}
								height={500}
								alt="Circle"
								className="absolute left-1/2 top-[85%] w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
							/>
						</div>

						<span>Menu</span>
					</div>

					{/* Button */}
					<PaddedButton
						size="lg"
						className="bg-teal-800 hover:bg-teal-700 text-white text-base p-7"
						onClick={() => router.push("/products")}
					>
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
