import { Star } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Testimonial {
	id: number;
	name: string;
	rating: number;
	text: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Olivia Davis",
		rating: 4.5,
		text: "For special moments, this perfume is my favorite choice. Its sophisticated and unique scent never fails to attract compliments.",
	},
	{
		id: 2,
		name: "John Smith",
		rating: 5,
		text: "Absolutely love the quality of these treats! Perfect gift for any occasion. The packaging is beautiful and the taste is exceptional.",
	},
];

export default function ClientsTestimonials() {
	return (
		<section className="w-full px-6 sm:px-12 py-16" style={{ backgroundColor: "#FFFFFF" }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex items-center gap-3 mb-4">
					<h2 className="text-4xl sm:text-5xl font-bold font-[amaranth] text-black">
						What Our Clients Say
						<br />
						About Us
					</h2>
					<Image src="/assets/landing-page/testimonialstar.png" height={200} width={200} alt="Circle" className="w-12 h-12 sm:w-20 sm:h-20 -ml-2 -mt-8" />
				</div>

				{/* Testimonials Carousel */}
				<Carousel className="w-full">
					<CarouselContent>
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.id}>
								<div className="flex flex-col items-center justify-center min-h-96 px-8 sm:px-16">
									{/* Name */}
									<h3 className="text-2xl font-bold text-black mb-4">{testimonial.name}</h3>

									{/* Star Rating */}
									<div className="flex justify-center gap-1 mb-6">
										{Array.from({ length: 5 }).map((_, i) => (
											<Star key={i} className={`w-6 h-6 ${i < Math.floor(testimonial.rating) ? "fill-yellow-400 text-yellow-400" : i < testimonial.rating ? "fill-yellow-400 text-yellow-400 opacity-50" : "text-gray-300"}`} />
										))}
									</div>

									{/* Testimonial Text */}
									<p className="text-lg text-gray-600 leading-relaxed max-w-2xl">&quot;{testimonial.text}&quot;</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Navigation Arrows */}
					<CarouselPrevious className="absolute -left-4 lg:left-0 top-1/2 -translate-y-1/2 h-10 w-10 border-gray-300 hover:bg-gray-100" />
					<CarouselNext className="absolute -right-4 lg:right-0 top-1/2 -translate-y-1/2 h-10 w-10 border-gray-300 hover:bg-gray-100" />
				</Carousel>
			</div>
		</section>
	);
}
