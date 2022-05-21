import React from 'react';
import banner from '../../../Images/Banner/banner-1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='main-div'>
            <div className="container banner-container">
                <div className="banner-div">
                    <h1>Build Store! Sell Goods! <br /> Earn Money!</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsum quam perferendis qui necessitatibus blanditiis, <br />  atque, rerum aut aspernatur, quas dignissimos! Illo quasi excepturi, reprehenderit recusandae natus qui odit? Totam.</p>
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