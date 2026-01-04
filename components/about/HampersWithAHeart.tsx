"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PaddedButton } from "../PaddedButton";

export default function HampersWithAHeart() {
	const router = useRouter();

	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-8 sm:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
					<div className="flex flex-col justify-center">
						<div className="text-2xl md:text-4xl font-bold mb-4 flex items-center">
							<h1 className="font-[amaranth]">
								HAMPERS WITH A
								HEART
							</h1>
							<Image src={"/assets/about/heart.png"} alt="Heart Icon" height={100} width={100} className="" />
						</div>

						<p className="text-sm md:text-base leading-relaxed mb-6 text-[#666]">Our hampers are not just products, they are gestures of care, celebration, and connection.</p>

						<p className="text-sm md:text-base leading-relaxed mb-8 text-[#666]">Whether it&apos;s a festival, corporate gift, travel essential, or a personal surprise – ZTreats makes every moment memorable.</p>

						<div>
						<PaddedButton className="bg-white border-2 border-[#055066] text-[#055066] hover:bg-[#055066] hover:text-white py-6" onClick={() => router.push('/products')}>Explore Gift Hampers</PaddedButton>
						</div>
					</div>

					{/* Right Content - Image Grid */}
					<div className="relative overflow-hidden rounded-lg h-80 md:h-96 lg:h-full">
						<Image src={"/assets/about/hampers.png"} alt={`Hamper image`} fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
					</div>
				</div>
			</div>
		</section>
	);
}
