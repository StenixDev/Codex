import CartItem from './CartItem';
import type { Product } from '../types';

type CartProps = {
  cart: Product[];
  onUpdateQuantity: () => void;
  onRemove: () => void;
  total: number;
};

function Cart({ cart, onUpdateQuantity, onRemove, total }: CartProps) {
  if (cart.length === 0)
    return <div className='cart empty'>Your Cart is Empty</div>;

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}

      <div className='cart-total'>
        <h3>Total: {total}</h3>
        <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  );
}
export default Cart;
