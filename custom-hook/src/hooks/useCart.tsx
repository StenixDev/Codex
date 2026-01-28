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

  console.log(cart);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error("can't save to local storage", error);
    }
  }, [cart]);

  useEffect(() => {
    const handleStorage = (e) => {};
  }, []);
}
export default useCart;
