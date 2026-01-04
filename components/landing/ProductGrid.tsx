"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PaddedButton } from "@/components/PaddedButton";

interface ProductCard {
	id: number;
	title: string;
	subtitle?: string;
	image: string;
	overlay?: boolean;
}

const products: ProductCard[] = [
	{
		id: 1,
		title: "Crunch you",
		subtitle:"can trust.",
		image: "/assets/landing-page/a79911cdd730d226bd0c7b4fd9670d617072ecc9.jpg",
		overlay: true,
	},
	{
		id: 2,
		title: "Cashews",
		image: "/assets/landing-page/cashews.jpg",
		overlay: true,
	},
	{
		id: 3,
		title: "Mixed Nuts",
		subtitle: "Assorted Nuts",
		image: "/assets/landing-page/blueberry ct1.jpg",
		overlay: true,
	},
	{
		id: 4,
		title: "Gift Hampers",
		image: "/assets/landing-page/gift hampers.jpg",
		overlay: true,
	},
];

export default function ProductGrid() {
	const router = useRouter();

	return (
		<section className="w-full px-6 sm:px-12 py-12 bg-white">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Left Featured Card */}
					<div className="lg:col-span-1 bg-[#D9560E] rounded-3xl p-8 text-white flex flex-col justify-between items-start">
						<div>
							<h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
								Rooted in quality.
								<br />
								Wrapped with care.
							</h2>
							<p className="text-sm sm:text-lg leading-relaxed mb-8">
								Founded in 2018, this brand started with a simple idea — premium nuts that taste honest, and gift hampers people are proud to give.
								<br />
								<br />
								No fillers. No flashy nonsense. Just thoughtfully sourced goodness.
							</p>
						</div>
						<PaddedButton variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white/10 sm:w-auto" onClick={() => router.push('/products')}>
							Discover the collection →
						</PaddedButton>
					</div>

					{/* Right Grid - Products */}
					<div className="lg:col-span-2 h-full">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
							{/* Left column - 2 cards on top, 1 large card below */}
							<div className="lg:col-span-2 flex flex-col gap-6 h-full">
								{/* Top row - 2 small cards */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div className="relative rounded-3xl overflow-hidden h-52">
										<Image src={products[0].image} alt={products[0].title} fill className="object-cover" />
										<div className="absolute inset-0 bg-black/30" />
										<div className="absolute inset-0 flex items-center justify-center px-4">
											<div className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
												<p className="text-white text-center font-normal text-base sm:text-lg">{products[0].title}</p>
										{products[0].subtitle && <p className="text-white/90 font-normal text-base sm:text-lg text-center">{products[0].subtitle}</p>}
											</div>
										</div>
									</div>

									<div className="relative rounded-3xl overflow-hidden h-52">
										<Image src={products[1].image} alt={products[1].title} fill className="object-cover" />
										<div className="absolute inset-0 bg-black/30" />
										<div className="absolute inset-0 flex items-center justify-center px-4">
											<div className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
												<p className="text-white text-center font-normal text-base sm:text-lg">{products[1].title}</p>
										{products[1].subtitle && <p className="text-white/90 font-normal text-base sm:text-lg text-center">{products[1].subtitle}</p>}
											</div>
										</div>
									</div>
								</div>

								{/* Bottom large card */}
								<div className="relative rounded-3xl overflow-hidden flex-1">
									<Image src={products[3].image} alt={products[3].title} fill className="object-cover" />
									<div className="absolute inset-0 bg-black/30" />
									<div className="absolute inset-0 flex items-center justify-center px-4">
										<div className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
											<p className="text-white text-center font-normal text-base sm:text-lg">{products[3].title}</p>
								{products[3].subtitle && <p className="text-white/90 font-normal text-base sm:text-lg text-center">{products[3].subtitle}</p>}
										</div>
									</div>
								</div>
							</div>

							{/* Right column - 1 large card */}
							<div className="relative rounded-3xl overflow-hidden h-full min-h-80 lg:min-h-0">
								<Image src={products[2].image} alt={products[2].title} fill className="object-cover" />
								<div className="absolute inset-0 bg-black/30" />
								<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
									<div className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
										<p className="text-white font-normal text-base sm:text-lg">{products[2].title}</p>
								{products[2].subtitle && <p className="text-white/90 font-normal text-base sm:text-lg text-center">{products[2].subtitle}</p>}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
