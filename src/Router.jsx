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
