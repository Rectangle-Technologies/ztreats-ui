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
		question: "Can I get more information about a product?",
		answer:
			"Absolutely! Each product page includes detailed descriptions, specifications, and customer reviews to help you make an informed decision.",
	},
	{
		id: "item-2",
		question: "Are your products covered by a warranty?",
		answer:
			"Yes, our products come with a satisfaction guarantee. Please refer to individual product pages for specific warranty details.",
	},
	{
		id: "item-3",
		question: "Can I track my order?",
		answer:
			"Of course! Once your order is placed, you'll receive a tracking link via email or WhatsApp to monitor your delivery in real-time.",
	},
	{
		id: "item-4",
		question: "What are your shipping options?",
		answer:
			"We offer standard and express shipping options to most locations. Shipping costs and delivery times vary by location and selected method.",
	},
	{
		id: "item-5",
		question: "How long does shipping take?",
		answer:
			"Standard shipping typically takes 3-5 business days, while express shipping is available for 1-2 business day delivery.",
	},
	{
		id: "item-6",
		question: "What payment methods do you accept?",
		answer:
			"We accept multiple payment methods including credit cards, debit cards, UPI, and direct bank transfers for your convenience.",
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
