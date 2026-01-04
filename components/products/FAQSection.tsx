"use client";

import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

const faqItems: FAQItem[] = [
	{
		id: "item-1",
		question: "What is the shelf life of ZTreats products?",
		answer:
			"ZTreats dry fruits and nuts have a shelf life of up to 6 months, carefully packed to preserve freshness, taste, and quality.",
	},
	{
		id: "item-2",
		question: "How should I store dry fruits after opening?",
		answer:
			"For best results, store in an airtight container in a cool, dry place. Select dry fruits may be refrigerated to extend freshness.",
	},
	{
		id: "item-3",
		question: "Do you offer bulk or corporate orders?",
		answer:
			"Yes. ZTreats offers bulk and corporate gifting solutions, with customised pricing and packaging tailored to your needs.",
	},
	{
		id: "item-4",
		question: "What if my order arrives damaged?",
		answer:
			"Your satisfaction matters to us. Please contact our customer care within 24 hours of delivery, along with product images, and we will assist you promptly.",
	},
	{
		id: "item-5",
		question: "What is your return procedure?",
		answer:
			"Simply reach out to our customer care team, who will guide you through the return process with care and clarity.",
	},
	{
		id: "item-6",
		question: "Is Cash on Delivery (COD) available?",
		answer:
			"Yes. COD is available - because at ZTreats, premium quality is built on genuine trust.",
	},
];

export default function FAQSection() {
	return (
		<section className="w-full py-12 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
					{/* Left Section */}
					<div className="flex flex-col justify-center lg:sticky lg:top-8">
						<h2 className="text-4xl sm:text-5xl font-bold font-[amaranth] text-black mb-4">
							Our Frequently Asked
							<br />
							Questions
						</h2>
						<p className="text-lg text-gray-600 mb-8">
							Have a question? Find answers to common queries about our products and
							services.
						</p>
						<div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden">
							<Image
								src="/assets/products/women_eating_almond.jpg"
								alt="Enjoying ZTreats products"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* Right Section - FAQ Accordion */}
					<div className="">
						<Accordion type="single" collapsible className="space-y-3">
							{faqItems.map((item) => (
								<AccordionItem
									key={item.id}
									value={item.id}
									className="border border-gray-200 rounded-xl px-6 py-2 bg-white"
								>
									<AccordionTrigger className="text-lg font-semibold text-black hover:text-gray-700">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-gray-600 pb-4">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
