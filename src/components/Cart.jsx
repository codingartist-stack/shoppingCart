import { useMemo, useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ products, cartItems, addToCart, removeFromCart }) => {
  // const [totalPrice, setTotalPrice] = useState(0);

  let totalPrice = 0;

  const calculateTotal = () => {
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });

    totalPrice = totalPrice.toFixed(2);
  };

  calculateTotal();

  return (
    <main className="cart">
      <h1 className="cartTitle">Your Cart Items: {cartItems.length}</h1>

      <p className="total">Total Price: ${totalPrice}</p>
      <button className="checkOutBtn">Check Out</button>
      <div className="cartGrid">
        <hr />
        {cartItems.map((item) => {
          return (
            <>
              <CartItem
                item={item}
                key={crypto.randomUUID()}
                removeFromCart={removeFromCart}
              />{' '}
              <hr />
            </>
          );
        })}
      </div>
      <p className="total">Total Price: ${totalPrice}</p>
      <button className="checkOutBtn">Check Out</button>
    </main>
  );
};

export default Cart;
