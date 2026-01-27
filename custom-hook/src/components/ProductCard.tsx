import { ShoppingCart } from 'lucide-react';
type Product = {
  name: string;
  price: number;
};
type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className='product-cart'>
      <h3>{product.name}</h3>
      <p className='price'>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <ShoppingCart /> Add to Cart
      </button>
    </div>
  );
}
export default ProductCard;
