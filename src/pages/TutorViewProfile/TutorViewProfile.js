import React, { useEffect } from 'react';
import profileImage from '../../images/ProfileImage.png';
import Exam from './Exam';
import Degree from './Degree';
import './TutorViewProfile.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

const ViewProfile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <div className="viewProfile">
      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row">
              <div className="viewProfile__basic-info viewProfile-card">
                <div className="viewProfile__basic-info-image-wrapper">
                  <img
                    src={
                      user?.profile?.image
                        ? `http://localhost:5000/public/${user?.profile?.image}`
                        : profileImage
                    }
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    {user?.firstName} {user?.lastName}
                  </h5>
                  <p>{user?.email}</p>
                  <p>{user?.phone}</p>
                  <span className="badge badge-info">Tutor</span>
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
                      examination={
                        user?.profile?.ssc?.examination
                          ? user?.profile?.ssc?.examination
                          : 'N/A'
                      }
                      group={
                        user?.profile?.ssc?.group
                          ? user?.profile?.ssc?.group
                          : 'N/A'
                      }
                      board={
                        user?.profile?.ssc?.board
                          ? user?.profile?.ssc?.board
                          : 'N/A'
                      }
                      passingYear={
                        user?.profile?.ssc?.passingYear
                          ? user?.profile?.ssc?.passingYear
                          : 'N/A'
                      }
                      result={
                        user?.profile?.ssc?.result
                          ? user?.profile?.ssc?.result
                          : 'N/A'
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hsc">
                    <h5>HSC</h5>
                    <div style={{ marginTop: '20px' }}>
                      <Exam
                        examination={
                          user?.profile?.hsc?.examination
                            ? user?.profile?.hsc?.examination
                            : 'N/A'
                        }
                        group={
                          user?.profile?.hsc?.group
                            ? user?.profile?.hsc?.group
                            : 'N/A'
                        }
                        board={
                          user?.profile?.hsc?.board
                            ? user?.profile?.hsc?.board
                            : 'N/A'
                        }
                        passingYear={
                          user?.profile?.hsc?.passingYear
                            ? user?.profile?.hsc?.passingYear
                            : 'N/A'
                        }
                        result={
                          user?.profile?.hsc?.result
                            ? user?.profile?.hsc?.result
                            : 'N/A'
                        }
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
                      degree={
                        user?.profile?.graduation?.degree
                          ? user?.profile?.graduation?.degree
                          : 'N/A'
                      }
                      subject={
                        user?.profile?.graduation?.subject
                          ? user?.profile?.graduation?.subject
                          : 'N/A'
                      }
                      board={
                        user?.profile?.graduation?.board
                          ? user?.profile?.graduation?.board
                          : 'N/A'
                      }
                      passingYear={
                        user?.profile?.graduation?.passingYear
                          ? user?.profile?.graduation?.passingYear
                          : 'N/A'
                      }
                      result={
                        user?.profile?.graduation?.result
                          ? user?.profile?.graduation?.result
                          : 'N/A'
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hsc">
                    <h5>Master</h5>
                    <div style={{ marginTop: '20px' }}>
                      <Degree
                        degree={
                          user?.profile?.master?.degree
                            ? user?.profile?.master?.degree
                            : 'N/A'
                        }
                        subject={
                          user?.profile?.master?.subject
                            ? user?.profile?.master?.subject
                            : 'N/A'
                        }
                        board={
                          user?.profile?.master?.board
                            ? user?.profile?.master?.board
                            : 'N/A'
                        }
                        passingYear={
                          user?.profile?.master?.passingYear
                            ? user?.profile?.master?.passingYear
                            : 'N/A'
                        }
                        result={
                          user?.profile?.master?.result
                            ? user?.profile?.master?.result
                            : 'N/A'
                        }
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
                    <span>
                      {user?.profile?.speciality
                        ? user?.profile?.speciality
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Present Address:{' '}
                    </span>
                    <span>
                      {user?.profile?.presentAddress
                        ? user?.profile?.presentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Permanent Address:{' '}
                    </span>
                    <span>
                      {user?.profile?.permanentAddress
                        ? user?.profile?.permanentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewProfile;
