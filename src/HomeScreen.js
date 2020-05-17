import React from 'react'
import data from './data'
import { Link } from "react-router-dom";
export default function HomeScreen() {
    return (
        <div>
            <ul className="products">
                  {data.products.map(product=>
                    <li>
                    <div className="product">
                        <img className="product-image" src="./images/product1.webp" alt="product"/>
                        <Link to={"products/"+ product._id}><div className="product-name">{product.name}</div></Link>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.stars} Stars (10 {product.review})</div>
                    </div>
                </li>
                    )}
                    
                    
                </ul>
        </div>
    )
}
