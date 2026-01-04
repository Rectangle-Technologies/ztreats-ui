import Image from "next/image";

interface GalleryImage {
	src: string;
	alt: string;
	row: number;
	col: number;
}

const galleryImages: GalleryImage[] = [
	{
		src: "/assets/products/11.jpg",
		alt: "Gift hamper with flowers and decorations",
		row: 1,
		col: 1,
	},
	{
		src: "/assets/products/12.png",
		alt: "Close-up of dried berries and fruits",
		row: 1,
		col: 2,
	},
	{
		src: "/assets/products/13.jpg",
		alt: "Luxury gift hamper arrangement",
		row: 1,
		col: 3,
	},
	{
		src: "/assets/products/21.jpg",
		alt: "Freshly baked cookies and treats",
		row: 2,
		col: 1,
	},
	{
		src: "/assets/products/22.png",
		alt: "ZTreats product packages assortment",
		row: 2,
		col: 2,
	},
	{
		src: "/assets/products/23.jpg",
		alt: "Premium gift box with treats",
		row: 2,
		col: 3,
	},
];

export default function ProductsGallery() {
	return (
		<section className="w-full py-12 sm:py-8">
			<div className="mx-auto max-w-7xl px-4 ">
				<div className="grid grid-cols-2 lg:grid-cols-3">
					{galleryImages.map((image) => (
						<div
							key={`${image.row}${image.col}`}
							className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover hover:scale-105 transition-transform duration-300"
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								priority={image.col === 1}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
