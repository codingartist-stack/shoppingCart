const CardItem = ({ item }) => {
  const handleClick = () => {
    console.log('some thing happened');
  };

  return (
    <div className="cardItem" key={item.id}>
      <img src={item.image} alt={item.title} className="productImage" />
      <p>{item.title}</p>
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
};

export default CardItem;
