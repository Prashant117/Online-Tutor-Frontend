import React from 'react';
import onlineStreaming from '../../images/icons/online-streaming.png';
const OnlineStreaming = () => {
  return (
    <div className="online-streaming dashboard-card">
      <div className="icon-wrapper">
        <img src={onlineStreaming} alt="Online Streaming" />
      </div>
      <h3>Live Class</h3>
    </div>
  );
};

export default OnlineStreaming;
