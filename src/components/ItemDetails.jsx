import { useLoaderData, useParams } from 'react-router-dom';

//item has id, title, category, img, price, rating.rate, rating.count, description

export default function ItemDetails() {
  const { id } = useParams();
  const item = useLoaderData();

  const addToCart = () => {
    console.log('add to cart was clicked');
    console.log(item);
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
        <button onClick={addToCart}>Add to Cart</button>
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
