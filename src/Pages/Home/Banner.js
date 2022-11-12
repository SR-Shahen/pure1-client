import React from 'react';
import c from '../../assets/images/c.jpg'
import ca from '../../assets/images/ca.jpg'
import c3 from '../../assets/images/c3.jpg'
import ca1 from '../../assets/images/ca1.jpg'
import ca2 from '../../assets/images/ca2.jpg'
const Banner = () => {
    return (
        <div class="carousel">
            <div id="slide1" class="carousel-item relative w-full">
                <img className='w-full h-96' src={ca} alt="carousel 1" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img className='w-full h-96' src={c} alt='carousel 2' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img className='w-full h-96' src={c3} alt='carousel 3' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img className='w-full h-96' src={ca1} alt='carousel 3' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;