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
import shop from './pages/shop/Shop.jsx';
import Shop from './pages/shop/product';



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
