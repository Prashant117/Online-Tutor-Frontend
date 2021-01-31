import React, { useState } from 'react';
import profileImage from '../../images/ProfileImage.png';
import './PostCard.css';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { studentEnroll } from '../../actions/enroll';
import { Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Modal } from 'react-bootstrap';
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
  enrolled_student,
  enrolledStudent,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const handleEnroll = () => {
    dispatch(studentEnroll(tutorId, user?._id, postId));
    window.location.reload();
  };

  console.log(qualification);

  let qualificationStatus;

  if (qualification?.master) {
    qualificationStatus = qualification?.master?.degree;
  } else if (qualification?.graduation) {
    qualificationStatus = qualification?.graduation?.degree;
  } else if (qualification?.hsc) {
    qualificationStatus = qualification?.hsc?.examination;
  } else if (qualification?.ssc) {
    qualificationStatus = qualification?.ssc?.examination;
  } else {
    qualification = 'N/A';
  }

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
          <span>{qualificationStatus}</span>
        </p>
        <p className="my-3">{note}</p>
        <p className="font-italic">
          <Moment fromNow>{date}</Moment>
        </p>
        {enrolledStudent && <p>{enrolledStudent?.length} students enrolled</p>}

        {enrolled_student && (
          <div
            style={{ cursor: 'pointer' }}
            onClick={handleShow}
            className="d-flex align-items-center justify-content-around"
          >
            <AvatarGroup max={3}>
              {enrolled_student?.length > 0 &&
                enrolled_student?.map((student) => (
                  <Avatar
                    alt={`${student.firstName}`}
                    src={`http://localhost:5000/public/${student?.profile?.image}`}
                  />
                ))}
            </AvatarGroup>
            {enrolled_student?.length === 0 && 0}
            {`${enrolled_student?.length > 1 ? ' students' : ' student'}`}{' '}
            enrolled
          </div>
        )}

        {user?.status === 'student' && enroll ? (
          <div className="enroll">
            <button style={{ background: 'gray', cursor: 'not-allowed' }}>
              Enrolled by you
            </button>
          </div>
        ) : (
          user?.status === 'student' && (
            <div className="enroll">
              <button onClick={handleEnroll}>Enroll now</button>
            </div>
          )
        )}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enrolled Students</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {enrolled_student?.length > 0
              ? enrolled_student?.map((student) => (
                  <Link to={`/student-profile/${student?.profile?.userId}`}>
                    <div className="enrolled_student_popup">
                      {' '}
                      <Avatar
                        src={`http://localhost:5000/public/${student.profile.image}`}
                      />
                      <p style={{ marginBottom: '0px', marginLeft: '10px' }}>
                        {student?.firstName} {student?.lastName}
                      </p>
                    </div>
                  </Link>
                ))
              : '0 students enrolled'}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostCard;
