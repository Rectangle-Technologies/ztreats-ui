import { Input } from "@/components/ui/input";

interface PriceFilterProps {
	minPrice: string;
	maxPrice: string;
	onMinChange: (value: string) => void;
	onMaxChange: (value: string) => void;
}

export default function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange }: PriceFilterProps) {
	return (
		<div className="flex items-center gap-2">
            <p>Price Range:</p>
			<Input
				type="number"
				placeholder="Min"
				value={minPrice}
				onChange={(e) => onMinChange(e.target.value)}
				className="h-10 w-24 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700"
				min="0"
			/>
			<span className="text-gray-500">-</span>
			<Input
				type="number"
				placeholder="Max"
				value={maxPrice}
				onChange={(e) => onMaxChange(e.target.value)}
				className="h-10 w-24 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700"
				min="0"
			/>
		</div>
	);
}
