"use client";

import { useMemo, useCallback, useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "../landing/ProductCard";
import SearchBar from "./SearchBar";
// import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ActiveFilters from "./ActiveFilters";

// Generate unique categories from product names
const categories = Array.from(
	new Set(
		products
			.map((p) => {
				const name = p.name.toLowerCase();
				if (name.includes("cashew")) return "Cashews";
				if (name.includes("almond")) return "Almonds";
				if (name.includes("walnut")) return "Walnuts";
				if (name.includes("berr")) return "Berries";
				if (name.includes("pistachio")) return "Pistachios";
				if (name.includes("peanut")) return "Peanuts";
				return null;
			})
			.filter(Boolean) as string[]
	)
).sort();

export default function ProductListing() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	// Read values from URL
	const searchQuery = searchParams.get("search") || "";

	// Local state for search input to avoid lag
	const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
	const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Sync local search with URL param when it changes externally
	useEffect(() => {
		setLocalSearchQuery(searchQuery);
	}, [searchQuery]);
	const selectedCategories = useMemo(() => searchParams.get("category")?.split(",").filter(Boolean) || [], [searchParams]);

	// Price filter state
	const minPriceParam = searchParams.get("minPrice") || "";
	const maxPriceParam = searchParams.get("maxPrice") || "";
	const [localMinPrice, setLocalMinPrice] = useState(minPriceParam);
	const [localMaxPrice, setLocalMaxPrice] = useState(maxPriceParam);
	const priceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Sync local price with URL params when they change externally
	useEffect(() => {
		setLocalMinPrice(minPriceParam);
		setLocalMaxPrice(maxPriceParam);
	}, [minPriceParam, maxPriceParam]);

	// Helper function to update URL params
	const updateParams = useCallback(
		(key: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			if (value && value !== "all") {
				params.set(key, value);
			} else {
				params.delete(key);
			}
			router.push(`${pathname}?${params.toString()}`, { scroll: false });
		},
		[searchParams, router, pathname]
	);

	// Debounced search handler
	const handleSearchChange = (value: string) => {
		setLocalSearchQuery(value);

		// Clear existing timeout
		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}

		// Set new timeout to update URL after 300ms
		searchTimeoutRef.current = setTimeout(() => {
			updateParams("search", value);
		}, 300);
	};

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
			if (priceTimeoutRef.current) {
				clearTimeout(priceTimeoutRef.current);
			}
		};
	}, []);

	// Debounced price filter handlers
	const handleMinPriceChange = (value: string) => {
		setLocalMinPrice(value);
		if (priceTimeoutRef.current) {
			clearTimeout(priceTimeoutRef.current);
		}
		priceTimeoutRef.current = setTimeout(() => {
			updateParams("minPrice", value);
		}, 300);
	};

	const handleMaxPriceChange = (value: string) => {
		setLocalMaxPrice(value);
		if (priceTimeoutRef.current) {
			clearTimeout(priceTimeoutRef.current);
		}
		priceTimeoutRef.current = setTimeout(() => {
			updateParams("maxPrice", value);
		}, 300);
	};

	// Helper function to update multi-select params
	const updateMultiParams = useCallback(
		(key: string, values: string[]) => {
			const params = new URLSearchParams(searchParams.toString());
			if (values.length > 0) {
				params.set(key, values.join(","));
			} else {
				params.delete(key);
			}
			router.push(`${pathname}?${params.toString()}`, { scroll: false });
		},
		[searchParams, router, pathname]
	);

	// Get active filters for badges
	const activeFilters = useMemo(() => {
		const filters: { key: string; label: string; value: string; isMulti?: boolean }[] = [];
		selectedCategories.forEach((cat) => {
			filters.push({ key: "category", label: categories.find((c) => c.toLowerCase() === cat) || cat, value: cat, isMulti: true });
		});
		if (minPriceParam) {
			filters.push({ key: "minPrice", label: `Min: $${minPriceParam}`, value: minPriceParam });
		}
		if (maxPriceParam) {
			filters.push({ key: "maxPrice", label: `Max: $${maxPriceParam}`, value: maxPriceParam });
		}
		return filters;
	}, [selectedCategories, minPriceParam, maxPriceParam]);

	// Filter products based on search and filters
	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			// Search filter
			const matchesSearch = searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));

			// Category filter (multi-select)
			const matchesCategory = selectedCategories.length === 0 || selectedCategories.some((cat) => product.name.toLowerCase().includes(cat.toLowerCase()));

			// Price filter
			const minPrice = minPriceParam ? parseFloat(minPriceParam) : null;
			const maxPrice = maxPriceParam ? parseFloat(maxPriceParam) : null;
			const matchesMinPrice = minPrice === null || product.price >= minPrice;
			const matchesMaxPrice = maxPrice === null || product.price <= maxPrice;

			return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
		});
	}, [searchQuery, selectedCategories, minPriceParam, maxPriceParam]);

	// Remove a specific filter
	const removeFilter = (key: string, value?: string) => {
		if (key === "category" && value) {
			updateMultiParams(
				"category",
				selectedCategories.filter((c) => c !== value)
			);
		} else if (key === "minPrice") {
			setLocalMinPrice("");
			if (priceTimeoutRef.current) clearTimeout(priceTimeoutRef.current);
			updateParams("minPrice", "");
		} else if (key === "maxPrice") {
			setLocalMaxPrice("");
			if (priceTimeoutRef.current) clearTimeout(priceTimeoutRef.current);
			updateParams("maxPrice", "");
		} else {
			updateParams(key, "");
		}
	};

	// Clear all filters
	const clearAllFilters = () => {
		setLocalSearchQuery("");
		setLocalMinPrice("");
		setLocalMaxPrice("");
		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}
		if (priceTimeoutRef.current) {
			clearTimeout(priceTimeoutRef.current);
		}
		router.push(pathname, { scroll: false });
	};

	return (
		<section className="w-full">
			<div className="rounded-3xl max-w-7xl mx-auto px-6 py-12">
				<div className="mb-6 flex flex-col gap-4">
					<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
						<SearchBar value={localSearchQuery} onChange={handleSearchChange} />
						<div className="flex flex-wrap items-center gap-3 md:gap-4">
							{/* <CategoryFilter categories={categories} selectedCategories={selectedCategories} onSelectionChange={(cats) => updateMultiParams("category", cats)} /> */}
							<PriceFilter minPrice={localMinPrice} maxPrice={localMaxPrice} onMinChange={handleMinPriceChange} onMaxChange={handleMaxPriceChange} />
						</div>
					</div>

					<ActiveFilters
						searchQuery={searchQuery}
						activeFilters={activeFilters}
						onRemoveSearch={() => {
							setLocalSearchQuery("");
							updateParams("search", "");
						}}
						onRemoveFilter={removeFilter}
						onClearAll={clearAllFilters}
					/>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
					{filteredProducts.length > 0 ? filteredProducts.map((product) => <ProductCard key={product.id} {...product} page="Product" />) : <div className="col-span-full text-center py-12 text-gray-500">No products found matching your criteria.</div>}
				</div>
			</div>
		</section>
	);
}
