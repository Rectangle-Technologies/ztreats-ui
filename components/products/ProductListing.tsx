"use client";

import { useMemo, useCallback, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search, X, ChevronsUpDown, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import ProductCard from "../landing/ProductCard";

const categories = ["Cashews", "Almonds", "Walnuts", "Berries"];
const stockStatuses = ["All", "In Stock", "Out of Stock"];
const sizes = ["Small", "Medium", "Large"];

export default function ProductListing() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const [categoryOpen, setCategoryOpen] = useState(false);
	const [sizeOpen, setSizeOpen] = useState(false);

	// Read values from URL
	const searchQuery = searchParams.get("search") || "";
	const selectedCategories = useMemo(() =>
		searchParams.get("category")?.split(",").filter(Boolean) || [],
		[searchParams]
	);
	const selectedStockStatus = searchParams.get("stock") || "";
	const selectedSizes = useMemo(() =>
		searchParams.get("size")?.split(",").filter(Boolean) || [],
		[searchParams]
	);

	// Helper function to update URL params
	const updateParams = useCallback((key: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		if (value && value !== "all") {
			params.set(key, value);
		} else {
			params.delete(key);
		}
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	}, [searchParams, router, pathname]);

	// Helper function to update multi-select params
	const updateMultiParams = useCallback((key: string, values: string[]) => {
		const params = new URLSearchParams(searchParams.toString());
		if (values.length > 0) {
			params.set(key, values.join(","));
		} else {
			params.delete(key);
		}
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	}, [searchParams, router, pathname]);

	// Get active filters for badges
	const activeFilters = useMemo(() => {
		const filters: { key: string; label: string; value: string; isMulti?: boolean }[] = [];
		selectedCategories.forEach(cat => {
			filters.push({ key: "category", label: categories.find(c => c.toLowerCase() === cat) || cat, value: cat, isMulti: true });
		});
		if (selectedStockStatus && selectedStockStatus !== "all") {
			filters.push({ key: "stock", label: stockStatuses.find(s => s.toLowerCase().replace(" ", "-") === selectedStockStatus) || selectedStockStatus, value: selectedStockStatus });
		}
		selectedSizes.forEach(size => {
			filters.push({ key: "size", label: sizes.find(s => s.toLowerCase() === size) || size, value: size, isMulti: true });
		});
		return filters;
	}, [selectedCategories, selectedStockStatus, selectedSizes]);

	// Filter products based on search and filters
	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			// Search filter
			const matchesSearch = searchQuery === "" ||
				product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.description.toLowerCase().includes(searchQuery.toLowerCase());

			// Category filter (multi-select)
			const matchesCategory = selectedCategories.length === 0 ||
				selectedCategories.some(cat => product.name.toLowerCase().includes(cat.toLowerCase()));

			// Stock status filter
			const matchesStockStatus = !selectedStockStatus || selectedStockStatus === "all" ||
				(selectedStockStatus === "in-stock" && product.inStock) ||
				(selectedStockStatus === "out-of-stock" && !product.inStock);

			// Size filter (multi-select, placeholder - products don't have size property currently)
			const matchesSize = selectedSizes.length === 0;

			return matchesSearch && matchesCategory && matchesStockStatus && matchesSize;
		});
	}, [searchQuery, selectedCategories, selectedStockStatus, selectedSizes]);

	// Remove a specific filter
	const removeFilter = (key: string, value?: string) => {
		if (key === "category" && value) {
			updateMultiParams("category", selectedCategories.filter(c => c !== value));
		} else if (key === "size" && value) {
			updateMultiParams("size", selectedSizes.filter(s => s !== value));
		} else {
			updateParams(key, "");
		}
	};

	// Clear all filters
	const clearAllFilters = () => {
		router.push(pathname, { scroll: false });
	};

	const hasActiveFilters = activeFilters.length > 0 || searchQuery !== "";

	return (
		<section className="w-full ">
			<div className="rounded-3xl max-w-7xl mx-auto px-6 py-12">
				<div className="mb-6 flex flex-col gap-4">
					<div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
						<div className="relative w-full md:flex-1">
							<Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
							<Input type="text" placeholder="Search" value={searchQuery} onChange={(e) => updateParams("search", e.target.value)} className="h-12 rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-800" />
						</div>
						<div className="flex flex-wrap items-center gap-3 md:gap-4">
							{/* Category Multi-Select */}
							<Popover open={categoryOpen} onOpenChange={setCategoryOpen}>
								<PopoverTrigger asChild>
									<button type="button" className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center gap-2 min-w-30 bg-white">
										<span className={selectedCategories.length === 0 ? "text-gray-500" : ""}>
											{selectedCategories.length === 0 ? "Category" : selectedCategories.length === 1 ? categories.find((c) => c.toLowerCase() === selectedCategories[0]) || selectedCategories[0] : `${selectedCategories.length} selected`}
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
														<CommandItem
															key={category}
															onSelect={() => {
																const value = category.toLowerCase();
																if (isSelected) {
																	updateMultiParams(
																		"category",
																		selectedCategories.filter((s) => s !== value)
																	);
																} else {
																	updateMultiParams("category", [...selectedCategories, value]);
																}
															}}
														>
															<div className={cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "bg-teal-600 text-white border-teal-600" : "opacity-50")}>{isSelected && <Check className="h-3 w-3" />}</div>
															{category}
														</CommandItem>
													);
												})}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>

							<Select value={selectedStockStatus} onValueChange={(value) => updateParams("stock", value)}>
								<SelectTrigger className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
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

							{/* Size Multi-Select */}
							<Popover open={sizeOpen} onOpenChange={setSizeOpen}>
								<PopoverTrigger asChild>
									<button type="button" className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center gap-2 min-w-30 bg-white">
										<span className={selectedSizes.length === 0 ? "text-gray-500" : ""}>
											{selectedSizes.length === 0 ? "Size" : selectedSizes.length === 1 ? sizes.find((s) => s.toLowerCase() === selectedSizes[0]) || selectedSizes[0] : `${selectedSizes.length} selected`}
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
														<CommandItem
															key={size}
															onSelect={() => {
																const value = size.toLowerCase();
																if (isSelected) {
																	updateMultiParams(
																		"size",
																		selectedSizes.filter((s) => s !== value)
																	);
																} else {
																	updateMultiParams("size", [...selectedSizes, value]);
																}
															}}
														>
															<div className={cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "bg-teal-600 text-white border-teal-600" : "opacity-50")}>{isSelected && <Check className="h-3 w-3" />}</div>
															{size}
														</CommandItem>
													);
												})}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
						</div>
					</div>

					{hasActiveFilters && (
						<div className="flex flex-wrap justify-between items-center gap-2">
							<div className="flex flex-wrap items-center gap-2">
								{searchQuery && (
									<Badge variant="secondary" className="flex items-center gap-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
										<span>Search: {searchQuery}</span>
										<button type="button" onClick={() => updateParams("search", "")} className="ml-0.5 rounded-full hover:bg-gray-300/50" aria-label="Clear search">
											<X className="h-3 w-3" />
										</button>
									</Badge>
								)}
								{activeFilters.map((filter) => (
									<Badge key={`${filter.key}-${filter.value}`} variant="secondary" className="flex items-center gap-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
										<span>{filter.label}</span>
										<button type="button" onClick={() => removeFilter(filter.key, filter.isMulti ? filter.value : undefined)} className="ml-0.5 rounded-full hover:bg-gray-300/50" aria-label={`Remove ${filter.label}`}>
											<X className="h-3 w-3" />
										</button>
									</Badge>
								))}
							</div>
							<button type="button" onClick={clearAllFilters} className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
								Clear all
							</button>
						</div>
					)}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredProducts.length > 0 ? filteredProducts.map((product) => <ProductCard key={product.id} {...product} />) : <div className="col-span-full text-center py-12 text-gray-500">No products found matching your criteria.</div>}
				</div>
			</div>
		</section>
	);
}
