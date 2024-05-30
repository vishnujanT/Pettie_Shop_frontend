import React, { useEffect, useState } from "react";
import './products.css';

function Petproducts() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetch('https://pettie-shop-backend.onrender.com/api/products')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProductList(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const petFoodProducts = productList.filter(product => product.category === 'petfood');
    const petMedicineProducts = productList.filter(product => product.category === 'petmedicine');
    const petAccessoriesProducts = productList.filter(product => product.category === 'petaccessories');
    const petToysProducts = productList.filter(product => product.category === 'pettoys');
    const renderStars = (rating) => {
        return (
            <span className="stars">
                {'★'.repeat(rating)}
                {'☆'.repeat(5 - rating)}
            </span>
        );
    };


    const renderProducts = (products) => (
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                     <img 
                         src={product.imageUrl} 
                         alt={product.name} 
                         className="product-image" 
                    />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-availability">Available Items : {product.availability}</p>
                    <p className="product-rating"> {renderStars(product.rating)}
                    <span className="product-price"> $ {product.price}.00</span> </p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="heading-pro">
                <h1>Our Products</h1>
            </div>
            <div >
                <h2 className="product-heading">Pet Food</h2>
                {renderProducts(petFoodProducts)}
            </div>
            <div>
                <h2 className="product-heading">Pet Medicine</h2>
                {renderProducts(petMedicineProducts)}
            </div>
            <div>
                <h2 className="product-heading">Pet Accessories</h2>
                {renderProducts(petAccessoriesProducts)}
            </div>
            <div>
                <h2 className="product-heading">Pet Toys</h2>
                {renderProducts(petToysProducts)}
            </div>
        </div>
    );
}

export default Petproducts;
