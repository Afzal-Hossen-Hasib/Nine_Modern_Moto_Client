import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Purchase.css'

const Purchase = () => {
    
    const [user] = useAuthState(auth);
    const {partId} = useParams();
    const [part, setPart] = useState({});
    const [inputQuantity, setInputQuantity] = useState ('');

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;

        fetch(url)
        .then (res => res.json())
        .then (data => setPart(data))
    } ,[partId]);

    const handleInputQuantity = event => {
      setInputQuantity(event.target.value)
    }

    const Order = data => {
      if(inputQuantity < part.minimunorder) {
        return toast ('Order More Than 100');
      }
      else if (inputQuantity >= part.availablequantity) {
        return toast ('Stock Out');
      }

      const order = {
        price: part.price,
        name: part.name,
        quantity: inputQuantity,
        userName: user.displayName, 
        email: user.email,
    }

    const url = `http://localhost:5000/myorder`
    fetch (url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })

    .then (res => res.json())
    .then (result => {
      console.log(result);
   })

   toast ('Your Order Hase Been Placed')
    };
  
    return (
        <div className='container mt-5'>
            
            <div className="row">
              <div className="col-md-6">
              <div>
              <div className="card-group single-part">
                <div className="card item-part">
                  <img src={part.img} alt="" />
                  <div className="card-body title-part">
                    <h4 className="card-title">{part.name}</h4>
                    <p className="card-text">Price: <span>${part.price}</span></p>
                    <p className="card-text">Available Quantity: <span>{part.availablequantity}</span></p>
                    <p className="card-text">Minimum Order: <span>{part.minimunorder}</span></p>
                    <h6 className="card-text">{part.desription}</h6>                  
                  </div>
                </div>
              </div>            
            </div>
              </div>
              <div className="col-md-6">
                <div className='right-div'>
                <div className='w-75 d-block mx-auto'>
                <input className='w-75 input-group-text' type="text" name="name" disabled value={user?.displayName || ''}/> <br />
                <input className='w-75 input-group-text' type="email" name="email" disabled value={user?.email || ''}/> <br />
                <input className='w-75 input-group-text' type="text" placeholder='Address' /> <br />
                <input className='w-75 input-group-text' type="email" placeholder='Phone Number'/> <br />
                <h5 className='order-title'>
                      Order: 
                      <input onChange={handleInputQuantity} type="number" placeholder='Add Quantity' className='ms-2'/>
                    </h5>
                    <button className='order-button w-50 d-block mx-auto mb-5' onClick={() => Order(Order) }>Place Order</button>
                </div>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Purchase;