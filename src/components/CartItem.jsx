import { Link } from 'react-router-dom';

//item has id, title, category, img, price, rating.rate, rating.count, description

const CartItem = ({ item, removeFromCart }) => {
  const handleClick = () => {
    removeFromCart(item.id);
  };

  return (
    <div key={item.id} className="cartItem">
      <Link to={`/products/${item.id}`}>
        <img src={item.image} alt={item.title} className="productImage" />
      </Link>

      {/* <div className="cartItemInfo"> */}
      <Link
        to={`/products/${item.id}`}
        key={item.id}
        className="cartItemITitle"
      >
        {item.title}
      </Link>
      <p>${item.price}</p>
      <button onClick={handleClick} className="iconFont deleteBtn">
        trash
      </button>
      {/* </div> */}
    </div>
  );
};

export default CartItem;
