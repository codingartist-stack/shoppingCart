import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App({ cartItems }) {
  return (
    <>
      <h1>4FunShopping</h1>
      <NavBar cartItems={cartItems} />
      <Outlet />
    </>
  );
}

export default App;
