import React from "react";

interface ContactCardProps {
	title: string;
	value: string;
	hours: string;
}

export function ContactCard({ title, value, hours }: ContactCardProps) {
	return (
		<div>
			<h3 className="text-lg font-semibold text-white tracking-wide">
				{title}
			</h3>
			<div className="border-b-2 w-4 border-white pb-4 mb-4"></div>
			<p className="text-sm text-white font-medium mb-4">
				{value}
			</p>
			<p className="text-xs sm:text-sm text-gray-100">
				{hours}
			</p>
		</div>
	);
}
