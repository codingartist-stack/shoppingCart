import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import App from './App.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'products',
          element: <Products />,
          loader: async () => {
            return fetch('https://fakestoreapi.com/products');
          },
        },
        {
          path: 'cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
