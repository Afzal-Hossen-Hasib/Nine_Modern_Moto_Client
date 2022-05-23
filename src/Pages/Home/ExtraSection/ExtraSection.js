import React from 'react';
import banner2 from '../../../Images/Banner/banner-2.png'
import './ExtraSection.css'

const ExtraSection = () => {
    return (
        <div className='extra-section'>
            <div className="banner-container container">
                <div className="banner-div">
                    <img className='extra-img' src={banner2} alt="" />
                </div>
                <div className="extra-div">
                    <p>REAL MEN ARE NOT AFRAID OF DIRT</p>
                    <h1> DIRT BIKE <br /> SAFETY <br /> GEAR</h1>
                    <button className='extra-button'>I NEED IT</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;