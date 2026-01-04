import { useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface SizeFilterProps {
	sizes: string[];
	selectedSizes: string[];
	onSelectionChange: (sizes: string[]) => void;
}

export default function SizeFilter({ sizes, selectedSizes, onSelectionChange }: SizeFilterProps) {
	const [open, setOpen] = useState(false);

	const toggleSize = (size: string) => {
		const value = size.toLowerCase();
		if (selectedSizes.includes(value)) {
			onSelectionChange(selectedSizes.filter((s) => s !== value));
		} else {
			onSelectionChange([...selectedSizes, value]);
		}
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button type="button" className="h-10 min-w-[120px] rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-between gap-2">
					<span className={selectedSizes.length === 0 ? "text-gray-500" : ""}>
						{selectedSizes.length === 0
							? "Size"
							: selectedSizes.length === 1
							? sizes.find((s) => s.toLowerCase() === selectedSizes[0]) || selectedSizes[0]
							: `${selectedSizes.length} selected`}
					</span>
					<ChevronsUpDown className="h-4 w-4 ml-auto opacity-50" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-50 p-0" align="start">
				<Command>
					<CommandList>
						<CommandGroup>
							{sizes.map((size) => {
								const isSelected = selectedSizes.includes(size.toLowerCase());
								return (
									<CommandItem key={size} onSelect={() => toggleSize(size)}>
										<div className={cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "text-white" : "opacity-50")}>
											{isSelected && <Check className="h-3 w-3" />}
										</div>
										{size}
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
