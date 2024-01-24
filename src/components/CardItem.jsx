const CardItem = ({ item }) => {
  return (
    <div className="cardItem" key={item.id}>
      <img src={item.image} alt={item.title} className="productImage" />
    </div>
  );
};

export default CardItem;
