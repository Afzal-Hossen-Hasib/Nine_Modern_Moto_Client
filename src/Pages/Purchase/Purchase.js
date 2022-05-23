import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Purchase.css'

const Purchase = () => {

    const {partId} = useParams();
    const [part, setPart] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;

        fetch(url)
        .then (res => res.json())
        .then (data => setPart(data));
    } ,[])
    
    return (
        <div className='container'>
            <h2>Purchase</h2>
            <div className='w-50 d-block mx-auto'>
              <div class="card-group single-part">
                <div class="card item-part">
                  <img src={part.img} alt="" />
                  <div class="card-body title-part">
                    <h4 class="card-title">{part.name}</h4>
                    <p class="card-text">Price: <span>${part.price}</span></p>
                    <p class="card-text">Available Quantity: <span>{part.availablequantity}</span></p>
                    <p class="card-text">Minimum Order: <span>{part.minimunorder}</span></p>
                    <h6 class="card-text">{part.desription}</h6>
                  </div>
                </div>
              </div>            
            </div>
        </div>
    );
};

export default Purchase;