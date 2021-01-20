import React from 'react';
import message from '../../images/icons/message.png';
const Message = () => {
  return (
    <div className="message dashboard-card">
      <div className="icon-wrapper">
        <img src={message} alt="Tutor Post" />
      </div>
      <h3>Message</h3>
    </div>
  );
};

export default Message;
