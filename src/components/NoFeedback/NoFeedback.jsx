import React from "react";
import PropTypes from "prop-types";
import styles from "./NoFeedback.module.css";

const NoFeedback = ({ message }) => {
  return <p className={styles.NoFeedback}>{message}</p>;
};

NoFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoFeedback;