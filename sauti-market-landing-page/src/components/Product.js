
// import { Router, Route, Switch } from "react-router";
import React, {useContext} from 'react';
import ProductCard from "./ProductCard";
import {ProductContext} from '../App';



const Product = () => {
  const product = useContext(ProductContext);
  return (
    <div className="App">
        <div style={{height: "500px"}}>
          Placeholder for Product Container Component
          {product.seller_price}
        </div>
        <ProductCard />
        
    </div>
  );
}

export default Product;

