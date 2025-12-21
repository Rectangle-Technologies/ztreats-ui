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
		imageSrc: "/assets/landing-page/blueberry ct1.jpg",
	},
	{
		title: "Elegantly Finished",
		description: "From refined packaging to final presentation, every ZTreats pack is crafted to arrive beautifully — fresh, trusted, and thoughtfully made.",
	},
];

const productImages = [
	"/assets/about/walnut-product.png",
	"/assets/about/mixture-nuts.png",
	"/assets/landing-page/blueberry ct1.jpg",
	"/assets/about/gift-hamper.png",
	"/assets/about/product-5.jpg",
	"/assets/about/product-6.png",
];

export default function CurationProcess() {
	return (
		<section className="w-full bg-[#F5F5F0] py-16">
			<div className="mx-auto max-w-7xl px-8 sm:px-12">
				{/* Hero Section */}
				<div className="mb-16 flex justify-between items-start">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">
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
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Timeline */}
					<div className="space-y-8">
						{timelineItems.map((item, index) => (
							<div key={index} className="flex gap-6">
								{/* Timeline Dot and Line */}
								<div className="flex flex-col items-center">
									<div className="w-4 h-4 rounded-full bg-[#D9560E] ring-4 ring-[#F5F5F0]"></div>
									{index !== timelineItems.length - 1 && <div className="w-1 h-20 bg-[#D9560E] mt-2"></div>}
								</div>

								{/* Content */}
								<div className="pt-1">
									<h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
									<p className="text-sm text-[#666] leading-relaxed max-w-sm">{item.description}</p>
								</div>
							</div>
						))}
					</div>

					{/* Product Images Stack */}
					<div className="flex justify-center items-center">
						<div className="relative w-full max-w-sm h-[500px]">
							{/* Image 1 - Top */}
							<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32">
								<Image src={productImages[0]} alt="Premium treats" width={128} height={128} className="w-full h-full object-contain" />
							</div>

							{/* Image 2 - Top Right Area */}
							<div className="absolute top-20 right-12 w-28 h-28">
								<Image src={productImages[1]} alt="Premium treats" width={112} height={112} className="w-full h-full object-contain" />
							</div>

							{/* Image 3 - Middle Left */}
							<div className="absolute top-40 left-8 w-24 h-24">
								<Image src={productImages[2]} alt="Premium treats" width={96} height={96} className="w-full h-full object-contain" />
							</div>

							{/* Image 4 - Middle Right */}
							<div className="absolute top-1/2 right-0 w-32 h-32 transform -translate-y-1/2">
								<Image src={productImages[3]} alt="Premium treats" width={128} height={128} className="w-full h-full object-contain" />
							</div>

							{/* Image 5 - Bottom Left */}
							<div className="absolute bottom-12 left-0 w-28 h-28">
								<Image src={productImages[4]} alt="Premium treats" width={112} height={112} className="w-full h-full object-contain" />
							</div>

							{/* Image 6 - Bottom Right */}
							<div className="absolute bottom-0 right-8 w-24 h-24">
								<Image src={productImages[5]} alt="Premium treats" width={96} height={96} className="w-full h-full object-contain" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
