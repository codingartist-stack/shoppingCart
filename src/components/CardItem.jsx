import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
  const handleClick = () => {
    console.log('some thing happened');
  };

  return (
    <div className="cardItem" key={item.id}>
      <img src={item.image} alt={item.title} className="productImage" />
      <Link to={`/products/${item.id}`} key={item.id}>
        {item.title}
      </Link>
      <p>${item.price}</p>
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
};

export default CardItem;
