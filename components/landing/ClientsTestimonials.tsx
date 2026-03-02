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
		name: "Shashank Kapuria",
		rating: 5,
		text: `I appreciate that this is a brand I can trust for my healthy snacking needs. The integrity of the nuts means they hold up beautifully whether I'm using them in recipes, topping my morning yogurt, or just grabbing a handful straight from the resealable bag (which, by the way, is excellent at maintaining freshness).`,
	},
	{
		id: 2,
		name: "Meghna Datwani",
		rating: 5,
		text: `The quality of the dryfruits is amazing... Specially the walnuts. I've become a regular customer to them and I only trust them with the quality, even when it comes to gifting it to my relatives.`,
	},
	{
		id: 3,
		name: "Darshan Shah",
		rating: 5,
		text: `Great product quality and very helpful team! I have started regularly buying from them!`,
	},
	{
		id: 4,
		name: "Darshan Nawab",
		rating: 5,
		text: `Top Notch quality with pocket friendly price.`,
	},
	{
		id: 5,
		name: "Heena Rajput",
		rating: 5,
		text: `The hamper was absolutely beautiful and the packaging felt rich and classy. We don’t like ordinary decorations, but this one truly stood out. The jute flowers and bag were lovely, and everyone loved it. I will definitely be ordering again!`,
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
					<CarouselPrevious className="absolute -left-4 lg:left-0 top-1/2 -translate-y-1/2 h-7 w-7 md:h-10 md:w-10 border-gray-300 hover:bg-gray-100 hover:cursor-pointer" />
					<CarouselNext className="absolute -right-4 lg:right-0 top-1/2 -translate-y-1/2 h-7 w-7 md:h-10 md:w-10 border-gray-300 hover:bg-gray-100 hover:cursor-pointer" />
				</Carousel>
			</div>
		</section>
	);
}
