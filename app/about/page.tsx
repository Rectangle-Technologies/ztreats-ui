import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import VisionAndMission from "@/components/about/VisionAndMission";
import WhatZStandsFor from "@/components/about/WhatZStandsFor";
import WhatMakesZDifferent from "@/components/about/WhatMakesZDifferent";
import CurationProcess from "@/components/about/CurationProcess";
import HampersWithAHeart from "@/components/about/HampersWithAHeart";
import TaglineSection from "@/components/about/TaglineSection";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about ZTreats - our story, vision, and commitment to bringing you the finest quality nuts, dry fruits, and gift hampers since 2018.",
	keywords: [
		"about ZTreats",
		"premium nuts company",
		"gift hamper brand",
		"quality dry fruits",
		"our story",
	],
	openGraph: {
		title: "About ZTreats - Our Story & Mission",
		description:
			"Discover the ZTreats story - our passion for quality nuts, dry fruits, and beautifully curated gift hampers.",
		url: "https://ztreats.com/about",
		type: "website",
	},
	alternates: {
		canonical: "/about",
	},
};

function AboutPage() {
	return (
		<>
			<AboutHero />
			<WhatZStandsFor />
			<WhatMakesZDifferent />
			<CurationProcess />
			<HampersWithAHeart />
			<VisionAndMission />
			<TaglineSection />
		</>
	);
}

export default AboutPage;
