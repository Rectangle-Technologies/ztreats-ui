import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActiveFilter {
	key: string;
	label: string;
	value: string;
	isMulti?: boolean;
}

interface ActiveFiltersProps {
	searchQuery: string;
	activeFilters: ActiveFilter[];
	onRemoveSearch: () => void;
	onRemoveFilter: (key: string, value?: string) => void;
	onClearAll: () => void;
}

export default function ActiveFilters({ searchQuery, activeFilters, onRemoveSearch, onRemoveFilter, onClearAll }: ActiveFiltersProps) {
	const hasFilters = activeFilters.length > 0 || searchQuery !== "";

	if (!hasFilters) return null;

	return (
		<div className="flex flex-wrap justify-between items-center gap-2">
			<div className="flex flex-wrap items-center gap-2">
				{searchQuery && (
					<Badge variant="secondary" className="flex items-center gap-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
						<span>Search: {searchQuery}</span>
						<button type="button" onClick={onRemoveSearch} className="ml-0.5 rounded-full hover:bg-gray-300/50" aria-label="Clear search">
							<X className="h-3 w-3" />
						</button>
					</Badge>
				)}
				{activeFilters.map((filter) => (
					<Badge key={`${filter.key}-${filter.value}`} variant="secondary" className="flex items-center gap-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
						<span>{filter.label}</span>
						<button type="button" onClick={() => onRemoveFilter(filter.key, filter.isMulti ? filter.value : undefined)} className="ml-0.5 rounded-full hover:bg-gray-300/50" aria-label={`Remove ${filter.label}`}>
							<X className="h-3 w-3" />
						</button>
					</Badge>
				))}
			</div>
			<button type="button" onClick={onClearAll} className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
				Clear all
			</button>
		</div>
	);
}
