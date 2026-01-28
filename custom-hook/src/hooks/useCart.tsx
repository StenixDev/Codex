import { useEffect, useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

function useCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('cart');

      return savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];
    } catch (error) {
      console.error("Can't get data from local storage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error("can't save to local storage", error);
    }
  }, [cart]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cart') {
        try {
          const newCart = JSON.parse(e.newValue || '[]');
          setCart(newCart);
        } catch (error) {
          console.error('failed to parse from local storage', error);
        }
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, []);
}
export default useCart;
