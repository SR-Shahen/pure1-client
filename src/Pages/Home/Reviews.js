import React from 'react';
import man from '../../assets/icon/reviews/man.jpg'
import man1 from '../../assets/icon/reviews/man1.png'
import man2 from '../../assets/icon/reviews/man2.jpg'
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            "name": "Amelia Parker",
            "img": man,
            "feedback": "Pure one is one of the best customer-friendly companies in Bangladesh. There are a lot of Natural products here. Customer support is awesome I hope they will be increasing day by day.",
            "location": "Gulisthan, Bangladesh"
        },
        {
            "name": "William Carry",
            "img": man2,
            "feedback": "Pure one is one of the best customer-friendly companies in Bangladesh. There are a lot of Natural products here. Customer support is awesome I hope they will be increasing day by day.",
            "location": "Toronto, Canada"
        },
        {
            "name": "Isabella",
            "img": man1,
            "feedback": "Pure one is one of the best customer-friendly companies in Bangladesh. There are a lot of Natural products here. Customer support is awesome I hope they will be increasing day by day.",
            "location": "Florida, USA"
        },
    ]
    return (
        <div className='my-10'>
            <h1 className='py-5 text-4xl font-semibold text-cyan-400'>Our Customers Says! </h1>
            <div className='grid grid-cols-3'>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;