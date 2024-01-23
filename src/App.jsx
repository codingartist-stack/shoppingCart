import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('useEffect ran');

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);

  return (
    <>
      <h1>Shopping</h1>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
