import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [projects, setProjects] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <h1>Shopping</h1>
      <NavBar />
    </>
  );
}

export default App;
