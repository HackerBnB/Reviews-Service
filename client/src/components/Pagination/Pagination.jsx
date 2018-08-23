import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Page from '../Page';


const Pagination = ({
  reviewsByPage, handleReviewsSelected, selectedPage, handleRightArrow, handleLeftArrow, numOfPages,
}) => (
  <div>
    <nav role="navigation">
      <div>
        <ul className="ul-padding">
          {selectedPage > 1
            ? (
              <li className="angle-right-list">
                <button type="button" className="angle-right-icon" onClick={handleLeftArrow}>
                  <FontAwesome name="angle-left" />
                </button>
              </li>) : null }
          {Object.keys(reviewsByPage).map((pageNum, index) => (
            <Page
              key={pageNum}
              pageNum={pageNum}
              handleReviewsSelected={handleReviewsSelected}
              active={index === selectedPage - 1}
            />
          ))}
          {selectedPage < numOfPages ? (
            <li className="angle-right-list">
              <button type="button" className="angle-right-icon" onClick={handleRightArrow}>
                <FontAwesome name="angle-right" />
              </button>
            </li>) : null}
        </ul>
      </div>
    </nav>
  </div>
);

Pagination.propTypes = {
  reviewsByPage: PropTypes.object.isRequired,
  handleReviewsSelected: PropTypes.func.isRequired,
  selectedPage: PropTypes.number.isRequired,
  handleRightArrow: PropTypes.func.isRequired,
  handleLeftArrow: PropTypes.func.isRequired,
  numOfPages: PropTypes.number,
};

export default Pagination;
