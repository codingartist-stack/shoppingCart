const CardItem = ({ item }) => {
  return (
    <div className="cardItem" key={item.id}>
      <img src={item.image} alt={item.title} className="productImage" />
      <button>add to cart</button>
    </div>
  );
};

export default CardItem;
