import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StockStatusFilterProps {
	stockStatuses: string[];
	selectedStatus: string;
	onStatusChange: (status: string) => void;
}

export default function StockStatusFilter({ stockStatuses, selectedStatus, onStatusChange }: StockStatusFilterProps) {
	return (
		<Select value={selectedStatus} onValueChange={onStatusChange}>
			<SelectTrigger className="h-10 min-w-[120px] rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
				<SelectValue placeholder="Stock Status" />
			</SelectTrigger>
			<SelectContent>
				{stockStatuses.map((status) => (
					<SelectItem key={status} value={status.toLowerCase().replace(" ", "-")}>
						{status}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
