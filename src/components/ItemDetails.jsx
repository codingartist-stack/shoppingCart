import { useLoaderData, useParams } from 'react-router-dom';

//item has id, title, category, img, price, rating.rate, rating.count, description

export default function ItemDetails({ addToCart }) {
  const { id } = useParams();
  const item = useLoaderData();

  const handleClick = () => {
    addToCart(item);
  };

  return (
    <main className="itemDetailsContainer">
      <div key={id} className="itemDetails">
        <img src={item.image} alt={item.title} className="productImage" />
        <div className="itemDetailsInfo">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </main>
  );
}

//loader function
export const ItemDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
