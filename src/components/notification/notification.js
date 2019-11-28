import React, { useState, useEffect } from 'react';
import success from './success.png';
import infor from './infor.png';
import warning from './warning.png';
import error from './error.png';
import './notification.css';

const CONSTANTS = {
  TIME_OUT: 1000,
  TICK: 1,
  NULL: null,
  TIME_DISPLAY: 5,
  NOTIFICATION_TYPE: {
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'infor'
  },
  NOTIFICATION_ICON: {
    success: success,
    infor: infor,
    warning: warning,
    error: error
  }
};

const Notification = ({ type, title, description, timeout, callBack }) => {
  const [timeOut, setTimeOut] = useState(timeout);
  useEffect(() => {
    const timerId = setInterval(() => tick(), CONSTANTS.TIME_OUT);

    if (timeOut < CONSTANTS.TICK) {
      clearInterval(timerId);
      callBack();
    }

    return () => {
      clearInterval(timerId);
    };
  });

  const tick = () => {
    setTimeOut(timeOut - CONSTANTS.TICK);
  };

  if (timeOut) {
    return (
      <div className="notification">
        <div className="notification-header">
          <img src={CONSTANTS.NOTIFICATION_ICON[type]} alt="Notification" />
          <p>{title}</p>
          <p onClick={() => callBack()} className="notification-close">
            <i className="fa fa-close" />
          </p>
        </div>
        <div className="notification-desc">{description}</div>
      </div>
    );
  } else {
    return CONSTANTS.NULL;
  }
};

export { CONSTANTS };
export default Notification;
