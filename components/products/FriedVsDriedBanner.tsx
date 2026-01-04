import Image from "next/image";

export default function FriedVsDriedBanner() {
	return (
		<section className="w-full">
			<div className="relative  overflow-hidden bg-[#F15C44]">
				<div className="grid grid-cols-1 md:grid-cols-2 px-12">
					<Image src="/assets/products/right-no-fried.png" alt="" height={400} width={400} className="w-full" />
					<Image src="/assets/products/left-only-dried.png" alt="" height={400} width={400} className="w-full" />
				</div>
			</div>
		</section>
	);
}
