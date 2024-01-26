import { Outlet, useLoaderData } from 'react-router-dom';
import CardItem from './CardItem';

const Products = () => {
  const products = useLoaderData();
  return (
    <>
      <h1>Products</h1>
      <main className="products">
        {products.map((item) => {
          return <CardItem item={item} key={crypto.randomUUID()} />;
        })}
      </main>
    </>
  );
};

export default Products;
