import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../SharedPage/Loading/Loading";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrder, setMyOrder] = useState([]);
  console.log(myOrder);

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
              console.log(data);
              const remainItem = myOrder.filter(book => book._id !== id);
              setMyOrder(remainItem);
            })
        return <Loading></Loading>;
    }
  };

  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/myorder?email=${email}`
    fetch(url)
        .then(res => res.json())
        .then(data => setMyOrder(data))
}, [user]);

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Order Quantity</th>
            <th scope="col">Action</th>
            <th scope="col">Payment Status</th>
          </tr>
        </thead>

        <tbody>
          {myOrder.map((order, i) => 
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>
                <button onClick={() => handleItemDelete(order._id)}>
                  Delete
                </button>
              </td>

              <td>
                {(order.price && !order.paid) && 
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button>Pay</button>
                  </Link>
                }

                {(order.price && order.paid) && 
                  <div>
                    <p>Paid</p>
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

export default MyOrder;
