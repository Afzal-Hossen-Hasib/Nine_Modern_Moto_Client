import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../SharedPage/Loading/Loading';
import './ManageAllOrders.css'

const ManageAllOrders = () => {

    const [order, setOrder] = useState([]);

    const handleItemDelete = id => {
        const alert = window.confirm("Confirm Delete");
        if (alert) {
            const url = `http://localhost:5000/myorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            console.log(url)
                .then(res => res.json())
                .then(data => {
                  const remainItem = order.filter(book => book._id !== id);
                  setOrder(remainItem);
                })
            return <Loading></Loading>;
        }
      };

    useEffect(() => {
        const url = 'http://localhost:5000/myorder'
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

    return (
        <div className='container'>
            <h1 className='part-title'>All Order</h1> 
            <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Product Name</th>
            <th scope="col">Order Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
          </tr>
        </thead>

        <tbody>
          {order.map((order, i) => 
            <tr key={order._id}>
              <th scope="row">{i + 1}</th>
              <td>{order.userName}</td>
              <td>{order.email}</td>
              <td>{order.name}</td>
              <td>{order.quantity} PCS</td>
              <td>$ {order.price * order.quantity} <span>(${order.price} Per Unit)</span></td>
              <td>
              {order.paid? <button className="btn btn-danger" onClick={() => handleItemDelete(order._id)} disabled>Delete</button> : <button className="btn btn-danger" onClick={() => handleItemDelete(order._id)}>Delete</button>}
              </td>
              <td>
              {(order.price && !order.paid) && 
                  
                    <button className="btn pay-button">Payment Pending</button>
                  
                }
                {(order.price && order.paid) && 
                  <div>
                    <p className="paid">pending to shipped</p>
                  </div>
                }
              </td>
            </tr>
          )}
        </tbody>
      </table>
        </div>
    );
};

export default ManageAllOrders;