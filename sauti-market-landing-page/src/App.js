
import React, { useState, createContext } from 'react';

import Header from './components/Header';
import ItemForm from './components/Item';
import Product from './components/Product';
import Footer from './components/Footer';

import './App.css';
import ProductCard from './components/ProductCard';


export const ProductContext = createContext();
// const NewUserContext = createContext();  
// const UserContext = createContext();


export const App = () => {
  const [product, setProduct] = useState({ 
    id: 0, 
    product_id: 0,
    seller_id: 0,
    seller_price: 0, 
    qty: 0,
    description:""
  });
  console.log(ProductContext);
  // const [newUser, setNewUser] = useState(); // newUserForm
  // const [user, setUser] = useState(); //Login 
  return (
    <div className="App">

      <header className="App-header"><Header /></header>
      <header className="App-header"><p>Welcome to Landing Page that will render mapped products</p></header>

        
       <ItemForm /> TK!! ItemForm needs no UseContext - holds it's own state. edit and delete here for merchants? Should see products updated/added/deleted. 

       <ProductContext.Provider value={{product, setProduct}} >
        <Product />
       </ProductContext.Provider>

       <Footer />
     


    </div>
  );
}


// use contextAPI to pull the product card RS is coding
//            this page will connect to login page for both customer and merchant
//                                   to create/edit/delete page for logged in merchants  
//            contain header and footer navigation

// const sampleProduct = {
//   id: 0,
//   productName: "basket",
//   country: "Kenya",
//   market: "Wallingford",
//   price: 0,
//   description: "This decorative basket is hand-crafted by village artisans.",
//   isPurchased: "false",
//   merchantId: 0
// };