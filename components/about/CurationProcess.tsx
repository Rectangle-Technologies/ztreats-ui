import Image from "next/image";
import { PaddedButton } from "../PaddedButton";

const timelineItems = [
	{
		title: "Selectively Sourced",
		description: "We begin with a careful selection of premium dry fruits, nuts, and berries — chosen for superior quality, freshness, and taste.",
		imageSrc: "/assets/about/walnut-product.png",
	},
	{
		title: "Expertly Refined",
		description: "Each batch is meticulously hand-sorted and quality-checked to ensure only the finest makes it through.",
		imageSrc: "/assets/about/mixture-nuts.png",
	},
	{
		title: "Impeccably Sealed",
		description: "Packed in a clean, controlled environment, every product is sealed to preserve its natural freshness and richness.",
		imageSrc: "/assets/about/6a2a76e0a09046dc25ca892070e4ffa16521d50a.png",
	},
	{
		title: "Elegantly Finished",
		description: "From refined packaging to final presentation, every ZTreats pack is crafted to arrive beautifully — fresh, trusted, and thoughtfully made.",
	},
];

export default function CurationProcess() {
	return (
		<section className="w-full bg-[#F5F5F0] py-16 relative">
			<div className="mx-auto max-w-7xl px-8 sm:px-12  mb-20">
				{/* Hero Section */}
				<div className="mb-16 flex flex-col lg:flex-row justify-between  items-center lg:items-start">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 font-[amaranth]">
						Thoughtfully Curated.
						<br />
						<span className="relative inline-block">
							Beautifully Delivered.
							<span className="absolute bottom-0 left-0 right-0 h-1 bg-[#D9560E] rounded-full" style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}></span>
						</span>
					</h2>
					<div className="flex justify-center mt-8">
						<PaddedButton variant="outline" className="bg-inherit border border-[#055066] hover:bg-[#055066] hover:text-white text-[#055066]">
							See our best sellers
						</PaddedButton>
					</div>
				</div>

				{/* Timeline and Images Section */}
				<div className="space-y-0">
					{timelineItems.map((item, index) => (
						<div key={index} className="flex items-stretch gap-2 md:gap-8">
							{/* Left side - Text (always) or Image (alternating) */}
							<div className="flex-1 flex items-start">
								{index % 2 === 1 && item.imageSrc ? (
									<div className="flex w-full justify-end">
										<Image src={item.imageSrc} alt={item.title} height={200} width={200} className="md:-mt-10" />
									</div>
								) : index % 2 === 0 ? (
									<div className="flex flex-col items-end justify-start">
										<h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
										<p className="text-sm text-[#666] text-end leading-relaxed max-w-md">{item.description}</p>
									</div>
								) : null}
							</div>

							{/* Timeline - Center */}
							<div className="flex flex-col items-center shrink-0">
								<div className="w-4 h-4 rounded-full bg-[#D9560E] ring-4 ring-[#F5F5F0]"></div>
								{index !== timelineItems.length - 1 && <div className="w-0.5 grow bg-[#D9560E]"></div>}
							</div>

							{/* Right side - Image (alternating) or Text (if no image and odd index, or if odd with image) */}
							<div className="flex-1 flex items-start">
								{index % 2 === 0 && item.imageSrc ? (
									<div className="">
										<Image src={item.imageSrc} alt={item.title} height={200} width={200} className="md:-mt-30" />
									</div>
								) : index % 2 === 1 ? (
									<div>
										<h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
										<p className="text-sm text-[#666] leading-relaxed max-w-md">{item.description}</p>
									</div>
								) : null}
							</div>
						</div>
					))}
				</div>
			</div>
			<Image src="/assets/about/gift-hamper.png" alt="Gift hamper image from ZTreats" height={200} width={200} className="absolute bottom-0 left-0 md:hidden" />
			<Image src="/assets/about/gift-hamper.png" alt="Gift hamper image from ZTreats" height={300} width={300} className="absolute bottom-0 left-0 hidden md:flex" />
		</section>
	);
}
