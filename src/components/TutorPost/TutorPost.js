import React from 'react';
import tutorPost from '../../images/icons/tutor-post.png';
const TutorPost = () => {
  return (
    <div className="tutor-post dashboard-card">
      <div className="icon-wrapper">
        <img src={tutorPost} alt="Tutor Post" />
      </div>
      <h3>Tutor Post</h3>
    </div>
  );
};

export default TutorPost;
