import { Minus, Plus, Trash } from 'lucide-react';

function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className='cart-item'>
      <div className='item-details'>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <div className='quantity-controls'>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <Minus />
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <Plus />
          </button>
        </div>
      </div>

      <button className='remove-btn' onClick={() => onRemove(item.id)}>
        <Trash />
      </button>
    </div>
  );
}
export default CartItem;
