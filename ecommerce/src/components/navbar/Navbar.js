import React from "react";

import "../../style/main.css";
import {useRef} from 'react';

import { FaTimes, FaBars } from "react-icons/fa";


function navbar() {
    
    const NavRef = useRef();

    const ShowNavBar = () => {
        NavRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Urban Store</h3>
            <nav ref={NavRef} />
            <nav>
                <a href="/">Home</a>
                <a href="/Products">Products</a>
                <a href="/About">About</a>
                <button className="nav-btn nav-close-btn" onClick={ShowNavBar}>
                    <FaTimes />
                </button>
                <button className="nav-btn" onClick={ShowNavBar}>
                    <FaBars />
                </button>
            </nav>
        </header>
    );
};
export default navbar;