import axios from 'axios';
import {useSearchParams} from 'react-router';
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css'



export function HomePage({cart, loadCart}) {
  const [products, setProducts] = useState([]);
  const [searchParam] = useSearchParams();
  const search = searchParam.get('search');

  useEffect(() => {
    const getHomeData = async()=>{
      let url='/api/products';
      if (search){
        url = `/api/products?search=${search}`
      }
        const response = await axios.get(url);
        setProducts(response.data);
    };

    getHomeData();
}, [search]);
     

  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />


      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}