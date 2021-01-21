import React, { useEffect } from 'react';
import profileImage from '../../images/ProfileImage.png';
import Exam from './Exam';
import Degree from './Degree';
import './TutorViewProfile.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { tutorViewProfile } from '../../actions/profile';
import Spinner from '../../components/Spinner/Spinner';

const ViewProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user?.status === 'tutor') {
      dispatch(tutorViewProfile(user?._id));
    }
  }, [user, dispatch]);

  const profile = useSelector((state) => state.profile);
  const { loading } = profile;

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
                      profile?.tutorViewProfile?.image
                        ? `http://localhost:5000/public/${profile?.tutorViewProfile?.image}`
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
                        profile?.tutorViewProfile?.ssc?.examination
                          ? profile?.tutorViewProfile?.ssc?.examination
                          : 'N/A'
                      }
                      group={
                        profile?.tutorViewProfile?.ssc?.group
                          ? profile?.tutorViewProfile?.ssc?.group
                          : 'N/A'
                      }
                      board={
                        profile?.tutorViewProfile?.ssc?.board
                          ? profile?.tutorViewProfile?.ssc?.board
                          : 'N/A'
                      }
                      passingYear={
                        profile?.tutorViewProfile?.ssc?.passingYear
                          ? profile?.tutorViewProfile?.ssc?.passingYear
                          : 'N/A'
                      }
                      result={
                        profile?.tutorViewProfile?.ssc?.result
                          ? profile?.tutorViewProfile?.ssc?.result
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
                          profile?.tutorViewProfile?.hsc?.examination
                            ? profile?.tutorViewProfile?.hsc?.examination
                            : 'N/A'
                        }
                        group={
                          profile?.tutorViewProfile?.hsc?.group
                            ? profile?.tutorViewProfile?.hsc?.group
                            : 'N/A'
                        }
                        board={
                          profile?.tutorViewProfile?.hsc?.board
                            ? profile?.tutorViewProfile?.hsc?.board
                            : 'N/A'
                        }
                        passingYear={
                          profile?.tutorViewProfile?.hsc?.passingYear
                            ? profile?.tutorViewProfile?.hsc?.passingYear
                            : 'N/A'
                        }
                        result={
                          profile?.tutorViewProfile?.hsc?.result
                            ? profile?.tutorViewProfile?.hsc?.result
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
                        profile?.tutorViewProfile?.graduation?.degree
                          ? profile?.tutorViewProfile?.graduation?.degree
                          : 'N/A'
                      }
                      subject={
                        profile?.tutorViewProfile?.graduation?.subject
                          ? profile?.tutorViewProfile?.graduation?.subject
                          : 'N/A'
                      }
                      board={
                        profile?.tutorViewProfile?.graduation?.board
                          ? profile?.tutorViewProfile?.graduation?.board
                          : 'N/A'
                      }
                      passingYear={
                        profile?.tutorViewProfile?.graduation?.passingYear
                          ? profile?.tutorViewProfile?.graduation?.passingYear
                          : 'N/A'
                      }
                      result={
                        profile?.tutorViewProfile?.graduation?.result
                          ? profile?.tutorViewProfile?.graduation?.result
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
                          profile?.tutorViewProfile?.master?.degree
                            ? profile?.tutorViewProfile?.master?.degree
                            : 'N/A'
                        }
                        subject={
                          profile?.tutorViewProfile?.master?.subject
                            ? profile?.tutorViewProfile?.master?.subject
                            : 'N/A'
                        }
                        board={
                          profile?.tutorViewProfile?.master?.board
                            ? profile?.tutorViewProfile?.master?.board
                            : 'N/A'
                        }
                        passingYear={
                          profile?.tutorViewProfile?.master?.passingYear
                            ? profile?.tutorViewProfile?.master?.passingYear
                            : 'N/A'
                        }
                        result={
                          profile?.tutorViewProfile?.master?.result
                            ? profile?.tutorViewProfile?.master?.result
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
                      {profile?.tutorViewProfile?.speciality
                        ? profile?.tutorViewProfile?.speciality
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Present Address:{' '}
                    </span>
                    <span>
                      {profile?.tutorViewProfile?.presentAddress
                        ? profile?.tutorViewProfile?.presentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Permanent Address:{' '}
                    </span>
                    <span>
                      {profile?.tutorViewProfile?.permanentAddress
                        ? profile?.tutorViewProfile?.permanentAddress
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
