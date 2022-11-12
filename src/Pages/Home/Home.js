import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-purple-600'>Welcome to PURE 1</h1>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;