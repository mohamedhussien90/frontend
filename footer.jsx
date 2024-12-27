import React from 'react';
import './Footer.css';

function productcards(){

    return(
        <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h2>Ecommerce</h2> 
            <div className="contact-info">
              <div>
                  
                  <span>25 Esraa Elmoalmeen Elmohandseen</span>
              </div>
              <div>
                  
                  <span>0233033099</span>
              </div>
              <div>
                  <i className="far fa-envelope"></i>
                  <span>Ecommerce@Gmail.Com</span>
              </div>
              <div>
                  <i className="fas fa-clock"></i>
                  <span>Open Time: 11:00AM - 07:00PM</span>
              </div>
  
            </div>
          </div>
          <div className="footer-column">
            <h3>INFORMATION</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/branches">Our branches</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>BRANDS</h3>
            <ul>
              <li>Western Digital</li>
              <li>Kingston</li>
              <li>Lenovo</li>
              <li>Dell</li>
              <li>Canon</li>
              <li>BENQ</li>
  
            </ul>
          </div>
          <div className="footer-column">
            <h3>CATEGORIES</h3>
            <ul>
              <li>Desktop</li>
              <li>Notebook</li>
              <li>Storage</li>
              <li>Monitors</li>
              <li>Network</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>SELLER</h3>
            <ul>
                  <li>Ecommerce</li>
                  <li>aula</li>
                  <li>ingco</li>
                  <li>msi</li>
                  <li>c-m</li>
                  
            </ul>
          </div>
          <div className="footer-column">
              <h3>SIGNUP FOR NEWSLETTER</h3>
              <p>We’ll never share your email address with a third-party.</p>
  
          </div>
        </div>
        <div className="footer-bottom">
          <p>
          Ecommerce Computer © {new Date().getFullYear()} All Rights Reserved. Designed by Ecommerce Computer
          </p>
          
        </div>
         
      </footer>
    );
};

export default productcards;
