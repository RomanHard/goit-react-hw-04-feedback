import React, { useState } from 'react';
import Statistic from '../components/statistic/Statistic.js';
import FeedbackOptions from '../components/feedbackOptions/FeedbackOptions.js';
import Notification from './notification/notification.js';

import React from 'react';

export default function App({ good, neutral, bad, total, positivePercentage, onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage, options }) {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />
    )}
  </div>;
  );
}

// export default class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     const name = e.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good / total) * 100);
//   };

//   render() {
//     return (
// <div className="blocking">
//   <h1 className="feedback">Give Feedback</h1>
//   <FeedbackOptions
//     options={this.state}
//     onLeaveFeedback={this.onLeaveFeedback}
//   />
//   <h2 className="feedback">Statistics</h2>
//   {this.countTotalFeedback() === 0 ? (
//     <Notification message="No feedback given" />
//   ) : (
//     <Statistic
//       good={this.state.good}
//       neutral={this.state.neutral}
//       bad={this.state.bad}
//       total={this.countTotalFeedback()}
//       positivePercentage={this.countPositiveFeedbackPercentage()}
//     />
//   )}
// </div>
//     );
//   }
// }
