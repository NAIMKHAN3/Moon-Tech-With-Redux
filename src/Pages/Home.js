import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [products, setProducts] = useState([])
    const state = useSelector((state) => state);
    console.log(state)
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto my-10'>
            {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
        </div>
    );
};

export default Home;