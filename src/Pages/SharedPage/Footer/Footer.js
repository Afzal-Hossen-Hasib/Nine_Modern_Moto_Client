import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer >
                <div>
                    <h5 className='text-center text-white ps-5'>Follow Us</h5>
                    <ul className='social-icon'>
                        <li> <a href=""><ion-icon name="logo-facebook"></ion-icon></a> </li>
                        <li> <a href=""><ion-icon name="logo-twitter"></ion-icon></a> </li>
                        <li> <a href=""><ion-icon name="logo-linkedin"></ion-icon></a> </li>
                        <li> <a href=""><ion-icon name="logo-instagram"></ion-icon></a> </li>
                    </ul>
                    
                    <ul className='menu'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Parts</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                    <p> &#169; {year} <span>Modern Moto</span> || All Rights Reserved</p>
                </div> 
            </footer>
    );
};

export default Footer;