import Image from "next/image";

export default function VisionAndMission() {
	return (
		<section className="w-full bg-white pt-2 md:py-4">
			<div className="mx-auto">
				<div className="grid grid-cols-1 gap-10">
					{/* Left - Vision */}
					<div className="relative w-screen">
						<h2 className="text-3xl md:text-5xl px-8 md:px-10 font-bold mb-4 font-[amaranth]">Our Vision</h2>
						<div className="bg-[#B8956A] text-white p-8 md:p-10 lg:w-1/2">
							<p className="text-base md:text-lg leading-relaxed">
								To make wholesome snacking a natural part of everyday life by offering <strong>premium, pure, and energising treats</strong> that elevate wellness with elegance, vitality, and effortless enjoyment.
							</p>
						</div>
						{/* Cashew Image */}
						<Image src="/assets/about/cashew.png" alt="Cashew" fill className="w-full h-full hidden lg:flex object-contain drop-shadow-lg absolute top-0 right-0 rotate-180" />
					</div>

					{/* Right - Mission */}
					<div className="relative w-screen flex flex-col lg:items-end">
						<h2 className="lg:w-1/2 text-3xl md:text-5xl font-bold px-8 md:px-10 mb-4 text-[#1a1a1a] font-[amaranth]">Our Mission</h2>

						<div className="bg-[#FFD46C] pl-8 py-8 md:p-10 lg:w-1/2">
							<p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]">At ZTreats, our mission is to deliver thoughtfully curated dry fruits, nuts, and gourmet hampers that blend purity with sophistication.</p>
							<p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]">
								We aim to inspire <strong>smarter, healthier choices with nourishing snacks crafted with exceptional quality, a touch of luxury, and zippy freshness</strong> — empowering vibrant, fulfilling lives.
							</p>
						</div>
						{/* Walnut Images */}
						<Image src="/assets/about/walnuts.png" alt="Walnuts" width={160} height={160} className="w-full h-full object-contain drop-shadow-lg absolute top-0 -left-20 -rotate-45 hidden lg:flex" />
					</div>
				</div>
			</div>
		</section>
	);
}
