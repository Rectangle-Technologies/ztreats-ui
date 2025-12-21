import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { PaddedButton } from "@/components/PaddedButton";
import { Button } from "../ui/button";

interface ProductItem {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	originalPrice?: number;
	discount?: number;
	rating: number;
	reviews: number;
	inStock: boolean;
}

const products: ProductItem[] = [
	{
		id: 1,
		name: "Cashew Nuts",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/cashew-package.png",
		price: 200,
		rating: 5.0,
		reviews: 10,
		inStock: true,
	},
	{
		id: 2,
		name: "Cashew Nuts",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/cashew-package.png",
		price: 200,
		rating: 5.0,
		reviews: 10,
		inStock: false,
	},
	{
		id: 3,
		name: "Cashew Nuts",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/cashew-package.png",
		price: 200,
		originalPrice: 400,
		discount: 50,
		rating: 5.0,
		reviews: 10,
		inStock: true,
	},
	{
		id: 4,
		name: "Cashew Nuts",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
		image: "/assets/landing-page/cashew-package.png",
		price: 200,
		originalPrice: 400,
		discount: 50,
		rating: 5.0,
		reviews: 10,
		inStock: true,
	},
];

export default function PopularMenu() {
	return (
		<section className="w-full px-6 sm:px-12 py-12" style={{ backgroundColor: "#F7F7F5" }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex items-center justify-between mb-12">
					<div className="flex items-center gap-3 text-4xl sm:text-5xl font-bold relative">
						<Image src="/assets/landing-page/Circle 47.png" height={400} width={400} alt="Circle" className="absolute w-4/5  -left-10  mt-8"/>
						<h2 className="">Popular</h2>
						<h2 className="text-4xl sm:text-5xl font-bold">Menu</h2>
					</div>
					<PaddedButton size="xl" className="bg-teal-700 hover:bg-teal-800 text-white">
						View More
					</PaddedButton>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{products.map((product) => (
						<div key={product.id} className=" rounded-3xl  flex flex-col h-full mt-20">
							{/* Product Image */}
							<div className="relative h-64 bg-white flex items-center justify-center border rounded-lg">
								<Image src={product.image} alt={product.name} width={250} height={250} className="object-contain absolute -top-1/6 w-full h-full" />
								{product.discount && (
									<svg className="absolute -top-8 -left-4 -rotate-12 w-20 h-20 p-3 drop-shadow-lg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
										<defs>
											<filter id="shadow">
												<feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
											</filter>
										</defs>
										<circle cx="50" cy="50" r="48" fill="#FFD400" filter="url(#shadow)" />
										<text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="32" fontWeight="bold" fill="#000000">
											-{product.discount}%
										</text>
									</svg>
								)}
							</div>

							{/* Product Info */}
							<div className="p-6 flex-1 flex flex-col">
								<h3 className="text-xl font-bold text-black mb-1">{product.name}</h3>
								<p className="text-sm text-gray-600 italic mb-4">{product.description}</p>

								{/* Rating and Stock */}
								<div className="flex items-center justify-between mb-4 text-sm">
									<div className="flex items-center gap-1">
										<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
										<span className=" text-gray-800">
											{product.rating} ({product.reviews} Reviews)
										</span>
									</div>
									<span className={` ${product.inStock ? "text-green-600" : "text-red-600"}`}>{product.inStock ? "In Stock" : "Out of Stock"}</span>
								</div>

								{/* Price */}
								<div className="flex items-center gap-2 mb-6">
									<span className="text-2xl  text-black">${product.price}</span>
									{product.originalPrice && <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>}
								</div>

								{/* Button */}
								<div className="flex gap-3">
									<Button className="flex-1 bg-gray-900 hover:bg-gray-700 text-white py-3 px-4 transition-colors h-full cursor-pointer">Order On Whatsapp</Button>
									<button className="rounded-lg hover:bg-gray-100 transition-colors p-3 cursor-pointer">
										<Heart className="w-6 h-6 text-gray-600" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
