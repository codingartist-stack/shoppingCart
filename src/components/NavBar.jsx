import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({ cartItems }) {
  const [cartCount, setCartCount] = useState(0);
  // useEffect(() => {
  //   setCartCount((prevCount) => {
  //     prevCount + 1;
  //   });
  // }, [cartItems]);

  return (
    <>
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>

        <NavLink to="products">Products</NavLink>

        <NavLink to="cart" className="iconFont cartIcon">
          cart <span>{cartItems.length}</span>
        </NavLink>
      </nav>
    </>
  );
}
