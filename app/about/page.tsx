import React from "react";
import AboutHero from "@/components/about/AboutHero";
import WhatZStandsFor from "@/components/about/WhatZStandsFor";
import WhatMakesZDifferent from "@/components/about/WhatMakesZDifferent";
import CurationProcess from "@/components/about/CurationProcess";

function AboutPage() {
	return (
		<>
			<AboutHero />
			<WhatZStandsFor />
			<WhatMakesZDifferent />
			<CurationProcess />
		</>
	);
}

export default AboutPage;
