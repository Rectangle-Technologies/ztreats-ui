import { PaddedButton } from "../PaddedButton";

export default function TaglineSection() {
	return (
		<section className="w-full bg-[#055066] py-6 md:py-15 relative overflow-hidden font-[amaranth]">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-20 w-[140%]">
				<div className="text-[#4a9fb5] text-lg md:text-2xl font-bold leading-relaxed">
					{`better quality. better health. better moments. better gifting better quality. better health. better moments. better gifting better quality. better health. better moments. better gifting better quality. better health. better moments. better gifting better quality. better health. better moments. better gifting better quality. better health. better moments. better gifting better quality. better health. better moments. better gifting better quality. better health. better moments. better gifting. `.repeat(
						10
					)}
				</div>
			</div>

			{/* Content */}
			<div className="mx-auto max-w-7xl px-4 sm:px-12 relative z-10">
				<div className="flex flex-col items-center justify-center text-center">
					<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#7AC9B3] mb-12 leading-tight">
						Snack Smarter. Snack Healthier.
						<br className="lg:hidden"/> {" "}
						With ZTreats.
					</h2>

					<PaddedButton className="bg-white text-[#055066] hover:bg-gray-100 p-6">Chat with Us</PaddedButton>
				</div>
			</div>
		</section>
	);
}
