import { useEffect, useMemo, useState } from 'react';

import type { CartType } from '../types';

function useCart() {
  const [cart, setCart] = useState<CartType[]>(() => {
    try {
      const savedCart = localStorage.getItem('cart');

      return savedCart ? (JSON.parse(savedCart) as CartType[]) : [];
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

  function addToCart(product: CartType) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  function updateQuantity(id: number, quantity: number) {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item,
      ),
    );
  }

  const total = useMemo(() => {
    return Number(
      cart.reduce((sum, item) => {
        const itemTotal = item.price * (item.quantity || 0);
        return sum + itemTotal;
      }, 0),
    );
  }, [cart]);
}
export default useCart;
