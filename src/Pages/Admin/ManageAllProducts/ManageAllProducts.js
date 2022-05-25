import React from 'react';
import useParts from '../../../hooks/useParts';

const ManageAllProducts = () => {

    const [parts, setParts] = useParts();

    const handleDelete = id => {
      const procced = window.confirm('Are You Sure?')

      if (procced) {
          const url = `http://localhost:5000/part/${id}`;
          fetch (url, {
              method: 'DELETE'
          })
          .then (res => res.json())
          .then (data => {
              console.log(data);
              const remaining = parts.filter(part => part._id !== id);
              setParts (remaining);
          })
      }
  };

    return (
        <div className="container pb-4">
      <h1 className="part-title">All Products</h1>

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
                    <button
                            onClick={() => handleDelete(Part._id)} 
                            className='login-button w-50 d-block mx-auto'>
                                Delete
                            </button>
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

export default ManageAllProducts;