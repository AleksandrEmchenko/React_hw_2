import React from "react";
import PropTypes from "prop-types";


function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      
      {options.map((option) => {
        return (
          <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
