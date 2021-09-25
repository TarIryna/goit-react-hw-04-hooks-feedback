import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div className="container">
      <h2 className={s.title}>Statisctics</h2>
      <p className={s.statInfo}>Good: {good}</p>
      <p className={s.statInfo}>Neutral: {neutral}</p>
      <p className={s.statInfo}>Bad: {bad}</p>
      <p className={s.statInfo}>Total: {total}</p>
      <p className={s.statInfo}>Positive Feedback: {percentage}%</p>
    </div>
  );
}

Statistics.defaultProps = {
  percentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
