import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h2>Purchase</h2>
            <div>
              <div class="card-group">
                <div class="card">
                  <img src={part.img} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">{part.name}</h5>
                    <p class="card-text">Price: ${part.price}</p>
                    <p class="card-text">Available Quantity: {part.availablequantity}</p>
                    <p class="card-text">Minimum Order: {part.minimunorder}</p>
                    <p class="card-text">{part.desription}</p>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
    );
};

export default Purchase;