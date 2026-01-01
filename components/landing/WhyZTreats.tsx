import Image from "next/image";

interface WhyCard {
	id: number;
	title?: string;
	description?: string;
	bgColorValue?: string;
	textColor?: string;
	image?: string;
	span?: "row" | "col" | "both";
}

const cards: WhyCard[] = [
	{
		id: 1,
		title: "Handpicked Quality",
		description: "Only the finest nuts & dry fruits make it to our packs.",
		bgColorValue: "#7AC9B3",
		textColor: "#035D66",
	},
	{
		id: 2,
		title: "A Zippy Boost",
		description: "Clean, natural energy for every moment.",
		bgColorValue: "#FFD46C",
		textColor: "#6B5115",
	},
	{
		id: 3,
		image: "/assets/landing-page/a79911cdd730d226bd0c7b4fd9670d617072ecc9.jpg",
		bgColorValue: "#1F2937",
	},
	{
		id: 4,
		image: "/assets/landing-page/nuts-basket.jpg",
		bgColorValue: "#0D9488",
		span: "row",
	},
	{
		id: 5,
		title: "Smartly Healthy",
		description: "Wholesome snacks that make wellness effortless.",
		bgColorValue: "#6777B5",
		textColor: "#ffffff",
	},
	{
		id: 6,
		image: "/assets/landing-page/walnuts.png",
		bgColorValue: "#1F2937",
		span: "row",
	},
	{
		id: 7,
		title: "Always Fresh",
		description: "Our airtight, quality-first packaging ensures crispness and vibrant flavor.",
		bgColorValue: "#CAD183",
		textColor: "#6B5115",
	},
	{
		id: 8,
		title: "Made for Gifting",
		description: "Beautifully curated hampers designed to delight.",
		bgColorValue: "#F05D44",
		textColor: "#ffffff",
	},
];

export default function WhyZTreats() {
	return (
		<section className="w-full px-6 sm:px-12 py-8" style={{ backgroundColor: "#FFFFFF" }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex items-center gap-3 mb-4">
					<h2 className="text-4xl sm:text-5xl font-bold font-[amaranth] text-black">Why Z Treats</h2>
					<Image src="/assets/landing-page/spark.png" height={200} width={200} alt="Circle" className="w-12 h-12 sm:w-20 sm:h-20 -ml-8 -mt-4"/>
				</div>

				{/* Cards Grid - 3 Columns */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* COLUMN 1: Card 1 + Image 1 */}
					<div className="flex flex-col gap-6">
						{/* Card 1 - Handpicked Quality */}
					<div className="rounded-3xl p-8 flex flex-col justify-center items-center text-center min-h-28 lg:min-h-32" style={{ backgroundColor: cards[0].bgColorValue }}>
							<h3 className="text-2xl font-bold mb-2" style={{ color: cards[0].textColor }}>
								{cards[0].title}
							</h3>
						<p className="text-lg" style={{ color: cards[0].textColor }}>
								{cards[0].description}
							</p>
						</div>

					{/* Image 1 - Nuts Basket */}
					<div className="rounded-3xl overflow-hidden w-full h-[419.43px]" style={{ backgroundColor: cards[3].bgColorValue }}>
						{cards[3].image && <Image src={cards[3].image} alt="Nuts Basket" width={300} height={300} className="w-full h-full object-cover" />}
						</div>
					</div>

					{/* COLUMN 2: Card 2 + Card 5 + Card 7 */}
					<div className="flex flex-col gap-6 h-full">
						{/* Card 2 - A Zippy Boost */}
					<div className="rounded-3xl p-8 flex flex-col justify-center items-center text-center flex-1" style={{ backgroundColor: cards[1].bgColorValue }}>
							<h3 className="text-2xl font-bold mb-2" style={{ color: cards[1].textColor }}>
								{cards[1].title}
							</h3>
						<p className="text-lg" style={{ color: cards[1].textColor }}>
								{cards[1].description}
							</p>
						</div>

						{/* Card 5 - Smartly Healthy */}
					<div className="rounded-3xl p-8 flex flex-col justify-center items-center text-center flex-1" style={{ backgroundColor: cards[4].bgColorValue }}>
							<h3 className="text-2xl font-bold mb-2" style={{ color: cards[4].textColor }}>
								{cards[4].title}
							</h3>
						<p className="text-lg" style={{ color: cards[4].textColor }}>
								{cards[4].description}
							</p>
						</div>

						{/* Card 7 - Always Fresh */}
					<div className="rounded-3xl p-8 flex flex-col justify-center items-center text-center flex-1" style={{ backgroundColor: cards[6].bgColorValue }}>
							<h3 className="text-2xl font-bold mb-2" style={{ color: cards[6].textColor }}>
								{cards[6].title}
							</h3>
						<p className="text-lg" style={{ color: cards[6].textColor }}>
								{cards[6].description}
							</p>
						</div>
					</div>

					{/* COLUMN 3: Image 2 + Card 8 */}
					<div className="flex flex-col gap-6">
					{/* Image 2 - Walnuts */}
					<div className="rounded-3xl overflow-hidden w-full h-[419.43px]" style={{ backgroundColor: cards[2].bgColorValue }}>
						{cards[2].image && <Image src={cards[2].image} alt="Walnuts" width={100} height={100} className="w-full h-full object-cover" />}
						</div>

						{/* Card 8 - Made for Gifting */}
					<div className="rounded-3xl p-8 flex flex-col justify-center items-center text-center min-h-28 lg:min-h-32" style={{ backgroundColor: cards[7].bgColorValue }}>
							<h3 className="text-2xl font-bold mb-2" style={{ color: cards[7].textColor }}>
								{cards[7].title}
							</h3>
						<p className="text-lg" style={{ color: cards[7].textColor }}>
								{cards[7].description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
