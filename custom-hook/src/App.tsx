import ProductCard from './components/ProductCard';
import { products } from './data/product';
import useCart from './hooks/useCart';
import './App.css';

function App() {
  const { total, updateQuantity, removeFromCart, addToCart } = useCart();
  return (
    <>
      <div className='app'>
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main className='products'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </main>
      </div>
    </>
  );
}
export default App;
