import { useMemo, useState } from 'react';

const Cart = ({ products }) => {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <>
      <h1>Cart</h1>
      <p>pretend buy stuff</p>
    </>
  );
};

export default Cart;
