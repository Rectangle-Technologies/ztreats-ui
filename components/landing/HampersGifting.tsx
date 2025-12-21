import Image from "next/image";

interface Hamper {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
}

const hampers: Hamper[] = [
	{
		id: 1,
		title: "Hamper 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/hamper.png",
		price: 9.49,
	},
	{
		id: 2,
		title: "Hamper 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/hamper.png",
		price: 9.49,
	},
	{
		id: 3,
		title: "Hamper 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/hamper.png",
		price: 9.49,
	},
	{
		id: 4,
		title: "Hamper 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/hamper.png",
		price: 9.49,
	},
];

export default function HampersGifting() {
	return (
		<section className="w-full px-6 sm:px-12 py-12" style={{ backgroundColor: "#F7F7F5" }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex items-center gap-3 mb-8">
					<h2 className="text-4xl sm:text-5xl font-bold text-black">Hampers & Gifting</h2>
					<Image src="/assets/landing-page/hamperstar.png" height={200} width={200} alt="Circle" className="w-12 h-12 -ml-4 -mt-4"/>
				</div>

				{/* Hampers Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid=cols-3 lg:grid-cols-4 gap-6">
					{hampers.map((hamper) => (
						<div key={hamper.id} className="flex flex-col">
							{/* Image Container */}
							<div className="relative h-64 mb-4 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
								<Image
									src={hamper.image}
									alt={hamper.title}
									width={300}
									height={300}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Content */}
							<div>
								<h3 className="text-xl font-bold text-black mb-2">{hamper.title}</h3>
								<p className="text-sm text-gray-600 mb-4">{hamper.description}</p>
								<p className="text-2xl font-bold text-black">${hamper.price.toFixed(2)}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
