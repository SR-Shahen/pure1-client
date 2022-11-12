import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-purple-600'>Welcome to PURE 1</h1>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;