import React from 'react';
import './App.css';
import Gallery from '../../components/Gallery/Gallery';
import { useNavigate } from 'react-router-dom';

import "./App.css";
import { PRODUCTS } from '../products/Products';








const images = [
  {
    src: "https://i0.wp.com/compify.in/wp-content/uploads/2022/12/4090-HOF-5.jpg?fit=600%2C600&ssl=1",
    alt: "Image 1",
    description: "Description of image 1",
  },
  {
    src: "https://i0.wp.com/compify.in/wp-content/uploads/2022/12/4090-HOF-1.jpg?fit=600%2C600&ssl=1",
    alt: "Image 2",
    description: "Description of image 2",
  },
  {
    src: "https://placeimg.com/640/480/fashion",
    alt: "Image 3",
    description: "Description of image 3",
  },
  // add more images here
];


function App() {
  const navigate = useNavigate();

  const navigateShop = () => {
    // 👇️ navigate to /contacts
    navigate('./Shop');
  };

  const navigateProducts = () => {
    // 👇️ navigate to /products
    navigate('/Products');
  };

  return (

    <div className="App">
      <header className="App-header">

        <div class="hero-image"></div>
        <div class="hero-text"></div>
        <h1>Welcome to my secret shop</h1>


        <button className='Botao-produtos' onClick={navigateProducts}>products</button>
        <button className='Botao-shop' onClick={navigateShop}>shop</button>

      </header>

      <div className="product-list">
        <div className="products">
          {PRODUCTS.map((Product) => (
            <Product data={Product} />
          ))}
        </div>
        <Gallery images={images} ></Gallery>
        <div border="0.1, red" className="product-item">
          <img src="https://i0.wp.com/compify.in/wp-content/uploads/2022/12/4090-HOF-5.jpg?fit=600%2C600&ssl=1" alt="Gpu ultra fast" />
          <img src='https://i0.wp.com/compify.in/wp-content/uploads/2022/12/4090-HOF-1.jpg?fit=600%2C600&ssl=1' alt="GPU rtx " />
          <h3>RTX 4090 Ti</h3>
          <p>The RTX 4090 is a top-of-the-line graphics card that is
            designed to deliver unparalleled gaming and professional-level performance.
          </p>
          <p>This graphics card also boasts an impressive 48GB of GDDR6X memory, providing lightning-fast
            data transfer speeds and the ability to handle massive datasets and complex simulations. </p>
          <button>Add to Cart</button>

        </div>


      </div>
    </div>

  );
}

export default App;