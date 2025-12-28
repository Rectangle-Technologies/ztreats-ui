import { ContactCard } from "./ContactCard";

const CONTACT_INFO = [
	{
		title: "Email Address",
		value: "help@info.com",
		hours: "Assistance hours:\nMonday - Friday 6 am to 8 pm EST",
	},
	{
		title: "Number",
		value: "(808) 998-34256",
		hours: "Assistance hours:\nMonday - Friday 6 am to 8 pm EST",
	},
];

export default function ContactInfo() {
	return (
		<section className="w-full bg-[#1a5f7a] py-12 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left Side - Heading */}
					<div>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[amaranth] text-white leading-tight">
							We are always happy<br />
							to assist you
						</h2>
					</div>

					{/* Right Side - Contact Details */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						{CONTACT_INFO.map((contact, index) => (
							<ContactCard
								key={index}
								title={contact.title}
								value={contact.value}
								hours={contact.hours}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
