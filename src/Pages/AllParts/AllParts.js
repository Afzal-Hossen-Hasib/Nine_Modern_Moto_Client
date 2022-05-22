import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../../hooks/useParts';

const AllParts = () => {

    const [parts, setParts] = useParts();

    return (
        <div className="container pb-4">
      <h1 className="part-title">Parts</h1>

      <div className="parts-div">
        {parts.map((Part) => {
          const { name, img, price, availablequantity, minimunorder, desription } = Part;
          return (
            <div>
              <div class="card-group single-part">
                <div class="card item-part">
                  <img src={img} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: ${price}</p>
                    <p class="card-text">Available Quantity: {availablequantity}</p>
                    <p class="card-text">Minimum Order: {minimunorder}</p>
                    <p class="card-text">{desription}</p>
                  </div>
                  <div class="card-footer item-part">
                  <Link to=''>Purchase</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    );
};

export default AllParts;