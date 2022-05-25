import React, { useEffect, useState } from "react";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect (() => {
    fetch('http://localhost:5000/review')
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
              <div className="single-reviews">
                  <div class="row">
                <div class="col">
                  <div class="card h-100 single-review">
                    <img src={img} alt="" />
                    <div class="card-body">
                      <h4 class="card-title">{name}</h4>
                      <p class="card-text">{review}</p>
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
