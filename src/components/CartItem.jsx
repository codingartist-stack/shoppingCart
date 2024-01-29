import { Link } from 'react-router-dom';

//item has id, title, category, img, price, rating.rate, rating.count, description

const CartItem = ({ item }) => {
  const handleClick = () => {
    console.log(item);
  };

  return (
    <div className="cardItem" key={item.id}>
      <Link to={`/products/${item.id}`}>
        <img src={item.image} alt={item.title} className="productImage" />
      </Link>

      <Link to={`/products/${item.id}`} key={item.id}>
        {item.title}
      </Link>
      <p>${item.price}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  );
};

export default CartItem;
