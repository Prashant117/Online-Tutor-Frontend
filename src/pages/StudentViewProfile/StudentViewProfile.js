import React from 'react';
import profileImage from '../../images/ProfileImage.png';
import '../TutorViewProfile/TutorViewProfile.css';
import { Link } from 'react-router-dom';

const ViewProfile = () => {
  return (
    <div className="viewProfile">
      <div className="container">
        <div className="row">
          <div className="viewProfile__basic-info viewProfile-card">
            <div className="viewProfile__basic-info-image-wrapper">
              <img src={profileImage} alt="" />
            </div>
            <div>
              <h5>Syket Bhattachergee</h5>
              <p>syketb@gamil.com</p>
              <p>01865556490</p>
              <span class="badge badge-info">Student</span>
            </div>
            <Link to="/update-profile/student">
              <button className="edit-profile">Edit Profile</button>
            </Link>
          </div>
        </div>

        <div className="row">
          <div
            style={{ marginBottom: '50px' }}
            className="viewProfile-card ssc-hsc"
          >
            <div style={{ marginLeft: '15px' }}>
              <div className="d-flex align-items-center my-3">
                <span style={{ fontWeight: '600', marginRight: '10px' }}>
                  Class Name:{' '}
                </span>
                <span>Computer Technology </span>
              </div>

              <div className="d-flex align-items-center my-3">
                <span style={{ fontWeight: '600', marginRight: '10px' }}>
                  Present Address:{' '}
                </span>
                <span>Muradpur, Philkhana, Chittagong </span>
              </div>

              <div className="d-flex align-items-center my-3">
                <span style={{ fontWeight: '600', marginRight: '10px' }}>
                  Permanent Address:{' '}
                </span>
                <span>Muradpur, Philkhana, Chittagong </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
