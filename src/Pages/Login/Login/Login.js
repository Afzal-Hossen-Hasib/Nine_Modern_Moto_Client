import React from 'react';
import login from '../../../Images/login/login.png'
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="left-cont">
                        <img src={login} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
        </div>
    );
};

export default Login;