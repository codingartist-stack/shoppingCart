import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ItemDetails from './components/ItemDetails.jsx';
import { ItemDetailsLoader } from './components/ItemDetails.jsx';
import UseCart from './useCart.jsx';

const Router = () => {
  const { cartItems, addToCart, removeFromCart } = UseCart();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'products',
          element: <Products addToCart={addToCart} />,
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
          element: (
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
