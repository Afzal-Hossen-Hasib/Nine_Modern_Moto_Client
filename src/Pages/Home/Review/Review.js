import React from "react";
import useReview from "../../../hooks/useReview";
import "./Review.css";

const Review = () => {
  const [review, setReview] = useReview();

  const clientReview = review.slice(0, 3);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Client Says: {clientReview.length}</h1>
      <div className="review-card">
        {clientReview.map((client) => {
          const { name, img, rating, desription } = client;
          return (
            <div>
              <div class="card-group">
                <div class="card">
                  <img src="" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button>See More...</button>
    </div>
  );
};

export default Review;
