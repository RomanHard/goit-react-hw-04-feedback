import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <p className="feedback">{this.props.message}</p>;
  }
}

export default Notification;
