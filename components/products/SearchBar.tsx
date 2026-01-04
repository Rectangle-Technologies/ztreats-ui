import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
	return (
		<div className="relative w-full md:w-1/2">
			<Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
			<Input
				type="text"
				placeholder="Search"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-800"
			/>
		</div>
	);
}
