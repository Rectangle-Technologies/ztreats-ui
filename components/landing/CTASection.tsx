import { PaddedButton } from "../PaddedButton";

export default function CTASection() {
	return (
		<section className="w-full bg-cover bg-center bg-no-repeat">
			<div
				className="w-full min-h-96 flex flex-col items-center justify-center px-6 relative"
				style={{
					backgroundImage: "url('/assets/landing-page/cta-section-background.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{/* Tint Overlay */}
				<div className="absolute inset-0 bg-[#D9560E] opacity-40 pointer-events-none z-0"></div>

				<div className="text-center max-w-2xl relative z-10">
					<h2 className="text-4xl md:text-5xl font-bold font-[amaranth] text-white mb-6">Ready to Snack Smarter?</h2>
					<p className="text-xl md:text-2xl text-white mb-8">Your order is just one text away.</p>
					<PaddedButton size="xl" variant="outline" className="bg-transparent text-white hover:bg-gray-300">
						Chat with Us
					</PaddedButton>
				</div>
			</div>
		</section>
	);
}
