
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search';
import SingleReview from '../SingleReview';
import Rating from '../Rating';
import Pagination from '../Pagination';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avg_accuracy_rating: 0,
      avg_communication_rating: 0,
      avg_cleanliness_rating: 0,
      avg_location_rating: 0,
      avg_check_in_rating: 0,
      avg_value_rating: 0,
      reviewsPerPage: 6,
      searchValue: '',
      showBackToReviews: false,
      tempAllReviews: [],
      selectedPage: 1,
      listOfPages: [],
      reviewsByPage: {},
      searchBarClass: 'search-bar-area',
    };
    this.handleStarRating = this.handleStarRating.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleBackToReviewsButton = this.handleBackToReviewsButton.bind(this);
    this.handleReviewsSelected = this.handleReviewsSelected.bind(this);
    this.handleSearchEnter = this.handleSearchEnter.bind(this);
    this.handleSearchBarClass = this.handleSearchBarClass.bind(this);
    this.handleRightArrow = this.handleRightArrow.bind(this);
    this.handleLeftArrow = this.handleLeftArrow.bind(this);
  }

  componentDidMount() {
    const paths = window.location.pathname.substr(1).split('/');
    const roomNum = paths[1];
    this.getAllReviews(roomNum);
  }

  getAllReviews(roomId) {
    fetch(`/api/rooms/${roomId}/reviews`)
      .then(res => res.json())
      .then((reviews) => {
        const numOfPages = Math.ceil(reviews.length / 6);
        const reviewsByPage = {};
        let j = 0;
        let k = 6;
        for (let i = 1; i <= numOfPages; i += 1) {
          reviewsByPage[i] = reviews.slice(j, k);
          j += 6;
          k += 6;
        }
        this.setState({
          reviewsByPage,
          numOfPages,
          tempAllReviews: reviews,
          reviews: reviewsByPage[1],
          avg_accuracy_rating: reviews.reduce((total, review) => total
            + review.accuracy_rating, 0) / reviews.length,
          avg_communication_rating: reviews.reduce((total, review) => total
            + review.communication_rating, 0) / reviews.length,
          avg_cleanliness_rating: reviews.reduce((total, review) => total
            + review.cleanliness_rating, 0) / reviews.length,
          avg_location_rating: reviews.reduce((total, review) => total
            + review.location_rating, 0) / reviews.length,
          avg_check_in_rating: reviews.reduce((total, review) => total
            + review.check_in_rating, 0) / reviews.length,
          avg_value_rating: reviews.reduce((total, review) => total
            + review.value_rating, 0) / reviews.length,
        });
        const totalAveRating = (this.state.avg_accuracy_rating
          + this.state.avg_communication_rating
          + this.state.avg_cleanliness_rating
          + this.state.avg_location_rating
          + this.state.avg_check_in_rating
          + this.state.avg_value_rating) / 6;
        const roundedTotalRating = Math.round(totalAveRating * 2) / 2;
        this.setState({
          avgTotalRating: roundedTotalRating,
        });
      })
      .catch(error => console.error('Error in fetching:', error));
  }

  handleStarRating(ratingCategory) {
    const roundedRating = Math.round(ratingCategory * 2) / 2;
    if (roundedRating === 5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
        </div>
      );
    } else if (roundedRating === 4.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
        </div>
      );
    } else if (roundedRating === 4) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 3.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 3) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 2.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 2) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 1.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 1) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 0.5) {
      return (
        <div>
          <FontAwesome name="star-half" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    }
    return (
      <div />
    );
  }

  handleSearchValue(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  handleSearchClick() {
    const { tempAllReviews, searchValue } = this.state;
    if (searchValue === '') {
      return;
    }
    this.setState({
      reviews: tempAllReviews
        .filter(review => review.review_text.includes(searchValue)),
      showBackToReviews: true,
    });
  }

  handleSearchEnter(e) {
    if (e.keyCode !== 13) {
      return null;
    }
    e.preventDefault();
    const { tempAllReviews, searchValue } = this.state;
    this.setState({
      reviews: tempAllReviews
        .filter(review => review.review_text.includes(searchValue)),
      showBackToReviews: true,
    });
  }

  handleBackToReviewsButton() {
    const { tempAllReviews } = this.state;
    this.setState({
      reviews: tempAllReviews,
      showBackToReviews: false,
    });
  }

  handleReviewsSelected(e) {
    const { reviewsByPage } = this.state;
    this.setState({
      selectedPage: Number(e.currentTarget.textContent),
      reviews: reviewsByPage[Number(e.currentTarget.textContent)],
      pageClass: 'selected-page',
    });
    window.scrollBy({
      top: -400,
      left: 0,
      behavior: 'smooth',
    });
  }

  handleSearchBarClass() {
    this.setState({
      searchBarClass: 'search-bar-area-selected',
    });
  }

  handleRightArrow() {
    const { selectedPage, tempAllReviews, reviewsByPage } = this.state;
    const totalNumOfPages = Math.ceil(tempAllReviews.length / 6);
    if (selectedPage < totalNumOfPages) {
      this.setState({
        selectedPage: selectedPage + 1,
        reviews: reviewsByPage[selectedPage + 1],
      });
      window.scrollBy({
        top: -400,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  handleLeftArrow() {
    const { selectedPage, reviewsByPage } = this.state;
    if (selectedPage > 0) {
      this.setState({
        selectedPage: selectedPage - 1,
        reviews: reviewsByPage[selectedPage - 1],
      });
      window.scrollBy({
        top: -400,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <div>
        <Search
          reviews={this.state.reviews}
          {...this.state}
          handleStarRating={this.handleStarRating}
          handleSearchClick={this.handleSearchClick}
          handleSearchValue={this.handleSearchValue}
          handleSearchEnter={this.handleSearchEnter}
          handleSearchBarClass={this.handleSearchBarClass}
        />
        <Rating
          reviews={this.state.reviews}
          {...this.state}
          handleStarRating={this.handleStarRating}
          handleBackToReviewsButton={this.handleBackToReviewsButton}
        />
        {this.state.reviews.length
          ? (
            <div>
              {this.state.reviews.map(review => (
                <SingleReview
                  key={review.user}
                  review={review}
                  handleReadMore={this.handleReadMore}
                  {...this.state}
                />))}
            </div>
          ) : (
            <div>
              <h1>
                No reviews to display
              </h1>
            </div>)}
        <Pagination
          {...this.state}
          handleReviewsSelected={this.handleReviewsSelected}
          handleRightArrow={this.handleRightArrow}
          handleLeftArrow={this.handleLeftArrow}
        />
      </div>
    );
  }
}

export default Reviews;
