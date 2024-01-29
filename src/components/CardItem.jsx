import { Link } from 'react-router-dom';

//item has id, title, category, img, price, rating.rate, rating.count, description

const CardItem = ({ item, addToCart }) => {
  const handleClick = () => {
    addToCart(item);
  };

  return (
    <div className="cardItem" key={item.id}>
      <Link to={`/products/${item.id}`}>
        <img src={item.image} alt={item.title} className="productImage" />
      </Link>
      <p>
        {item.rating.rate} <span className="iconFont">star</span>
      </p>
      <Link to={`/products/${item.id}`} key={item.id}>
        {item.title}
      </Link>
      <p>${item.price}</p>
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
};

export default CardItem;
