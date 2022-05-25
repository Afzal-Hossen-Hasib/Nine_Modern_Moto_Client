import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ManageAllOrders = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        const url = (`http://localhost:5000/myorder`)
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

    return (
        <div>
            <h1 className='part-title'>All Order: {order.length}</h1>
        </div>
    );
};

export default ManageAllOrders;