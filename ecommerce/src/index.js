import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/products/Products';

import Shop from './pages/products/product';
import Cart from './pages/cart/cart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
