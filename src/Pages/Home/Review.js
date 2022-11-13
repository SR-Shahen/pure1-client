import React from 'react';

const Review = ({ review }) => {
    const { name, img, feedback, location } = review;
    return (
        <div class="card w-80 lg:w-96 bg-base-100 shadow-xl p-5">
            <p className='text-left pl-2 '>{feedback}</p>
            <div class=" pt-3 flex lg:pl-10">
                <div className='  items-center'>
                    <img className='w-24' src={img} alt="reviews img" />
                </div>
                <div className=' pl-3 mt-3 items-center'>
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p>{location}</p>
                </div>

            </div>
        </div>
    );
};

export default Review;