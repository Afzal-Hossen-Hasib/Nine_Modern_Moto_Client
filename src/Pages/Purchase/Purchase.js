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
    console.log(part);
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
        <div className='container'>
            <div>
              <span>{user.displayName}</span>
              <span>{user.email}</span>
            </div>
            <div className='w-50 d-block mx-auto'>
              <div class="card-group single-part">
                <div class="card item-part">
                  <img src={part.img} alt="" />
                  <div class="card-body title-part">
                    <h4 class="card-title">{part.name}</h4>
                    <p class="card-text">Price: <span>${part.price}</span></p>
                    <p class="card-text">Available Quantity: <span>{part.availablequantity}</span></p>
                    <p class="card-text">Minimum Order: <span>{part.minimunorder}</span></p>
                    <h5 className='order-title'>
                      Order: 
                      <input onChange={handleInputQuantity} type="number" placeholder='Add Quantity' className='ms-2'/>
                    </h5>
                    <h6 class="card-text">{part.desription}</h6>
                    <button className='order-button w-50 d-block mx-auto' onClick={() => Order(Order) }>Place Order</button>
                  </div>
                </div>
              </div>            
            </div>
            
        </div>
    );
};

export default Purchase;