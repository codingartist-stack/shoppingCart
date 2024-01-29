import { Link } from 'react-router-dom';

//item has id, title, category, img, price, rating.rate, rating.count, description

const CardItem = ({ item, addToCart }) => {
  const handleClick = () => {
    addToCart(item);
  };

  return (
    <div className="cardItem" key={item.id}>
      <p className="rating">
        {item.rating.rate} <span className="iconFont starIcon">star</span>
      </p>
      <Link to={`/products/${item.id}`}>
        <img src={item.image} alt={item.title} className="productImage" />
      </Link>

      <Link to={`/products/${item.id}`} key={item.id}>
        {item.title}
      </Link>
      <p className="price">${item.price}</p>
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
};

export default CardItem;
