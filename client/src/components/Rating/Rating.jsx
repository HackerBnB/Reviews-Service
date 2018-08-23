import React from 'react';

const Rating = props => (
  <div className="border rating-container">
    {props.showBackToReviews
      ? (
        <div className="back-to-reviews-container">
          <div className="num-of-searches-container">
            {props.reviews.length} guests have mentioned <strong>"{props.searchValue}"</strong>
          </div>
          <div className="">
            <button type="button" className="back-to-reviews" onClick={props.handleBackToReviewsButton}>
              Back to all reviews
            </button>
          </div>
        </div>
      )
      : (
        <React.Fragment>

          <div className="rating-container-half">
            <div>
              <div>
                Accuracy
              </div>
              <div>
                Communication
              </div>
              <div>
                Cleanliness
              </div>
            </div>
            <div>
              <div className="rating-star-container">
                {props.handleStarRating(props.avg_accuracy_rating)}
              </div>
              <div>
                {props.handleStarRating(props.avg_communication_rating)}
              </div>
              <div>
                {props.handleStarRating(props.avg_cleanliness_rating)}
              </div>
            </div>
          </div>

          <div className="rating-container-half">
            <div>
              <div>
                  Location
              </div>
              <div>
                  Check-in
              </div>
              <div>
                  Value
              </div>
            </div>
            <div>
              <div className="rating-star-container">
                {props.handleStarRating(props.avg_location_rating)}
              </div>
              <div>
                {props.handleStarRating(props.avg_check_in_rating)}
              </div>
              <div>
                {props.handleStarRating(props.avg_value_rating)}
              </div>
            </div>
          </div>

        </React.Fragment>)}
  </div>
);

export default Rating;
