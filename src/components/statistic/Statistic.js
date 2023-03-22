import React from 'react';
import PropTypes from 'prop-types';
import './statistic-module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistic">
      <p className="statistic__item">Good: {good}</p>
      <p className="statistic__item">Neutral: {neutral}</p>
      <p className="statistic__item">Bad: {bad}</p>
      <p className="statistic__item">Total: {total}</p>
      <p className="statistic__item">
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
