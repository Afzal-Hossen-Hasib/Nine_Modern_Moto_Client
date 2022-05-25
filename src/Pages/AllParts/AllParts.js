import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useParts from '../../hooks/useParts';

const AllParts = () => {

    const [parts, setParts] = useParts();
    const navigate = useNavigate();

  const handlePurchase = id => {
        navigate(`/part/${id}`)
  }

    return (
        <div className="container pb-4">
      <h1 className="part-title">Parts</h1>

      <div className="parts-div">
        {parts.map((Part) => {
          const { name, img, price, availablequantity, minimunorder, desription, _id } = Part;
          return (
            <div key={Part._id}>
              <div className="card-group single-part">
                <div className="card item-part">
                  <img src={img} alt="" />
                  <div className="card-body title-part">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Price: <span>${price} (Per Unit)</span></p>
                    <p className="card-text">Available Quantity: <span>{availablequantity} PCS</span></p>
                    <p className="card-text">Minimum Order: <span>{minimunorder} PCS</span></p>
                    <h6 className="card-text">{desription}</h6>
                  </div>
                  <div className="card-footer item-part">
                  <button onClick={() => handlePurchase (_id)} className="w-50 d-block mx-auto purchase-button">Purchase</button>
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