import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className="feedback">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
