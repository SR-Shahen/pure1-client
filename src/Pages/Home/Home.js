import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <h1 className='py-3 text-4xl font-bold text-purple-600'>Welcome to Pure One</h1>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;