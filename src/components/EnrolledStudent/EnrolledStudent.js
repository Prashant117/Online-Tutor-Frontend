import React from 'react';
import enrolledStudent from '../../images/icons/student-enroll.png';
const EnrolledStudent = () => {
  return (
    <div className="enrolled-student dashboard-card">
      <div className="icon-wrapper">
        <img src={enrolledStudent} alt="Tutor Post" />
      </div>
      <h3>Enrolled Student</h3>
    </div>
  );
};

export default EnrolledStudent;
