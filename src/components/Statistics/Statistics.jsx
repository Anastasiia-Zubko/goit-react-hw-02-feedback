import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positiveFeedbacksShare,
}) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Good:{good}</li>
      <li className={styles.item}>Neutral:{neutral}</li>
      <li className={styles.item}>Bad:{bad}</li>
      <li className={styles.item}>Total:{totalFeedbacks}</li>
      <li className={styles.item}>
        Positive feedbacks: {positiveFeedbacksShare}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedbacks: PropTypes.number,
  positiveFeedbacksShare: PropTypes.number,
};

export default Statistics;