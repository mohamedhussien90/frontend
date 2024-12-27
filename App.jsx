import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from  './header.jsx'
import Fbuttons from './fbuttons.jsx'
/*import Productcards from './productcards.jsx'
   <Header/>
   <Fbuttons/>
   <ProductList/>


   <Header/>
   <Productdetails/>
   <Instock/>
   <Footer/>
*/
import ProductList from './productlist.jsx';
import Productdetails from './productdetails.jsx'
import Instock from './instock.jsx'
import Footer from './footer.jsx'
import ShoppingCart from './shoppingcart.jsx'
import Signup from './Signup.jsx';
import Login from './Login.jsx';


function App() {

  const [user, setUser] = useState(null);

  // Callback function that's called when a user successfully logs in.  Receives user details from the Login component.
  const handleLogin = (userDetails) => { 
    setUser(userDetails); // Update the application's state with the user's details.
    console.log('User logged in:', userDetails); // Log the user details for debugging purposes.
  };

  // Function that handles user logout.  Removes user data and updates the state.
  const handleLogout = () => { 
    localStorage.removeItem('user'); // Remove user data from local storage (INSECURE - REPLACE WITH SECURE BACKEND LOGOUT).
    setUser(null); // Set the user state back to null, indicating that the user is no longer logged in.
  };

  // Callback function that's called when a user successfully signs up.  Receives user details from the Signup component.
  const handleSignup = (userDetails) => { 
    setUser(userDetails); // Update the application's state with the new user's details.
    console.log('User signed up:', userDetails); // Log user details for debugging purposes.
  };



  return(

    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<><ProductList /></>} />
          <Route path="/product/:id" element={<><Productdetails /> <Instock/></> } /> 
          <Route path="/cart" element={<ShoppingCart />} /> 
           
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> 
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} /> 
          

          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
       
        <Footer /> 
        
      </div>
    </Router>




  // <>
           
  //  <Header/>
  //  <ShoppingCart />
  //  <Footer/>
   
  // </>
)}

export default App
