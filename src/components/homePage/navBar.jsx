// NavBar.js
import React from 'react';
import "./homePage.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">Pettie</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#footer">Contact</a></li>
                <li><a href="#categories">Categories</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
