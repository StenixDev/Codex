export type Product = {
  id?: number;
  name: string;
  price: number;
};
export type ProductProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export type CartType = Product & {
  quantity: number;
};
