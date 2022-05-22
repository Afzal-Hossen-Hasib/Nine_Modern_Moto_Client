import React from 'react';
import useReview from '../../hooks/useReview';

const AllReview = () => {

    const [reviews, setReviews] = useReview();

    return (
        <div className="container review-div">
      <h1 className="review-title">Our Client Says</h1>
      <div className="review-card">
        {reviews.map((review) => {
          const { name, img, rating, desription } = review;
          return (
            <div className="single-reviews">
              <div class="row">
                <div class="col">
                  <div class="card h-100 single-review">
                    <img src={img} alt="" />
                    <div class="card-body">
                      <h4 class="card-title">{name}</h4>
                      <h6 class="card-title">{rating}</h6>
                      <p class="card-text">{desription}</p>
                    </div>
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

export default AllReview;