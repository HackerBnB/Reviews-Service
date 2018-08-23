import React from 'react';
import PropTypes from 'prop-types';

class SingleReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      restOfText: '',
      hideReadMoreButton: false,
    });
    this.handleReadMore = this.handleReadMore.bind(this);
  }

  handleReadMore(reviewText) {
    this.setState({
      restOfText: reviewText,
      hideReadMoreButton: true,
    });
  }

  render() {
    return (<div className="border">
      <div className="review-container">
        <div className="image-container">
          <img className="user-image" src={this.props.review.image_url} alt="user" />
        </div>
        <div className="user-date-container">
          <div className="username">
            {this.props.review.user}
          </div>
          <div>
            {this.props.review.created_at}
          </div>
        </div>
      </div>
      <div>
        {this.props.review.review_text.length < 175
          ? (
            <p className="description" key={this.props.review.room_id}>
              {this.props.review.review_text}
            </p>)
          : (
            <div className="description">
              {this.props.review.review_text.substring(0, 175)}
              {this.state.hideReadMoreButton ? null : (
                <button type="button" className="read-more" onClick={() => this.handleReadMore(this.props.review.review_text.substring(175))}>
                  ... Read more
                </button>)}
              <span>
                {this.state.restOfText}
              </span>
            </div>)
        }
      </div>
    </div>
    );
  }
}

SingleReview.propTypes = {
  review: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    room_id: PropTypes.number.isRequired,
    review_text: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleReview;
