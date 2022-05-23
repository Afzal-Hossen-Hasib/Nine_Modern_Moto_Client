import React from 'react';
import error from '../../Images/not_found/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='error-container'>
                <img src={error} alt="" />
            </div>
            <div className="error-title">
            <h1><span>OPPS!</span> Page Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;