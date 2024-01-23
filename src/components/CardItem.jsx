const CardItem = ({ item }) => {
  return (
    <div className="cardItem">
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CardItem;
