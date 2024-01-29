import { useLoaderData } from 'react-router-dom';
import CardItem from './CardItem';

const Products = ({ addToCart }) => {
  const products = useLoaderData();
  return (
    <>
      <div className="grid">
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
      </div>
    </>
  );
};

export default Products;
