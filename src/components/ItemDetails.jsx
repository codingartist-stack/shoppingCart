export default function ItemDetails() {
  return (
    <>
      <img src={item.image} alt={item.title} className="productImage" />
      <p>{item.title}</p>
    </>
  );
}
