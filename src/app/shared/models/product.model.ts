export interface AllProductResponse {
  products: SingleProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface SingleProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
