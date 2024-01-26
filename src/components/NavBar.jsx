import { NavLink } from 'react-router-dom';

export default function NavBar() {
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
            <NavLink to="cart" className="iconFont cart">
              cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
