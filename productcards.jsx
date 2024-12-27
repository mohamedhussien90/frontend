import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import asus from './assets/asus.jpg'
import './productcards.css';
function productcards({product}){

    return(
        <Link to="/product/:id">
        <div className="cardcont">
        <Card style={{ width: '18rem', height: '33rem' }} >
        <Card.Img variant="top" src={product.image} className="productimg" />
        <Card.Body  className="card-content">
        <Card.Title className='title'>{product.title}</Card.Title>
                <Card.Text className='descrip'>
                    {product.description}
                </Card.Text>
                <div className="priceandcart">
                    <h4 id ="price">{product.price}</h4> 
                    <Button className='cardbutton' variant="primary">Add to Cart</Button>
                </div>
        </Card.Body>
      </Card>
      </div>
      </Link>
    );
};

export default productcards;
