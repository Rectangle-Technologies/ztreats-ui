import { useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
	categories: string[];
	selectedCategories: string[];
	onSelectionChange: (categories: string[]) => void;
}

export default function CategoryFilter({ categories, selectedCategories, onSelectionChange }: CategoryFilterProps) {
	const [open, setOpen] = useState(false);

	const toggleCategory = (category: string) => {
		const value = category.toLowerCase();
		if (selectedCategories.includes(value)) {
			onSelectionChange(selectedCategories.filter((c) => c !== value));
		} else {
			onSelectionChange([...selectedCategories, value]);
		}
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button type="button" className="h-10 min-w-[120px] rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-between gap-2">
					<span className={selectedCategories.length === 0 ? "text-gray-500" : ""}>
						{selectedCategories.length === 0
							? "Category"
							: selectedCategories.length === 1
							? categories.find((c) => c.toLowerCase() === selectedCategories[0]) || selectedCategories[0]
							: `${selectedCategories.length} selected`}
					</span>
					<ChevronsUpDown className="h-4 w-4 ml-auto opacity-50" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-50 p-0" align="start">
				<Command>
					<CommandList>
						<CommandGroup>
							{categories.map((category) => {
								const isSelected = selectedCategories.includes(category.toLowerCase());
								return (
									<CommandItem key={category} onSelect={() => toggleCategory(category)}>
										<div className={cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "text-white" : "opacity-50")}>
											{isSelected && <Check className="h-3 w-3" />}
										</div>
										{category}
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
