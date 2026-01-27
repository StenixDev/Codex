import { ShoppingCart } from 'lucide-react';
import type { ProductProps } from '../types';

function ProductCard({ product, onAddToCart }: ProductProps) {
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
