import { Metadata } from "next";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with ZTreats. We'd love to hear from you! Contact us for orders, inquiries, corporate gifting, or any questions about our premium nuts and gift hampers.",
	keywords: [
		"contact ZTreats",
		"customer support",
		"order inquiry",
		"corporate gifting",
		"bulk orders",
	],
	openGraph: {
		title: "Contact ZTreats - Get in Touch",
		description:
			"Have questions? Contact ZTreats for orders, inquiries, and corporate gifting solutions.",
		url: "https://ztreats.com/contact",
		type: "website",
	},
	alternates: {
		canonical: "/contact",
	},
};

function ContactUsPage() {
	return (
		<>
			{/* <ContactSection /> */}
			<ContactInfo/>
		</>
	);
}

export default ContactUsPage;
