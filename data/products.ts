import { ProductItem } from "@/types/product";

export const products: ProductItem[] = [
	{
		id: 1,
		name: "Cashew Nuts",
		image: ["/assets/products/all/cashews.jpeg", "/assets/products/all/cashews-2.jpeg"],
		price: 450,
	},
	{
		id: 2,
		name: "California Almonds Jumbo",
		image: ["/assets/products/all/california-almonds.jpeg","/assets/products/all/california-almonds-2.jpeg"],
		price: 335,
	},
	{
		id: 3,
		name: "Walnut Jumbo Kernels",
		image: ["/assets/products/all/walnuts.jpeg", "/assets/products/all/walnuts-2.jpeg"],
		price: 615,
	},
	{
		id: 4,
		name: "Pistachios",
		image: ["/assets/products/all/pistachio.jpeg", "/assets/products/all/pistachio-2.jpeg"],
		price: 440,
	},
	{
		id: 5,
		name: "Premium Figs",
		image: ["/assets/products/all/fig.jpeg", "/assets/products/all/fig-2.jpeg"],
		price: 625,
	},
	{
		id: 6,
		name: "Premium Dates",
		image: ["/assets/products/all/dates.jpeg", "/assets/products/all/dates-2.jpeg"],
		price: 275,
	},
	{
		id: 7,
		name: "Dried Cranberries",
		image: ["/assets/products/all/cranberry.jpeg", "/assets/products/all/cranberry-2.jpeg"],
		price: 300,
	},
	{
		id: 8,
		name: "Dried Blueberries",
		image: ["/assets/products/all/blueberry.jpeg", "/assets/products/all/blueberry-2.jpeg"],
		price: 550,
	},
	{
		id: 9,
		name: "Mamra Badam [L]",
		image: ["/assets/products/all/mamra-badaam.jpeg", "/assets/products/all/mamra-badaam-2.jpeg"],
		price: 1125,
	},
	{
		id: 10,
		name: "Premium Black Raisins",
		image: ["/assets/products/all/black-raisins.jpeg", "/assets/products/all/black-raisins-2.jpeg"],
		price: 420,
	},
	{
		id: 11,
		name: "Premium Green Raisins",
		image: ["/assets/products/all/green-raisins.jpeg", "/assets/products/all/green-raisins-2.jpeg"],
		price: 210,
	},
];



// Featured products for PopularMenu component (limited to 4 items)
export const popularProducts: ProductItem[] = [
	{
		id: 1,
		name: "Walnut Jumbo Kernels",
		// description: "Premium roasted cashews with a rich, buttery flavor",
		image: ["/assets/products/landing/1.jpeg"],
		price: 615,
	},
	{
		id: 2,
		name: "Cashew Nuts",
		// description: "Crunchy salted cashews perfect for snacking",
		image: ["/assets/products/landing/2.jpeg"],
		price: 450,
	},
	{
		id: 3,
		name: "Premium Black Raisins",
		// description: "Fresh raw almonds packed with nutrients",
		image: ["/assets/products/landing/3.jpeg"],
		price: 420,
	},
	{
		id: 4,
		name: "Dried Blueberries",
		// description: "Sweet honey-glazed almonds for a delightful treat",
		image: ["/assets/products/landing/4.jpeg"],
		price: 550,
	},
];
