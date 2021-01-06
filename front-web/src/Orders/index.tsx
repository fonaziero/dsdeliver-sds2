import { useEffect, useState } from 'react';
import { Product } from './types';
import './styles.css';
import ProductList from './ProductsList';
import StepsHeader from './StepsHeader';
import { fetchProducts } from '../api';




function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        fetchProducts()
        .then(res => setProducts(res.data))
        .catch(error => console.log(error))
    },[])

    return(
        <div className="orders-container">
           <StepsHeader/>
           <ProductList products={products}/>
        </div>
    )
}

export default Orders;