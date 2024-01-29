import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import UseCart from './useCart.jsx';

function App() {
  const { cartItems } = UseCart();

  return (
    <>
      <h1>Shopping</h1>
      <NavBar cartItems={cartItems} />
      <Outlet />
    </>
  );
}

export default App;
