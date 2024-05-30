// App.js
import React from 'react';
import './App.css';
import NavBar from './components/homePage/navBar.jsx';
import SearchBar from './components/homePage/searchBar';
import HomePageGrid from './components/homePage/homePageGrid';
import HomePageIntro from './components/homePage/homePageIntro';
import Categories from './components/topCategories/categories';
import PetProducts from './components/products/petProducts.jsx';
import OurService from './components/service/ourService.jsx';
import FooterPart from './components/footer/footerPart.jsx';

function App() {
    return (
        <div className="App">
            <NavBar />
            <SearchBar />
            <section id="home"><HomePageIntro /></section>
            <section id="categories"><Categories /></section>
            <section id="products"><PetProducts /></section>
            <section id="services"><OurService /></section>
            <section id="footer"><FooterPart /></section>
        </div>
    );
}

export default App;
