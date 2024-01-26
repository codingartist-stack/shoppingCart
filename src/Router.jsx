import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ItemDetails from './components/ItemDetails.jsx';
import { ItemDetailsLoader } from './components/ItemDetails.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'products',
          element: <Products />,
          loader: async () => {
            return fetch('https://fakestoreapi.com/products');
          },
        },
        {
          path: 'products/:id',
          element: <ItemDetails />,
          loader: ItemDetailsLoader,
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
