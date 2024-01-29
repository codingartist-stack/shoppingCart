import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import UseCart from './useCart.jsx';
const { cartItems, addToCart, removeFromCart } = UseCart();

function App() {
  return (
    <>
      <h1>Shopping</h1>
      <NavBar cartItems={cartItems} />
      <Outlet />
    </>
  );
}

export default App;
