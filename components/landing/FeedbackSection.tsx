import Image from "next/image";

interface StatCard {
	id: number;
	label: string;
	value: string;
	change: string;
	changeColor?: string;
}

interface TestimonialCard {
	id: number;
	image: string;
	alt: string;
}

const statCards: StatCard[] = [
	{
		id: 1,
		label: "Lorem ipsum",
		value: "425+",
		change: "+20% then last week",
		changeColor: "text-green-500",
	},
	{
		id: 2,
		label: "Lorem ipsum",
		value: "425+",
		change: "+20% then last week",
		changeColor: "text-green-500",
	},
];

const testimonialCards: TestimonialCard[] = [
	{
		id: 1,
		image: "/assets/landing-page/testimonial-1.jpg",
		alt: "Customer testimonial 1",
	},
	{
		id: 2,
		image: "/assets/landing-page/testimonial-2.jpg",
		alt: "Customer testimonial 2",
	},
];

export default function FeedbackSection() {
	return (
		<section className="w-full px-6 sm:px-12 py-12 bg-white">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
					{/* Left Content */}
					<div>
						<h2 className="text-4xl sm:text-5xl font-bold font-[amaranth] leading-tight mb-8">
							<span className="text-orange-600">Best</span>
							<br />
							Based On
							<br />
							Foodies <br/>Feedback
						</h2>

						{/* Stat Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm">
							{statCards.map((stat) => (
								<div
									key={stat.id}
									className="bg-[#FFD46C] rounded-2xl p-4 flex flex-col justify-between"
								>
									<p className="text-xs font-medium text-gray-800 mb-2">
										{stat.label}
									</p>
									<div>
										<p className="text-2xl font-bold text-black mb-1">
											{stat.value}
										</p>
										<p className="text-xs font-medium text-gray-700">
											<span className={stat.changeColor}>{stat.change.split(" ")[0]}</span>
											{" "}{stat.change.split(" ").slice(1).join(" ")}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Content - Testimonial Images */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
						{testimonialCards.map((card) => (
							<div
								key={card.id}
								className="relative rounded-3xl overflow-hidden h-full"
							>
								<Image
									src={card.image}
									alt={card.alt}
									fill
									className="object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
