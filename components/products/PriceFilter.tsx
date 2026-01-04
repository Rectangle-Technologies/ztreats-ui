import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { products } from "@/data/products";

interface PriceFilterProps {
	minPrice: string;
	maxPrice: string;
	onMinChange: (value: string, commit?: boolean) => void;
	onMaxChange: (value: string, commit?: boolean) => void;
	onRangeCommit?: (min: string, max: string) => void;
}

export default function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange, onRangeCommit }: PriceFilterProps) {
	const bounds = useMemo(() => {
		const prices = products.map((p) => p.price || 0);
		return { min: Math.min(...prices), max: Math.max(...prices) };
	}, []);

	const sliderMin = bounds.min;
	const sliderMax = bounds.max;
	const step = Math.max(1, Math.round((sliderMax - sliderMin) / 20));

	const parseOr = (v: string, fallback: number) => (v ? parseFloat(v) : fallback);

	// Tooltip state for showing values while interacting with the slider
	const [showTooltip, setShowTooltip] = useState(false);
	const [activeValues, setActiveValues] = useState<[number, number] | null>(null);

	const getPercent = (value: number) => {
		if (sliderMax === sliderMin) return 0;
		return ((value - sliderMin) / (sliderMax - sliderMin)) * 100;
	};

	return (
		<div className="flex items-center gap-4">
			<p className="whitespace-nowrap">Price:</p>
			<div className="w-64 relative">
				<span id="price-range-desc" className="sr-only">Price range slider. Use arrow keys to adjust minimum and maximum prices.</span>
				<Slider
					aria-label="Price range"
					value={[parseOr(minPrice, sliderMin), parseOr(maxPrice, sliderMax)]}
					onValueChange={(vals: number[]) => {
						const [a, b] = vals;
						setActiveValues([a, b]);
						setShowTooltip(true);
						onMinChange(String(a));
						onMaxChange(String(b));
					}}
					onValueCommit={(vals: number[]) => {
						const [a, b] = vals;
						setShowTooltip(false);
						setActiveValues(null);
						if (typeof onRangeCommit === "function") {
							onRangeCommit(String(a), String(b));
						} else {
							onMinChange(String(a), true);
							onMaxChange(String(b), true);
						}
					}}
					min={sliderMin}
					max={sliderMax}
					step={step}
					onMouseEnter={() => {
						setActiveValues([parseOr(minPrice, sliderMin), parseOr(maxPrice, sliderMax)]);
						setShowTooltip(true);
					}}
					onMouseLeave={() => setShowTooltip(false)}
					className="h-5 "
				/>

				{(() => {
					const [tv0, tv1] = activeValues ?? [parseOr(minPrice, sliderMin), parseOr(maxPrice, sliderMax)];
					return (
						<>
							{/* Min tooltip */}
							<Tooltip open={showTooltip || undefined}>
								<TooltipTrigger asChild>
									<span
										tabIndex={0}
										aria-label="Minimum price"
										onFocus={() => setShowTooltip(true)}
										onBlur={() => setShowTooltip(false)}
										style={{ left: `${getPercent(tv0)}%` }}
										className="absolute -mt-8 w-6 h-6 -translate-x-1/2 pointer-events-none"
									/>
								</TooltipTrigger>
								<TooltipContent side="top" sideOffset={6}>₹ {tv0}</TooltipContent>
							</Tooltip>

							{/* Max tooltip */}
							<Tooltip open={showTooltip || undefined}>
								<TooltipTrigger asChild>
									<span
										tabIndex={0}
										aria-label="Maximum price"
										onFocus={() => setShowTooltip(true)}
										onBlur={() => setShowTooltip(false)}
										style={{ left: `${getPercent(tv1)}%` }}
										className="absolute -mt-8 w-6 h-6 -translate-x-1/2 pointer-events-none"
									/>
								</TooltipTrigger>
								<TooltipContent side="top" sideOffset={6}>₹ {tv1}</TooltipContent>
							</Tooltip>
						</>
					);
				})()}

			</div>
		</div>
	);
}
