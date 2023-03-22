import React from 'react';
import PropTypes from 'prop-types';
import './feedback-module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedback">
      {Object.keys(options).map(option => (
        <button
          className="feedback__button"
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
