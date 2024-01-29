import { NavLink } from 'react-router-dom';

export default function NavBar({ cartItems }) {
  return (
    <>
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>

        <NavLink to="products">Products</NavLink>

        <NavLink to="cart" className="iconFont navCart">
          cart <span className="itemCount">{cartItems.length}</span>
        </NavLink>
      </nav>
    </>
  );
}
