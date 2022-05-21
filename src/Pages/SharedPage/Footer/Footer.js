import React from 'react';
import google from '../../../Images/app_logo/google.png'
import ios from '../../../Images/app_logo/apple.png'
import logo from '../../../Images/footer/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className='container'>
            <div className="banner-container">
                <div className="footer-first">
                    <h3>Download Our App</h3>
                    <p>Download Our App For ANDROID And IOS Mobile Phone</p>
                    <div className="app-logo">
                        <img className='me-2' src={google} alt="" />
                        <img src={ios} alt="" />
                    </div>
                </div>

                <div className="footer-second">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, perspiciatis!</p>
                </div>

                <div className="footer-third">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Joint Affiliate</li>
                    </ul>
                </div>

                <div className="footer-fourth">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className='text-center'>Copyright 2022 - easy tutorials</p>
            </div>
        </div>
    );
};

export default Footer;