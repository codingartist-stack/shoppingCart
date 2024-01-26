import { useLoaderData, useParams } from 'react-router-dom';

export default function ItemDetails() {
  const { id } = useParams();
  const item = useLoaderData();
  return (
    <>
      <div key={id}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} className="productImage" />
        <p>${item.price}</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

//loader function
export const ItemDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
