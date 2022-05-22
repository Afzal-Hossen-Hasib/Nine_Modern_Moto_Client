import React from "react";
import useReview from "../../../hooks/useReview";

const Review = () => {
  const [review, setReview] = useReview();

  const clientReview = review.slice(0, 3);

  return (
    <div>
      <h1>Client Says: {clientReview.length}</h1>
      <div>
        {clientReview.map((client) => {
          const { name, img, rating, desription } = client;
          return (
            <div className="container">
              <div class="card-group">
  <div class="card">
    <img src="" alt="" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
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

export default Review;
