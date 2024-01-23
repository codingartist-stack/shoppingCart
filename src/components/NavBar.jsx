import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart" className="iconFont cart">
              cart
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
