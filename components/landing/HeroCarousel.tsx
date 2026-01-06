"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PaddedButton } from "@/components/PaddedButton";

interface CarouselSlide {
	id: number;
	heading: string;
	subheading: string;
	dry_fruits_name: string;
	description: string;
	backgroundImage: string;
	ctaButtons: {
		primary: string;
		secondary: string;
	};
}

const slides: CarouselSlide[] = [
	{
		id: 1,
		heading: "Snack Smart.",
		subheading: "Live vibrant.",
		dry_fruits_name: "Dry fruits & nuts",
		description: "Wholesome goodness to fuel a vibrant lifestyle",
		backgroundImage: "/assets/landing-page/carousel-WALNUT CT2.jpg",
		ctaButtons: {
			primary: "Explore Range",
			secondary: "Why ZTreats",
		},
	},
	{
		id: 2,
		heading: "Premium Quality.",
		subheading: "Pure Taste.",
		dry_fruits_name: "Premium Dry Fruits",
		description: "Carefully curated for richness, quality, and flavor",
		backgroundImage: "/assets/landing-page/carousel-WALNUT CT2.jpg",
		ctaButtons: {
			primary: "Shop Now",
			secondary: "Why ZTreats",
		},
	},
	{
		id: 3,
		heading: "Celebrate Life.",
		subheading: "Wrapped with Care.",
		dry_fruits_name: "Gift Hampers",
		description: "A thoughtful way to celebrate life's moments",
		backgroundImage: "/assets/landing-page/carousel-WALNUT CT2.jpg",
		ctaButtons: {
			primary: "View Hampers",
			secondary: "Why ZTreats",
		},
	},
];

export default function HeroCarousel() {
	const router = useRouter();
	const pathname = usePathname();

	const handleWhyZTreatsClick = () => {
		if (pathname === '/') {
			// Already on home page, just scroll
			const element = document.getElementById('why-ztreats');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		} else {
			// Navigate to home page with hash
			router.push('/#why-ztreats');
		}
	};

	return (
		<Carousel className="w-full relative lg:border lg:rounded-xl text-white overflow-hidden">
			<CarouselContent className="h-[70vh] lg:h-[80vh]">
				{slides.map((slide) => (
					<CarouselItem key={slide.id} className="relative w-full h-full">
						{/* Background Image */}
						<div className="absolute inset-0 z-0">
							<Image src={slide.backgroundImage} alt={slide.heading} fill className="object-cover" priority />
							{/* Dark Overlay */}
							<div className="absolute inset-0 bg-black/40" />
						</div>

						{/* Blue Tint */}
						<div className="absolute h-full w-full top-0 left-0 bg-[#1235EC] opacity-20 z-10 pointer-events-none"></div>

						{/* Top Indicators */}
						<div className="flex justify-end gap-2 absolute top-8 right-8 z-10">
							{slides.map((_, index) => (
								<div key={index} className={`h-2 rounded-full transition-all ${index === slides.indexOf(slide) ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
							))}
						</div>

						{/* Content */}
						<div className="relative z-20 flex flex-col justify-between h-full p-4 sm:p-12">
							{/* Center Content */}
							<div className="space-y-4 ">
								<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight font-[amaranth]">
									{slide.heading}
									<br />
									{slide.subheading}
								</h1>
							</div>

							{/* Bottom Section with Navigation and Buttons */}
							<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
								<div className="max-w-2xl">
									<p className="text-lg font-bold sm:text-xl">{slide.dry_fruits_name}</p>
									<p className="text-lg sm:text-xl font-light">{slide.description}</p>
								</div>
								{/* CTA Buttons */}
								<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
									<PaddedButton size="lg" className="bg-teal-800 hover:bg-teal-700 text-white p-7" onClick={() => router.push('/products')}>
										{slide.ctaButtons.primary}
									</PaddedButton>
									<PaddedButton variant="outline" size="md" className="bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto p-7" onClick={handleWhyZTreatsClick}>
										{slide.ctaButtons.secondary}
									</PaddedButton>
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>

			{/* Navigation Arrows */}
			<CarouselPrevious className="left-4 sm:left-8 bg-white/20 border-white text-white hover:bg-white/40 h-8 w-8 sm:h-12 sm:w-12" />
			<CarouselNext className="right-4 sm:right-8 bg-white/20 border-white text-white hover:bg-white/40 h-8 w-8 sm:h-12 sm:w-12" />
		</Carousel>
	);
}
