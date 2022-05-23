import React from 'react';
import banner from '../../../Images/Banner/banner-1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='main-div'>
            <div className="container banner-container">
                <div className="banner-div">
                    <h1>Build Store! <span>Sell Goods!</span> Earn Money!</h1>
                    <p>Four wheels move the body, and two wheels move the soul.</p>
                    <button className='banner-button'>Explore More &#8594;</button>
                </div>
                <div className="banner-div">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;