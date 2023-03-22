import React, { useState } from 'react';
import Statistic from './statistic/Statistic.js';
import FeedbackOptions from './feedbackOptions/FeedbackOptions.js';
import Notification from './notification/notification.js';


export default function App() {
  
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = e => {
    const name = e.target.name;
    setState(prevState => ({
      [name]: prevState[name] + 1,
    }));


   const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return (
  <div className="blocking">
    <h1 className="feedback">Give Feedback</h1>
    <FeedbackOptions
      options={this.state}
      onLeaveFeedback={this.onLeaveFeedback}
    />
    <h2 className="feedback">Statistics</h2>
    {this.countTotalFeedback() === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <Statistic
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    )}
  </div>;
  );
}}