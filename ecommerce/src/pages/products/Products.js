import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';





import Gallery from '../../components/Gallery/Gallery';

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

const Products = () => {

    const navigate = useNavigate();
    const navigateToProducts = () => {
        // 👇️ navigate to /contacts
        navigate('/products');
    };

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };

    return (
        <div className="App">
            <header className="App-header">

                <p>My favourite costumer</p>

                <a href="#" onClick={navigateToProducts}>
                </a>
                <button onClick={navigateHome}>Home</button >
            </header>
            <div className="product-list">
                <Gallery images={images} ></Gallery>
                <div border="0.1, red" className="product-item">

                    <h3>RTX 4090 Ti</h3>
                    <p>The RTX 4090 is a top-of-the-line graphics card that is
                        designed to deliver unparalleled gaming and professional-level performance.
                    </p>
                    <p>This graphics card also boasts an impressive 48GB of GDDR6X memory, providing lightning-fast
                        data transfer speeds and the ability to handle massive datasets and complex simulations. </p>
                    <button>Add to Cart</button>

                </div>


            </div>
            <footer className="App-footer"></footer>
        </div>
    );
};
export default Products;
