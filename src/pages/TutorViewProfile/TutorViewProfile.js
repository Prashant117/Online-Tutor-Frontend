import React from 'react';
import profileImage from '../../images/ProfileImage.png';
import Exam from './Exam';
import Degree from './Degree';
import './TutorViewProfile.css';
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
              <span class="badge badge-info">Tutor</span>
            </div>
            <Link to="/update-profile/tutor">
              <button className="edit-profile">Edit Profile</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="viewProfile-card ssc-hsc">
            <div className="col-md-6">
              <div className="ssc">
                <h5>SSC</h5>
                <Exam
                  examination="SSC"
                  group="Science"
                  board="Chittagong"
                  passingYear="2017"
                  result="4.73"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hsc">
                <h5>HSC</h5>
                <div style={{ marginTop: '20px' }}>
                  <Exam
                    examination="HSC"
                    group="Science"
                    board="Chittagong"
                    passingYear="2020"
                    result="4.93"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="viewProfile-card ssc-hsc">
            <div className="col-md-6">
              <div className="ssc">
                <h5>Graduation</h5>
                <Degree
                  degree="B.Sc"
                  subject="Computer Science"
                  board="Chittagong"
                  passingYear="2017"
                  result="4.73"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hsc">
                <h5>Master</h5>
                <div style={{ marginTop: '20px' }}>
                  <Degree
                    degree="M.Sc"
                    subject="Computer Science"
                    board="Chittagong"
                    passingYear="2020"
                    result="4.93"
                  />
                </div>
              </div>
            </div>
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
                  Speciality:{' '}
                </span>
                <span>Computer Engineer </span>
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
