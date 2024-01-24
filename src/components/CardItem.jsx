const CardItem = ({ item }) => {
  return (
    <div className="cardItem" key={item.id}>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CardItem;
