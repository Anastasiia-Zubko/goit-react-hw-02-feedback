import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className={styles.options}>
      {options.map((option) => {
        return (
          <li key={option}>
            <button
              className={styles.optionBtn}
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;