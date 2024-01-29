// import { useMemo, useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ products, cartItems, addToCart, removeFromCart }) => {
  // const totalPrice = useMemo(() => {
  //   return products.reduce(
  //     (total, product) => total + product.price * product.quantity,
  //     0
  //   );
  // }, [products]);

  console.log(cartItems);

  return (
    <>
      <h1>Cart</h1>
      <main className="cartGrid">
        {cartItems.map((item) => {
          return <CartItem item={item} key={crypto.randomUUID()} />;
        })}
      </main>
    </>
  );
};

export default Cart;
