import React, { useEffect, useState } from 'react';
import profileImage from '../../images/ProfileImage.png';
import Exam from './Exam';
import Degree from './Degree';
import './TutorViewProfile.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { visitTutorProfile } from '../../actions/profile';
import Spinner from '../../components/Spinner/Spinner';
import Cookies from 'js-cookie';

const VisitTutorProfile = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(visitTutorProfile(id));
  }, [dispatch, id]);

  const { user } = useSelector((state) => state.auth);
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
                      profile?.visitTutorProfile?.image
                        ? `http://localhost:5000/public/${profile?.visitTutorProfile?.profile?.image}`
                        : profileImage
                    }
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    {profile?.visitTutorProfile?.firstName}{' '}
                    {profile?.visitTutorProfile?.lastName}
                  </h5>
                  <p>{profile?.visitTutorProfile?.email}</p>
                  <p>{profile?.visitTutorProfile?.phone}</p>
                  <span className="badge badge-info">Tutor</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="viewProfile-card ssc-hsc">
                <div className="col-md-6">
                  <div className="ssc">
                    <h5>SSC</h5>
                    <Exam
                      examination={
                        profile?.visitTutorProfile?.profile?.ssc?.examination
                          ? profile?.visitTutorProfile?.profile?.ssc
                              ?.examination
                          : 'N/A'
                      }
                      group={
                        profile?.visitTutorProfile?.profile?.ssc?.group
                          ? profile?.visitTutorProfile?.profile?.ssc?.group
                          : 'N/A'
                      }
                      board={
                        profile?.visitTutorProfile?.profile?.ssc?.board
                          ? profile?.visitTutorProfile?.profile?.ssc?.board
                          : 'N/A'
                      }
                      passingYear={
                        profile?.visitTutorProfile?.profile?.ssc?.passingYear
                          ? profile?.visitTutorProfile?.profile?.ssc
                              ?.passingYear
                          : 'N/A'
                      }
                      result={
                        profile?.visitTutorProfile?.profile?.ssc?.result
                          ? profile?.visitTutorProfile?.profile?.ssc?.result
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
                          profile?.visitTutorProfile?.profile?.hsc?.examination
                            ? profile?.visitTutorProfile?.profile?.hsc
                                ?.examination
                            : 'N/A'
                        }
                        group={
                          profile?.visitTutorProfile?.profile?.hsc?.group
                            ? profile?.visitTutorProfile?.profile?.hsc?.group
                            : 'N/A'
                        }
                        board={
                          profile?.visitTutorProfile?.profile?.hsc?.board
                            ? profile?.visitTutorProfile?.profile?.hsc?.board
                            : 'N/A'
                        }
                        passingYear={
                          profile?.visitTutorProfile?.profile?.hsc?.passingYear
                            ? profile?.visitTutorProfile?.profile?.hsc
                                ?.passingYear
                            : 'N/A'
                        }
                        result={
                          profile?.visitTutorProfile?.profile?.hsc?.result
                            ? profile?.visitTutorProfile?.profile?.hsc?.result
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
                        profile?.visitTutorProfile?.profile?.graduation?.degree
                          ? profile?.visitTutorProfile?.profile?.graduation
                              ?.degree
                          : 'N/A'
                      }
                      subject={
                        profile?.visitTutorProfile?.profile?.graduation?.subject
                          ? profile?.visitTutorProfile?.profile?.graduation
                              ?.subject
                          : 'N/A'
                      }
                      board={
                        profile?.visitTutorProfile?.profile?.graduation?.board
                          ? profile?.visitTutorProfile?.profile?.graduation
                              ?.board
                          : 'N/A'
                      }
                      passingYear={
                        profile?.visitTutorProfile?.profile?.graduation
                          ?.passingYear
                          ? profile?.visitTutorProfile?.profile?.graduation
                              ?.passingYear
                          : 'N/A'
                      }
                      result={
                        profile?.visitTutorProfile?.profile?.graduation?.result
                          ? profile?.visitTutorProfile?.profile?.graduation
                              ?.result
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
                          profile?.visitTutorProfile?.profile?.master?.degree
                            ? profile?.visitTutorProfile?.profile?.master
                                ?.degree
                            : 'N/A'
                        }
                        subject={
                          profile?.visitTutorProfile?.profile?.master?.subject
                            ? profile?.visitTutorProfile?.profile?.master
                                ?.subject
                            : 'N/A'
                        }
                        board={
                          profile?.visitTutorProfile?.profile?.master?.board
                            ? profile?.visitTutorProfile?.profile?.master?.board
                            : 'N/A'
                        }
                        passingYear={
                          profile?.visitTutorProfile?.profile?.master
                            ?.passingYear
                            ? profile?.visitTutorProfile?.profile?.master
                                ?.passingYear
                            : 'N/A'
                        }
                        result={
                          profile?.visitTutorProfile?.profile?.master?.result
                            ? profile?.visitTutorProfile?.profile?.master
                                ?.result
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
                      {profile?.visitTutorProfile?.profile?.speciality
                        ? profile?.visitTutorProfile?.profile?.speciality
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Present Address:{' '}
                    </span>
                    <span>
                      {profile?.visitTutorProfile?.profile?.presentAddress
                        ? profile?.visitTutorProfile?.profile?.presentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Permanent Address:{' '}
                    </span>
                    <span>
                      {profile?.visitTutorProfile?.profile?.permanentAddress
                        ? profile?.visitTutorProfile?.profile?.permanentAddress
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

export default VisitTutorProfile;
