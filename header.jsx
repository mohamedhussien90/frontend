
import './Header.css'; 
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import logophoto from './assets/asuslogo.png'
import cartpic from './assets/cart.jpg'
import pfp from './assets/pfp.jpg'


function header()  {

  const navigate = useNavigate(); 


  

  return (
    <header className="header">
      <div className="logopic">
      <Link to="/">
        <img src={logophoto} alt ="" id="logo"></img>
        </Link>
      </div>

      

      <div className="search-bar">
        <form >
          <input
            type="text"
            placeholder="Search for products..."
            
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="profile">
        <Link to="/login">
      <img src={pfp} alt ="" id="profilepic"></img>
      </Link>
      <h2 id ="username">Guest</h2>

      </div>

      <div className="cart">
      <Link to="/cart"> 
          <img src={cartpic} alt="Shopping Cart" id="cart" />
        </Link>
        
      </div>

      
    </header>
  );
};

export default header;
