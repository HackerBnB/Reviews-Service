import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Search = ({
  tempAllReviews,
  handleStarRating,
  avgTotalRating,
  handleSearchClick,
  handleSearchValue,
  handleSearchEnter,
  searchBarClass,
  handleSearchBarClass,
}) => (
  <div className="search-container border">
    <div className="total-rating-container">
      <span className="review-length-container">
        {tempAllReviews.length}
        {' '}
        Reviews
      </span>
      <span>
        {handleStarRating(avgTotalRating)}
      </span>
    </div>
    <div className="search-bar-container">
      <form className={searchBarClass}>
        <FontAwesome name="search" className="mag-icon" onClick={handleSearchClick} />
        <input className="search-input" type="text" placeholder="Search Reviews" onChange={handleSearchValue} onKeyDown={handleSearchEnter} onClick={handleSearchBarClass} />
      </form>
    </div>

  </div>
);

Search.propTypes = {
  tempAllReviews: PropTypes.array.isRequired,
  handleStarRating: PropTypes.func.isRequired,
  avgTotalRating: PropTypes.number,
  handleSearchClick: PropTypes.func.isRequired,
  handleSearchValue: PropTypes.func.isRequired,
  handleSearchEnter: PropTypes.func.isRequired,
  searchBarClass: PropTypes.string.isRequired,
  handleSearchBarClass: PropTypes.func.isRequired,
};

export default Search;
