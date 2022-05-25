import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './ManageAllOrders.css'

const ManageAllOrders = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/myorder'
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

    return (
        <div className='dashboard-content'>
            <h1 className='part-title'>All Order</h1> 
            {
                order.map (e => {
                    const {name, quantity, userName, email} = e;
                    return (
                        <div>
                            <p>{email}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ManageAllOrders;