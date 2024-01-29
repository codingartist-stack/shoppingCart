import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({ cartItems }) {
  console.log(cartItems);
  const [cartCount, setCartCount] = useState(0);
  // useEffect(() => {
  //   setCartCount((prevCount) => {
  //     prevCount + 1;
  //   });
  // }, [cartItems]);

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
              cart <span>{cartItems.length}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
