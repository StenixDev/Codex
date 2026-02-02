import ProductCard from './components/ProductCard';
import { products } from './data/product';
import useCart from './hooks/useCart';
import './App.css';
import Cart from './components/Cart';

function App() {
  const { total, updateQuantity, removeFromCart, addToCart, cart } = useCart();
  return (
    <>
      <div className='app'>
        <header>
          <h1>Shopping Cart</h1>
        </header>

        <div className='flex'>
          <div className='flex-1'>
            <main>
              <div className='products'>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
              <div>
                <Cart
                  cart={cart}
                  onRemove={removeFromCart}
                  total={total}
                  onUpdateQuantity={updateQuantity}
                />
              </div>
            </main>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
export default App;
