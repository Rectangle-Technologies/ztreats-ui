import { ProductItem } from "@/types/product";

export const products: ProductItem[] = [
	{
		id: 1,
		name: "Cashew Nuts",
		image: ["/assets/products/all/cashews.jpeg"],
		price: 200,
	},
	{
		id: 2,
		name: "California Almonds Jumbo",
		image: ["/assets/products/all/california-almonds.jpeg"],
		price: 200,
	},
	{
		id: 3,
		name: "Walnut Jumbo Kernels",
		image: ["/assets/products/all/walnuts.jpeg"],
		price: 180,
	},
	{
		id: 4,
		name: "Pistachios",
		image: ["/assets/products/all/pistachio.jpeg"],
		price: 220,
	},
	{
		id: 5,
		name: "Premium Figs",
		image: ["/assets/products/all/fig.jpeg"],
		price: 250,
	},
	{
		id: 6,
		name: "Premium Dates",
		image: ["/assets/products/all/dates.jpeg"],
		price: 240,
	},
	{
		id: 7,
		name: "Dried Cranberries",
		image: ["/assets/products/all/cranberry.jpeg"],
		price: 150,
	},
	{
		id: 8,
		name: "Dried Blueberries",
		image: ["/assets/products/all/blueberry.jpeg"],
		price: 180,
	},
	{
		id: 9,
		name: "Mamra Badam [L]",
		image: ["/assets/products/all/mamra-badaam.jpeg"],
		price: 220,
	},
	{
		id: 10,
		name: "Premium Black Raisins",
		image: ["/assets/products/all/black-raisins.jpeg"],
		price: 190,
	},
	{
		id: 11,
		name: "Premium Green Raisins",
		image: ["/assets/products/all/green-raisins.jpeg"],
		price: 190,
	},
];



// Featured products for PopularMenu component (limited to 4 items)
export const popularProducts: ProductItem[] = [
	{
		id: 1,
		name: "Walnut Jumbo Kernels",
		// description: "Premium roasted cashews with a rich, buttery flavor",
		image: ["/assets/products/landing/1.jpeg"],
		price: 200,
	},
	{
		id: 2,
		name: "Cashew Nuts",
		// description: "Crunchy salted cashews perfect for snacking",
		image: ["/assets/products/landing/2.jpeg"],
		price: 200,
	},
	{
		id: 3,
		name: "Premium Black Raisins",
		// description: "Fresh raw almonds packed with nutrients",
		image: ["/assets/products/landing/3.jpeg"],
		price: 180,
	},
	{
		id: 4,
		name: "Dried Blueberries",
		// description: "Sweet honey-glazed almonds for a delightful treat",
		image: ["/assets/products/landing/4.jpeg"],
		price: 220,
	},
];
