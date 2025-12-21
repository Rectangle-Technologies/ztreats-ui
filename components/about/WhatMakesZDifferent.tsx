import { PenToolIcon } from "lucide-react";

export default function WhatMakesZDifferent() {
	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-8 sm:px-12">
				<h2 className="text-xl md:text-2xl font-bold mb-4 font-[amaranth]">What Makes Z Treats Different</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-normal">
					{/* Our Belief Card */}
					<div className="bg-[#FF6B5B] rounded-3xl px-6 py-3 text-white">
						<div className="mb-3">
							<PenToolIcon className="-rotate-90" />
						</div>
						<h3 className="text-lg font-semibold mb-2">Our Belief</h3>
						<p className="text-sm leading-tight">We believe healthy living should feel simple, enjoyable, and uplifting — not restrictive or complicated. ZTreats was born to make better choices feel natural.</p>
					</div>

					{/* Our Approach Card */}
					<div className="bg-[#FFD46C] rounded-3xl px-6 py-3 text-[#333]">
						<div className="mb-3">
							<PenToolIcon className="-rotate-90" />
						</div>
						<h3 className="text-lg font-semibold mb-2">Our Approach</h3>
						<p className="text-sm leading-tight">Freshness, energy, and quality guide everything we do — from sourcing to packaging — so every bite feels lively, wholesome, and thoughtfully crafted.</p>
					</div>

					{/* Our Purpose Card */}
					<div className="bg-[#7CB342] rounded-3xl px-6 py-3 text-white">
						<div className="mb-3">
							<PenToolIcon className="-rotate-90" />
						</div>
						<h3 className="text-lg font-semibold mb-2">Our Purpose</h3>
						<p className="text-sm leading-tight">Whether it&apos;s everyday snacking or thoughtful gifting, our aim is to bring moments of nourishment, joy, and connection into people&apos;s lives.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
