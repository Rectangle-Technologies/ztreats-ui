"use client";

import { Search, X } from "lucide-react";
import ProductGrid from "@/components/landing/ProductGrid";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";
import ProductCard from "../landing/ProductCard";

const categories = ["All", "Cashews", "Almonds", "Walnuts", "Berries"];

export default function ProductListing() {
	return (
		<section className="w-full ">
			<div className="rounded-3xl max-w-7xl mx-auto px-6 py-12">
				<div className="mb-6 flex flex-col gap-4">
					<div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
						<div className="relative w-full md:flex-1">
							<Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
							<Input type="text" placeholder="Search" className="h-12 rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-800" />
						</div>
						<div className="flex flex-wrap items-center gap-3 md:gap-4">
							<Select defaultValue="all">
								<SelectTrigger className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{categories.map((option) => (
										<SelectItem key={option} value={option.toLowerCase()}>
											{option}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							<Select defaultValue="categories">
								<SelectTrigger className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
									<SelectValue placeholder="Categories" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="categories">Categories</SelectItem>
									<SelectItem value="all-categories">All Categories</SelectItem>
								</SelectContent>
							</Select>

							<Select defaultValue="stock-status">
								<SelectTrigger className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
									<SelectValue placeholder="Stock Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="stock-status">Stock Status</SelectItem>
									<SelectItem value="in-stock">In Stock</SelectItem>
									<SelectItem value="low-stock">Low Stock</SelectItem>
									<SelectItem value="out-of-stock">Out of Stock</SelectItem>
								</SelectContent>
							</Select>

							<Select defaultValue="size">
								<SelectTrigger className="h-10 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
									<SelectValue placeholder="Size" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="size">Size</SelectItem>
									<SelectItem value="small">Small</SelectItem>
									<SelectItem value="medium">Medium</SelectItem>
									<SelectItem value="large">Large</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						{categories.slice(0, 2).map((label) => (
							<Badge key={label} variant="secondary" className="flex items-center gap-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
								<span>{label}</span>
								<button type="button" className="ml-0.5 rounded-full hover:bg-gray-300/50" aria-label={`Remove ${label}`}>
									<X className="h-3 w-3" />
								</button>
							</Badge>
						))}
						<button type="button" className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
							Clear all
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
		</section>
	);
}
