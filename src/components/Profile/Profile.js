import React from 'react';
import profile from '../../images/icons/profile.png';
const Profile = () => {
  return (
    <div className="profile dashboard-card">
      <div className="icon-wrapper">
        <img src={profile} alt="Profile" />
      </div>
      <h3>My Profile</h3>
    </div>
  );
};

export default Profile;
