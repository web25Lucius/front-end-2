import React, {useState} from 'react'
import TextInput from './TextInput.js'
import axiosWithAuth from '../headers/axiosWithAuth';
import Header from './Header';
import Footer from './Footer';

const ItemForm = () => {
  const [itemFormValues, setItemFormValues] = useState({
    productName: "", 
    description: "", 
    seller_price: 0, 
    qty: 0
  });

    //const {itemFormValues, setItemFormValues, loginDisabled} = props

  const inputChange = (e) => {
    const { name, value } = e.target;
        // console.log(`name: ${name}, value: ${value}`);
    const inputValue = value;
      console.log("inputValue: ", inputValue)
      setItemFormValues({ ...itemFormValues, [name]: inputValue });
    } 

  const onFormSubmit = (e) => {
      console.log('Item Submitted and Displayed on Next Line');
      e.preventDefault();

      axiosWithAuth()
      .post("https://buildweeksautimarket.herokuapp.com/api/auth/product", itemFormValues)

      .then(response => {console.log("response: ", response)})

      .catch(err => { console.log(err) });
  
      }
        // console.log(item);
        
    
    return (
        <>
            {/* <Header/> */}
            <div className='background-itemForm'>
              <div className='itemForm-container'>
              <form className='itemForm' onSubmit={onFormSubmit}>
                  <div className='itemForm-title'>
                    <h1 >Add Product</h1>
                  </div>

                  <TextInput
                    type="text"
                    name="productName"
                    placeholder="Product's Name"
                    onChange={inputChange} 
                    value={itemFormValues}
                    label="product name"
                  />
                    <TextInput
                    type="text"
                    name="description"
                    placeholder="Product description"
                    onChange={inputChange} 
                    value={itemFormValues}
                    label="product description"
                  />
                    <TextInput
                    type="text"
                    name="seller_price"
                    placeholder="Seller price"
                    onChange={inputChange} 
                    value={itemFormValues}
                    label="seller price"
                  />
                    <TextInput
                    type="text"
                    name="qty"
                    placeholder="Qty"
                    onChange={inputChange} 
                    value={itemFormValues}
                    label="item quantity"
                  />
                  {/* <div>{itemFormErrors.itemName}</div> */}

                  {/* <div className='itemForm-radio'>
                  <input type="radio" name="isOverEighteen" onChange={inputChange} value={true}/>Are you over 18 years of age?
                  </div> */}
                  {/* <div>{itemFormErrors.isOverEighteen}</div> */}


                  <div className='itemForm-slider'>
                      <div className="slider-container">
                      {/* <label className="switch">
                        <input id="isMerchant" type="checkbox" name="merchant"
                        checked={itemFormValues.isMerchant} onChange={inputChange}/> 
                        <span className="slider"></span><br/>
                      </label>
                      <p className="slider-text">Are you an instructor?</p> */}

                      </div>
                  </div>

                  <br/>
                  <br/>
                  <button  id="submitBtn" >Submit</button> 

              </form>
              </div>
              </div>

            

        </>
      )
    }    
export default ItemForm;