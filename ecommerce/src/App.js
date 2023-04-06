import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our online store</h1>
      </header>
      <div className="hero-banner">
        <img src="https://placeimg.com/640/480/tech" alt="hero-banner" />
        <div className="hero-content">
          <h2>Check out our latest deals and must-have items</h2>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="product-list">
        <div className="product-item">
          <img src="https://placeimg.com/640/480/fashion" alt="product-image" />
          <h3>Men's Hoodie</h3>
          <p>Keep warm and stylish with our comfortable hoodie made from premium cotton material. Available in various colors and sizes.</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-item">
          <img src="https://placeimg.com/640/480/fashion" alt="product-image" />
          <h3>Women's Leggings</h3>
          <p>Our leggings are designed with both comfort and fashion in mind. Made from stretchy and breathable fabric, they are perfect for everyday wear.</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-item">
          <img src="https://placeimg.com/640/480/fashion" alt="product-image" />
          <h3>Wireless Earbuds</h3>
          <p>Experience high-quality sound and convenience with our wireless earbuds. Compatible with all devices and easy to use.</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-item">
          <img src="https://placeimg.com/640/480/fashion" alt="product-image" />
          <h3>Smartwatch</h3>
          <p>Stay connected and stylish with our smartwatch. With features like GPS, heart rate monitor, and more, it's the perfect accessory for your active lifestyle.</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-item">
          <img src="https://placeimg.com/640/480/fashion" alt="product-image" />
          <h3>Portable Charger</h3>
          <p>Never run out of battery again with our portable charger. Compact and easy to carry, it's the perfect solution for your on-the-go charging needs.</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-item">
          <img src="https://placeimg.com/640/480/fashion" alt="product-image" />
          <h3>Backpack</h3>
          <p>Carry all your essentials in style with our backpack. With multiple compartments and a durable design, it's the perfect choice for your everyday adventures.</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <Carousel></Carousel>
    </div>

  );
}

export default App;