import { useState } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <h1>Shopping</h1>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
