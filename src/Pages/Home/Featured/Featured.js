import React from 'react';
import featured1 from '../../../Images/featured/featured1.jpg'
import featured2 from '../../../Images/featured/featured2.jpg'
import featured3 from '../../../Images/featured/featured3.jpg'
import item1 from '../../../Images/items/item-5.jpg'
import item2 from '../../../Images/items/item-9.jpg'
import item3 from '../../../Images/items/item-10.jpg'
import item4 from '../../../Images/items/item-4.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='container categories-container'> 
        
            <div className='categories'>
            <div className="banner-container">
                <div className="featured">
                    <img src={featured1} alt="" />
                </div>
                <div className="featured">
                    <img src={featured2} alt="" />
                </div>
                <div className="featured">
                    <img src={featured3} alt="" />
                </div>
            </div>
        </div>


        <div>
        <h2 className='featured-title'>Featured Products</h2>
        <div className="banner-container">
            <div className="featured-products">
                <img src={item1} alt="" />
                <h4>Sport Breake</h4>
                <p className='text-center'>Price: $200.00</p>
            </div>
            <div className="featured-products">
                <img src={item2} alt="" />
                <h4>Sport Seat</h4>
                <p className='text-center'>Price: $200.00</p>
            </div>
            <div className="featured-products">
                <img src={item3} alt="" />
                <h4>Sport Shoes</h4>
                <p className='text-center'>Price: $200.00</p>
            </div>
            <div className="featured-products">
                <img src={item4} alt="" />
                <h4>Pressure Meter</h4>
                <p className='text-center'>Price: $200.00</p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Featured;