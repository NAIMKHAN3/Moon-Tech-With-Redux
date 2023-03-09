import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { TOOGLE_STOCK } from '../Redux/ActionTypes';
import { toggleBrand } from '../Redux/filterAction';

const Home = () => {
    const [products, setProducts] = useState([])
    const state = useSelector((state) => state.filter.filters);
    const dispatch = useDispatch();
    const { brands, stock } = state;
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const activeClass = 'bg-indigo-500 text-white border-white';

    let content;
    if (products.length) {
        content = products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    if (products.length && (stock || brands.length)) {
        content = products.filter(product => {
            if (stock) {
                return product.status === true
            }
            return product
        })
            .filter(product => {
                if (brands.length) {
                    return brands.includes(product.brand)
                }
                return product
            })
            .map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null}`}
                    onClick={() => dispatch({ type: TOOGLE_STOCK })}
                >In Stock</button>
                <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}
                    onClick={() => dispatch(toggleBrand('amd'))}
                >AMD</button>
                <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}
                    onClick={() => dispatch(toggleBrand('intel'))}
                >Intel</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                {content}
            </div>

        </div>
    );
};

export default Home;