import React, { useState } from 'react';
import profileImage from '../../images/ProfileImage.png';
import './PostCard.css';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { studentEnroll } from '../../actions/enroll';
const PostCard = ({
  postId,
  tutorName,
  tutorId,
  image,
  qualification,
  subjectName,
  time,
  days,
  payment,
  note,
  date,
  enroll,
}) => {
  console.log(enroll);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const handleEnroll = () => {
    dispatch(studentEnroll(tutorId, user?._id, postId));
    window.location.reload();
  };
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
        {user?._id === tutorId ? (
          <button className="view-profile-me">posted by you</button>
        ) : isAuthenticated ? (
          <Link to={`tutor-profile/${tutorId}`}>
            <button className="view-profile">view profile</button>
          </Link>
        ) : (
          <button style={{ cursor: 'not-allowed' }} className="view-profile">
            view profile
          </button>
        )}
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
        {user?.status === 'student' && enroll ? (
          <div className="enroll">
            <button style={{ background: 'gray', cursor: 'not-allowed' }}>
              Enrolled by you
            </button>
          </div>
        ) : (
          <div className="enroll">
            <button onClick={handleEnroll}>Enroll now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
