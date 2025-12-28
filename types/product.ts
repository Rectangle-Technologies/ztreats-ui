export interface ProductItem {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	originalPrice?: number;
	discount?: number;
	rating: number;
	reviews: number;
	inStock: boolean;
}
