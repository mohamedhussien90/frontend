import React from 'react';
import './productdetails.css';
import asus from './assets/asus.jpg';



function productdetails() {
    const productz = 
        { 
            id: 1, 
            title: "ASUS ROG Strix G16", 
            seller: " ASUS",
            description: "ASUS ROG Strix G16 G614JZ-NN007W Intel core i7-13650HX-16GB-SSD 1TB-RTX4080-12GB-16.0 QHD-165Hz-Win11", 
            moredetail:  "Processor: Intel Core i7-13650HX (14-core, up to 4.9GHz)\nGPU: NVIDIA GeForce RTX 4080, 12GB GDDR6\nRAM: 16GB DDR5-4800MHz (upgradable to 32GB)\nStorage: 1TB PCIe 4.0 NVMe SSD\nDisplay: 16\" FHD+ (1920x1200), 165Hz, 100% sRGB, G-Sync\nBattery: 90Wh, fast charge (50% in 30 mins)\nPorts: Thunderbolt 4, USB-C, USB-A, HDMI 2.1, 2.5G LAN\nOS: Windows 11 Home\nWeight: 2.5 kg",
            price: 30000, 
            image: asus
        }
    
    
  return (
    <div className="productdetails">
      <div className="imagedetails">
        <img src={productz.image} alt={productz.title} className="image.details" /> 
      </div>
      <div className="productinfo">
        <h2>{productz.title}</h2>
        <p className="description">{productz.description}</p>
        <p className="price">Price: {productz.price}</p>
        <p className="seller">Seller :{productz.seller}</p>
        <p className="moredetail"> {productz.moredetail}</p>
        
      </div>
      
    </div>
    
  );
}

export default productdetails;