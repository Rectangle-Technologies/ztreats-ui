"use client";

import { useEffect } from "react";

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		// Enable smooth scroll on mount
		document.documentElement.style.scrollBehavior = "smooth";

		// Cleanup: restore default on unmount
		return () => {
			document.documentElement.style.scrollBehavior = "";
		};
	}, []);

	return <>{children}</>;
}
