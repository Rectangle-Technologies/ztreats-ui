import Image from "next/image";
import { PaddedButton } from "@/components/PaddedButton";

export default function AboutHero() {
	return (
		<section className="w-full bg-[#FFD46C] relative overflow-hidden">
			<div className="mx-auto h-[70vh] max-w-7xl px-6 sm:px-12 py-4">
				<div className="flex items-center h-full w-full relative">
					{/* Left Content */}
					<div className={`z-10 text-5xl md:text-6xl font-bold text-[#D9560E] mb-6 leading-tight`}>
						<div className={`font-[amaranth]`}>
							<h1 className="">More than a brand</h1>
							<h1 className="">A way of better living</h1>
						</div>
						<PaddedButton size="lg" className="border-2 border-[#055066] bg-transparent text-[#055066] hover:bg-[#055066] hover:text-white">
							View Products
						</PaddedButton>
					</div>

					{/* Right Content - Strawberry Image */}
					<Image src="/assets/about/strawberry.png" alt="Strawberry" width={300} height={600} className="object-contain w-full h-[110vh] absolute left-1/3" priority />
				</div>
			</div>
		</section>
	);
}
