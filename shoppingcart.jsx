import React, { useState } from 'react';
import './shoppingcart.css';
import cartback from './assets/backcart.jpg';


const shoppingcart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', price: 10, quantity: 2 },
        { id: 2, name: 'Item 2', price: 25, quantity: 1 },
    ]);



    const handleQuantityChange = (itemId, newQuantity) => {
        
        newQuantity = Math.max(0, newQuantity);

        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );


    };

    const handleRemoveItem = (itemId) => {

        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };




    return (
        <div className='background-image'>


        <div className="cart-page">
            
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <div className="item-name">{item.name}</div>

                            <div className="quantity-controls">
                                <button className='plusbutton' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button className='minusbutton' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            </div>

                            <div className="item-price">{item.price * item.quantity}L.E</div>

                            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                                Remove
                            </button>


                        </li>

                    ))}
                    
                </ul>
            )}
            

            <div className='choose-city'>
            <label for="city">Choose your city:</label>

            <select name="selectcity" id="city-select">
            <option value="Cairo">Cairo</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Gizeh">Gizeh</option>
           
            <option value="Port Said">Port Said</option>
            <option value="Suez">Suez</option>
            <option value="Luxor">Luxor</option>
            <option value="al-Mansura">al-Mansura</option>
            <option value="Tanta">Tanta</option>
            <option value="Asyut">Asyut</option>
            <option value="Ismailia">Ismailia</option>
            <option value="Fayyum">Fayyum</option>
            <option value="Zagazig">Zagazig</option>
            <option value="Aswan">Aswan</option>
            <option value="Damietta">Damietta</option>
            <option value="Damanhur">Damanhur</option>
            <option value="al-Minya">al-Minya</option>
            <option value="Beni Suef">Beni Suef</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Sohag">Sohag</option>
            <option value="6th of October City">6th of October City</option>
            <option value="Marsa Matruh">Marsa Matruh</option>
            </select>
            </div>    

            <div className='address'>
            <form >
          <input className='addressinput' type="text" placeholder="address"/>
         
           </form>
            </div>


            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <p>Total Price: {calculateTotalPrice()}L.E</p>
                    <button>Proceed to Checkout</button> 
                </div>
            )}



        </div>

     </div>
    );
};

export default shoppingcart;