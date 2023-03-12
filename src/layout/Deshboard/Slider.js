import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
            <ul className='flex gap-3  flex-col h-full'>
                <li className='font-semibold text-indigo-900'>Admin Dashboard</li>
                <li>
                    <Link to='/deshboard'>Product List</Link>
                </li>
                <li>
                    <Link to='/deshboard/add-product'> Add Product </Link>
                </li>
                <li className='mt-auto'>
                    <Link to='/'> Back to Home </Link>
                </li>
            </ul>
        </div>
    );
};

export default Slider;