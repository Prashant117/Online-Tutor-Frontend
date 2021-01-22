import React from 'react';
import profileImage from '../../images/ProfileImage.png';
import './PostCard.css';
import Moment from 'react-moment';
const PostCard = ({
  tutorName,
  image,
  qualification,
  subjectName,
  time,
  days,
  payment,
  note,
  date,
}) => {
  return (
    <div className="postCard">
      <div className="postCard__image-wrapper">
        <img
          src={image ? `http://localhost:5000/public/${image}` : profileImage}
          alt=""
        />
      </div>
      <div className="postCard__info">
        <p className="profile-name bold">{tutorName}</p>
        <button className="view-profile">view profile</button>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Subject:</span>
          <span>{subjectName}</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Days:</span>
          <span>{days} days in a week</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Payment:</span>
          <span>{payment} TK.</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Time:</span>
          <span>{time}</span>
        </p>
        <p className="margin-bottom-0 d-flex justify-content-between">
          <span className="bold">Qualification:</span>
          <span>{qualification}</span>
        </p>
        <p className="my-3">{note}</p>
        <p className="font-italic">
          <Moment fromNow>{date}</Moment>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
