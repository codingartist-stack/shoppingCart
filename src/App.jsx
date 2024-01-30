import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App({ cartItems }) {
  return (
    <>
      <h1>4FunShopping</h1>
      <NavBar cartItems={cartItems} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
