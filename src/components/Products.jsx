import { useLoaderData } from 'react-router-dom';
import CardItem from './CardItem';

const Products = ({ addToCart }) => {
  const products = useLoaderData();
  return (
    <>
      <h1>Products</h1>

      <main className="products">
        {products.map((item) => {
          return (
            <CardItem
              item={item}
              key={crypto.randomUUID()}
              addToCart={addToCart}
            />
          );
        })}
      </main>
    </>
  );
};

export default Products;
