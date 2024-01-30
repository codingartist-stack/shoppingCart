import { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ products, cartItems, addToCart, removeFromCart }) => {
  // const [totalPrice, setTotalPrice] = useState(0);
  const [checkOut, setCheckOut] = useState(false);

  const handleCheckOutMessage = () => {
    setCheckOut(!checkOut);
  };

  let totalPrice = 0;

  const calculateTotal = () => {
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });

    totalPrice = totalPrice.toFixed(2);
  };

  calculateTotal();

  return (
    <>
      {checkOut ? (
        <aside className="CheckOutPop">
          <div className="checkoutMessage">
            <button
              className="iconFont exitBtn"
              onClick={handleCheckOutMessage}
            >
              cross
            </button>
            <h3>Check Out</h3>
            <p>
              are you ready to check out?
              <br />
              Your total is ${totalPrice}
            </p>
            <button>Proceed to Checkout</button>
          </div>
        </aside>
      ) : (
        ''
      )}
      <main className="cart">
        <h1 className="cartTitle">Your Cart Items: {cartItems.length}</h1>

        <p className="total">Total: ${totalPrice}</p>
        <button className="checkOutBtn" onClick={handleCheckOutMessage}>
          Check Out
        </button>
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
        {cartItems.length > 0 ? (
          <>
            <p className="total">Total Price: ${totalPrice}</p>
            <button className="checkOutBtn" onClick={handleCheckOutMessage}>
              Check Out
            </button>
          </>
        ) : (
          ''
        )}
      </main>
    </>
  );
};

export default Cart;
