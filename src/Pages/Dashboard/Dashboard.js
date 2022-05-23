import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {

    const [Expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className={Expanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
                <Outlet></Outlet>
                <div className="nav-upper">
                    <div className="nav-heading">
                        {Expanded && (<div className="nav-brand">
                            <img src="icons/logo.svg" alt="" />
                            <h2>Dashboard</h2>
                        </div>)}
                        <button className={Expanded? 'hamburger hamburger-in' : 'hamburger hamburger-out'}
                        onClick={() => setExpanded(!Expanded)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <Link to='/login'>Login</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;