import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App({ cartItems }) {
  return (
    <>
      <h1>
        <span className="iconFont">store</span>Shopping
      </h1>
      <NavBar cartItems={cartItems} />
      <Outlet />
    </>
  );
}

export default App;
