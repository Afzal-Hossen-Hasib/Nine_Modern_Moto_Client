import React from "react";
import useParts from "../../../hooks/useParts";
import "./Parts.css";

const Parts = () => {
  const [parts, setParts] = useParts();
  const newParts = parts.slice(0, 6);

  return (
    <div className="container pb-4">
      <h1 className="part-title">Parts: {newParts.length}</h1>

      <div className="parts-div">
        {newParts.map((showPart) => {
          const { name, img, price, availablequantity, minimunorder, desription } = showPart;
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
                    <small class="text-muted">Last updated 3 mins ago</small>
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

export default Parts;
