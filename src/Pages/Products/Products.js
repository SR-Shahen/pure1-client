import React from 'react';
import Product from './Product';

const Products = () => {
    const items = [
        {
            "img": "https://i.ibb.co/fdVbsB0/phoney.jpg",
            "name": "Pure honey",
            "description": "Pure honey is one of the best honey.its total natural and 100% organic ",
            "price": "400 Tk Kg"
        },
        {
            "img": "https://i.ibb.co/19WVKZH/tisue.jpg",
            "name": "Pure Tissue",
            "description": "Pure honey is one of the best honey.its total natural and 100% organic ",
            "price": "50 Tk"
        },
        {
            "img": "https://i.ibb.co/BK1G9kp/bolt.jpg",
            "name": "Bolt liquid",
            "description": "Bolt liquid dish wash is one of the most common and popular item of CPHD Consumer.",
            "price": "200 Tk"
        },
        {
            "img": "https://i.ibb.co/JQYrdJf/rajtel1.jpg",
            "name": "RAJTEL",
            "description": "100% organic and natural hair oil.no side effect in Ayurvedic Medicine",
            "price": "340 Tk"
        },
        {
            "img": "https://i.ibb.co/fdVbsB0/phoney.jpg",
            "name": "Pure honey",
            "description": "Pure honey is one of the best honey.its total natural and 100% organic ",
            "price": "400 Tk Kg"
        },
        {
            "img": "https://i.ibb.co/JQYrdJf/rajtel1.jpg",
            "name": "RAJTEL",
            "description": "100% organic and natural hair oil.no side effect in Ayurvedic Medicine",
            "price": "340 Tk"
        },


    ]
    return (
        <div className='mt-10'>
            <h1 className='py-3 text-5xl font-semibold text-cyan-500'>Our Products</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    items.map(item => <Product item={item}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;