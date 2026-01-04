import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = ["/assets/about/product-1.jpg", "/assets/about/product-2.png", "/assets/about/product-3.jpg", "/assets/about/product-4.jpg", "/assets/about/product-5.jpg", "/assets/about/product-6.png"];

export default function WhatZStandsFor() {
	return (
		<section className="w-full bg-[#055066]">
			<div className="mx-auto max-w-7xl px-0">
				<div className="flex flex-col lg:flex-row h-[80vh] overflow-hidden">
					{/* Left Content - Teal Background */}
					<div className="w-full lg:w-[55%] text-white px-8 sm:px-12 py-4 md:py-8 flex flex-col justify-center">
						<div>
							<h2 className="text-2xl md:text-5xl font-bold mb-2 font-[amaranth]">
								What <span className="text-white">&quot;Z&quot;</span> Stands for
								<span className="text-[#FFD46C] block h-1 w-12 mt-2"></span>
							</h2>

							<p className="text-sm md:text-lg leading-relaxed mb-8 mt-6">
								The &quot;Z&quot; in ZTreats stands for Zippy – a spirit of freshness, vitality, and effortless energy. It reflects our belief that good nutrition should feel light, lively, and easy to enjoy — not heavy, boring, or complicated. At ZTreats, wellness
								isn&apos;t about slowing down. It&apos;s about staying energized, feeling good, and choosing better — one delicious moment at a time.
							</p>

							<p className="text-sm md:text-lg mb-4">Zippy means:</p>

							<ul className="space-y-3 text-sm md:text-lg">
								<li className="flex items-start gap-3">
									<span className="text-[#FFD46C] font-bold mt-1">•</span>
									<span>
										<strong>Pure, high-quality ingredients</strong>
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-[#FFD46C] font-bold mt-1">•</span>
									<span>
										<strong>Naturally energizing nutrition</strong>
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-[#FFD46C] font-bold mt-1">•</span>
									<span>
										<strong>Thoughtfully crafted, premium presentation</strong>
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Right Content - Image Grid (Desktop) / Marquee (Mobile) */}
					<div className="w-full lg:w-[45%] hidden lg:flex px-4 sm:px-8">
						<div className="grid grid-cols-2 h-full gap-4" style={{ width: "100%" }}>
							<div className="h-full flex flex-col gap-2">
								{/* Row 1, Col 1: 30% */}
						<div className="overflow-hidden relative" style={{ height: "25%" }}>
									<Image src={images[0]} alt="Product" fill className="w-full h-full object-cover rounded-b-lg" />
								</div>
								{/* Row 2, Col 1: 45% */}
						<div className="overflow-hidden" style={{ height: "30%" }}>
									<Image src={images[2]} alt="Product" width={300} height={225} className="w-full h-full object-cover rounded-lg" />
								</div>
								{/* Row 3, Col 1: 25% */}
						<div className="overflow-hidden" style={{ height: "45%" }}>
									<Image src={images[4]} alt="Product" width={300} height={125} className="w-full h-full object-cover rounded-t-lg" />
								</div>
							</div>

							<div className="h-full flex flex-col gap-2">
								{/* Row 1, Col 2: 25% */}
						<div className="overflow-hidden" style={{ height: "40%" }}>
									<Image src={images[1]} alt="Product" width={300} height={125} className="w-full h-full object-cover rounded-b-lg" />
								</div>

								{/* Row 2, Col 2: 45% */}
						<div className="overflow-hidden" style={{ height: "30%" }}>
									<Image src={images[3]} alt="Product" width={300} height={225} className="w-full h-full object-cover rounded-lg" />
								</div>

								{/* Row 3, Col 2: 30% */}
								<div className="overflow-hidden" style={{ height: "30%" }}>
									<Image src={images[5]} alt="Product" width={300} height={150} className="w-full h-full object-cover rounded-t-lg" />
								</div>
							</div>
						</div>
					</div>

					{/* Mobile Marquee */}
					<div className="w-full lg:hidden px-4 sm:px-8 space-y-4 pb-6">
						{/* Row 1 */}
						<Marquee speed={50} pauseOnHover={true} gradient={false}>
							{[images[0], images[2], images[4], images[0], images[2], images[4]].map((image, index) => (
								<div key={`row1-${index}`} className="shrink-0 mx-2 w-60 h-40">
									<Image src={image} alt={`Product Row 1 ${index + 1}`} width={240} height={160} className="w-full h-full rounded-lg object-cover" />
								</div>
							))}
						</Marquee>

						{/* Row 2 */}
						<Marquee speed={30} pauseOnHover={true} gradient={false}>
							{[images[1], images[3], images[5], images[1], images[3], images[5]].map((image, index) => (
								<div key={`row2-${index}`} className="shrink-0 mx-2 w-60 h-40">
									<Image src={image} alt={`Product Row 2 ${index + 1}`} width={240} height={160} className="w-full h-full rounded-lg object-cover" />
								</div>
							))}
						</Marquee>
					</div>
				</div>
			</div>
		</section>
	);
}
