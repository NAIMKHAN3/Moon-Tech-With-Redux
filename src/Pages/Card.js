import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Card = () => {
    const state = useSelector((state) => state.product)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto my-10'>
            {
                state.card.sort((a, b) => a.cardPosition - b.cardPosition).map(product =>
                    <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Card;