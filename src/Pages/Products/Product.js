import React from 'react';

const Product = ({ item }) => {
    const { img, description, price, name } = item;
    return (
        <div class=" card card-side bg-base-100 shadow-xl">
            <figure><img className='h-40 ' src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title font-bold justify-center">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <div class="card-actions justify-center ">
                    <button class="btn btn-primary px-10 hover:btn-secondary">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Product;