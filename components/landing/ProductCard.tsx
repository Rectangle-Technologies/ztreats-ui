import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProductCardProps {
	name: string;
	description?: string;
	image: string[];
	price: number;
	originalPrice?: number;
	discount?: number;
	page: string;
}

export default function ProductCard({ name, description, image, price, originalPrice, discount, page = "landing" }: ProductCardProps) {
	return (
		<div className={`rounded-3xl relative flex flex-col mt-5 justify-between ${page === "landing" ? "" : ""}`}>
			{discount && (
				<svg className="absolute -top-8 -left-4 -rotate-12 w-20 h-20 p-3 drop-shadow-lg z-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<filter id="shadow">
							<feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
						</filter>
					</defs>
					<circle cx="50" cy="50" r="48" fill="#FFD400" filter="url(#shadow)" />
					<text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="32" fontWeight="bold" fill="#000000">
						-{discount}%
					</text>
				</svg>
			)}
			{/* Product Image Carousel */}
			{page === "landing" ? (
				<div className=" bg-white border rounded-lg overflow-hidden">
					<Carousel className="w-full h-full">
						<CarouselContent className="">
							{image.map((img, index) => (
								<CarouselItem key={index} className="">
									<div className="relative h-48 lg:h-64 w-full">
										<Image src={img} alt={`${name} - ${index + 1}`} fill className="object-cover absolute -top-1/6 w-full h-full" />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						{image.length > 1 && (
							<>
								<CarouselPrevious className="left-2" />
								<CarouselNext className="right-2" />
							</>
						)}
					</Carousel>
				</div>
			) : (
				<div className="h-48 lg:h-64 bg-white border rounded-lg overflow-hidden">
					<Carousel className="w-full h-full">
						<CarouselContent className="h-64">
							{image.map((img, index) => (
								<CarouselItem key={index} className="h-64">
									<div className="relative h-64 w-full">
										<Image src={img} alt={`${name} - ${index + 1}`} fill className="object-cover" />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						{image.length > 1 && (
							<>
								<CarouselPrevious className="left-2" />
								<CarouselNext className="right-2" />
							</>
						)}
					</Carousel>
				</div>
			)}

			{/* Product Info */}
			<div className="pt-3 flex flex-col flex-1 justify-between">
				<h3 className="lg:text-xl font-bold text-black mb-1">{name}</h3>
				{description && <p className="text-sm italic mb-4">{description}</p>}

				{/* Price */}
				<div className="flex items-center lg:gap-2 mb-2 lg:mb-6">
					<span className="lg:text-2xl text-black">₹{price}</span>
					{originalPrice && <span className="text-lg text-gray-400 line-through">₹{originalPrice}</span>}
				</div>

				{/* Button */}
				<div className="flex justify-center">
					<Button className="bg-black hover:bg-gray-700 text-white px-2 lg:px-4 py-3 text-xs sm:text-sm transition-colors h-full cursor-pointer w-full md:w-4/5">Order On Whatsapp</Button>
				</div>
			</div>
		</div>
	);
}
