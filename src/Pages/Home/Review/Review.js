import React, { useEffect, useState } from "react";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect (() => {
    fetch('https://aqueous-inlet-29591.herokuapp.com/review')
    .then (res => res.json())
    .then (data => setReviews(data))
  } ,[]);

  return (
    <div className="container review-div">
      <h1 className="review-title">Our Client Says</h1>
      <div className="review-card">
        {
          reviews.map ((client) => {
            const {name, img, review} = client;
            return (
              <div className="single-reviews" key={client._id}>
                  <div className="row">
                <div className="col">
                  <div className="card h-100 single-review">
                    <img src={img} alt="" />
                    <div className="card-body">
                      <h4 className="card-title">{name}</h4>
                      <p className="card-text">{review}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Review;
