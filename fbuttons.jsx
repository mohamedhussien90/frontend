import Button from 'react-bootstrap/Button';
import './fbuttons.css'; 
import { useState, useEffect } from 'react';
function fbuttons({ onFilterChange }){

   
    const handleFilterClick = (filterType) => {
       
        onFilterChange(filterType); 
    };

    return(
    <div className="fbuttons">
              <Button className='buttonone' variant="outline-success"     onClick={() => handleFilterClick('lowToHigh')}>LowtoHigh</Button>
              <Button className='buttontwo' variant="outline-info"  onClick={() => handleFilterClick('highToLow')}>HightoLow</Button> 
              <Button className='buttonthree' variant="outline-primary"   onClick={() => handleFilterClick('alphabetical')}>alphabetical</Button>

    </div>
    );
};

export default fbuttons;
