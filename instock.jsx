import Button from 'react-bootstrap/Button';
import './instock.css'; 
function instock(){

    return(
    <div className="instock">
               <span class="in-stock">✔ In Stock </span> 
              <Button variant="outline-primary">ADD TO CART</Button>

    </div>
    );
};

export default instock;
