import React from 'react';
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addToCard, addToWishlist } from '../Redux/ActionCreators';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const location = window.location.pathname
    return (
        <div className='shadow-lg rounded-3xl border p-3 flex flex-col text-indigo-900'>
            <div className='h-52 w-52 mx-auto'>
                <img src={product.image} alt={product.model} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='font-semibold text-center mb-3'>Rating: {product.rating}</p>
            <div className='flex-1'>
                <ul className='space-y-2'>
                    {
                        product.keyFeature.map(feature => {
                            return <li key={feature} className='text-sm'>{feature}</li>
                        })
                    }
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {
                    location === '/card' ? <button className='bg-indigo-500 rounded-full flex-1 py-1 px-2 text-white font-bold'
                        onClick={() => dispatch(addToCard(product))}
                    >Remove from card
                    </button> : <button className='bg-indigo-500 rounded-full flex-1 py-1 px-2 text-white font-bold'
                        onClick={() => dispatch(addToCard(product))}
                    >Add to card
                    </button>
                }
                <button title='Add to wishlist' className='bg-indigo-500 py-1 px-2 rounded-full'
                    onClick={() => dispatch(addToWishlist(product))}
                ><BiListPlus className='text-white'></BiListPlus></button>
            </div>
        </div>
    );
};

export default ProductCard;