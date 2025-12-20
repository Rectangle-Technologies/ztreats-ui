import { PaddedButton } from "./PaddedButton";

export default function CTASection() {
	return (
		<section className="w-full bg-cover bg-center bg-no-repeat py-24">
			<div
				className="w-full min-h-96 flex flex-col items-center justify-center px-6"
				style={{
					backgroundImage: "url('/assets/about-us/87bc3c3cb22cb1ddc5a3938fd5372cc3e34e7660.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="text-center max-w-2xl">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Snack Smarter?</h2>
					<p className="text-xl md:text-2xl text-white mb-8">Your order is just one text away.</p>
					<PaddedButton size="xl" className="">Chat with Us</PaddedButton>
				</div>
			</div>
		</section>
	);
}
