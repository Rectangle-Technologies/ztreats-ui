export default function FriedVsDriedBanner() {
	return (
		<section className="w-full">
			<div className="relative h-[50vh] overflow-hidden bg-[#f25e4e]">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 text-white font-[amaranth] uppercase px-8 sm:px-12 py-14 sm:py-16">
					<div className="relative flex items-center justify-center text-center">
						<span className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
							No
							<br />
							Fried
						</span>
						{/* <Image
                src="/assets/landing-page/a79911cdd730d226bd0c7b4fd9670d617072ecc9.jpg"
                alt="Fried snacks in a bowl"
                width={240}
                height={240}
                className="absolute h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.25)] -bottom-6 md:-bottom-4"
                priority
              /> */}
					</div>

					<div className="relative flex items-center justify-center text-center">
						<span className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
							Only
							<br />
							Dried
						</span>
						{/* <Image
                src="/assets/products/only_dried.png"
                alt="Bowl of dried fruits and nuts"
                width={240}
                height={240}
                className="absolute h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.25)] -bottom-6 md:-bottom-4"
                priority
              /> */}
					</div>
				</div>
			</div>
		</section>
	);
}
