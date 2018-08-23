import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ handleReviewsSelected, pageNum, active }) => {
  let classes = 'page';
  if (active) {
    classes += ' active';
  }
  return (
    <React.Fragment>
      <li className={classes}>
        <button type="button" className="" onClick={handleReviewsSelected}>
          {pageNum}
        </button>
      </li>
    </React.Fragment>);
};

Page.propTypes = {
  handleReviewsSelected: PropTypes.func.isRequired,
  pageNum: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Page;
