import React from 'react';
import profileImage from '../../images/ProfileImage.png';
import './PostCard.css';
const PostCard = () => {
  return (
    <div className="postCard">
      <div className="postCard__image-wrapper">
        <img src={profileImage} alt="" />
      </div>
      <div className="postCard__info">
        <p className="profile-name bold">Syket Bhattachergee</p>
        <button className="view-profile">view profile</button>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Subject:</span>
          <span>Chemistry</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Days:</span>
          <span>5 days in a week</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Payment:</span>
          <span>1500 TK.</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Time:</span>
          <span>10:00 am to 12:00 pm</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Qualification:</span>
          <span>B.Sc</span>
        </p>
        <p className="my-3">
          Hi, I am syket bhattachergee. I wanna you chemistry teacher
        </p>
        <p className="font-italic">Posted on 3 days ago.</p>
      </div>
    </div>
  );
};

export default PostCard;
