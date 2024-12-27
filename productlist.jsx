import ProductCard from './productcards.jsx';
import './productlist.css'
import asus from './assets/asus.jpg';
import asustuf from './assets/asustuf.jpg';
import msi from './assets/msi.jpeg'; 
import loq from './assets/loq.jpg'; 
import { useState, useEffect } from 'react';
import Fbuttons from './fbuttons.jsx';
import giga from './assets/gigabyte.jpg'


function ProductList() {
    const [products, setProducts] = useState([
        { 
            id: 1, 
            title: "ASUS ROG Strix G16", 
            description: "ASUS ROG Strix G16 G614JZ-NN007W Intel core i7-13650HX-16GB-SSD 1TB-RTX4080-12GB-16.0 QHD-165Hz-Win11", 
            price: 30000, 
            image: asus
        },
        { 
            id: 2, 
            title: "ASUS TUF Gaming F15", 
            description: "ASUS TUF Gaming F15 FX507ZI4-LP34W Intel Core i7-12700H NVIDIA RTX 4070 8GB 16GB DDR4 RAM 512GB SSD 15.6 FHD 144Hz Display Win 11 Home Gray.", 
            price: 45000, 
            image: asustuf
        },
        { 
            id: 3, 
            title: "MSI Thin 15", 
            description: "MSI Thin 15 B12UCX i5 12450H RTX2050 RAM 8G DDR4 3200Hz SSD 512G 15.6-FHD-IPS-144Hz Blue Backlit-Arabic 1.86 kg-2 Year warranty", 
            price: 70000, 
            image: msi
        },
        { 
            id: 4, 
            title: "Lenovo LOQ 15", 
            description: "Lenovo LOQ 15IAX9-83GS001CUS Core i5-12450HX RTX 3050 6GB 15.6 FHD 144HZ 12GB Ram DDR5-4800 512GB SSD W11", 
            price: 50000, 
            image: loq
        },
        { 
            id: 5, 
            title: "GIGABYTE G6X 9KG", 
            description: "GIGABYTE G6X 9KG Intel i7 13650HX NVIDIA GeForce RTX 4060 8GB GDDR6 - 2x DDR5 Slots - 4800MHz - 16GB - M.2 SSD 512GB - 16 WUXGA 1920x1200 165Hz", 
            price: 53499, 
            image: giga
        },
      
      
        
    ]);

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(products); 
    }, [products]); 

    const handleFilterChange = (filterType) => {

        let sortedProducts = [...products]; 

        switch (filterType) {
            case 'lowToHigh':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'highToLow':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'alphabetical':
                sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                sortedProducts = [...products]; 
        }
        setFilteredProducts(sortedProducts); 
    };



    return (
        <div>
            <div>
            <Fbuttons onFilterChange={handleFilterChange} /> 
            </div>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;