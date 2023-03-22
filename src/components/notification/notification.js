import React from 'react';

class Notification extends React.Component {
  render() {
    return <p className="feedback">{this.props.message}</p>;
  }
}

export default Notification;
