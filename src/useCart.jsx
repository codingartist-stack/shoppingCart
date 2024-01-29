import { useState } from 'react';

export default function UseCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      return (prevCart = [...prevCart, item]);
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  return { cartItems, addToCart, removeFromCart };
}
