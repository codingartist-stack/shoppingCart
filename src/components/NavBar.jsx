import { NavLink } from 'react-router-dom';

export default function NavBar({ cartItems }) {
  let cartCount = 0;

  return (
    <>
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <NavLink to="cart" className="iconFont cartIcon">
              cart <span>{cartCount > 0 ? ' hello' : ''}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
