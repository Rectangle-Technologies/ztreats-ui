import AboutHero from "@/components/about/AboutHero";
import VisionAndMission from "@/components/about/VisionAndMission";
import WhatZStandsFor from "@/components/about/WhatZStandsFor";
import WhatMakesZDifferent from "@/components/about/WhatMakesZDifferent";
import CurationProcess from "@/components/about/CurationProcess";
import HampersWithAHeart from "@/components/about/HampersWithAHeart";
import TaglineSection from "@/components/about/TaglineSection";

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
