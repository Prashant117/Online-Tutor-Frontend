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
  const [info, setInfo] = useState({});
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(visitTutorProfile(id));
  }, [dispatch, id]);

  const { user } = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const { loading } = profile;

  useEffect(() => {
    fetch(`http://localhost:5000/api/profile/visitor/${id}`, {
      method: 'GET',
      headers: {
        token: Cookies.get('Token'),
      },
    })
      .then((res) => res.json())
      .then((json) => setInfo(json?.data));
  }, [id]);

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
                        ? `http://localhost:5000/public/${profile?.visitTutorProfile?.image}`
                        : profileImage
                    }
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    {info?.firstName} {info?.lastName}
                  </h5>
                  <p>{info?.email}</p>
                  <p>{info?.phone}</p>
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
                        profile?.visitTutorProfile?.ssc?.examination
                          ? profile?.visitTutorProfile?.ssc?.examination
                          : 'N/A'
                      }
                      group={
                        profile?.visitTutorProfile?.ssc?.group
                          ? profile?.visitTutorProfile?.ssc?.group
                          : 'N/A'
                      }
                      board={
                        profile?.visitTutorProfile?.ssc?.board
                          ? profile?.visitTutorProfile?.ssc?.board
                          : 'N/A'
                      }
                      passingYear={
                        profile?.visitTutorProfile?.ssc?.passingYear
                          ? profile?.visitTutorProfile?.ssc?.passingYear
                          : 'N/A'
                      }
                      result={
                        profile?.visitTutorProfile?.ssc?.result
                          ? profile?.visitTutorProfile?.ssc?.result
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
                          profile?.visitTutorProfile?.hsc?.examination
                            ? profile?.visitTutorProfile?.hsc?.examination
                            : 'N/A'
                        }
                        group={
                          profile?.visitTutorProfile?.hsc?.group
                            ? profile?.visitTutorProfile?.hsc?.group
                            : 'N/A'
                        }
                        board={
                          profile?.visitTutorProfile?.hsc?.board
                            ? profile?.visitTutorProfile?.hsc?.board
                            : 'N/A'
                        }
                        passingYear={
                          profile?.visitTutorProfile?.hsc?.passingYear
                            ? profile?.visitTutorProfile?.hsc?.passingYear
                            : 'N/A'
                        }
                        result={
                          profile?.visitTutorProfile?.hsc?.result
                            ? profile?.visitTutorProfile?.hsc?.result
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
                        profile?.visitTutorProfile?.graduation?.degree
                          ? profile?.visitTutorProfile?.graduation?.degree
                          : 'N/A'
                      }
                      subject={
                        profile?.visitTutorProfile?.graduation?.subject
                          ? profile?.visitTutorProfile?.graduation?.subject
                          : 'N/A'
                      }
                      board={
                        profile?.visitTutorProfile?.graduation?.board
                          ? profile?.visitTutorProfile?.graduation?.board
                          : 'N/A'
                      }
                      passingYear={
                        profile?.visitTutorProfile?.graduation?.passingYear
                          ? profile?.visitTutorProfile?.graduation?.passingYear
                          : 'N/A'
                      }
                      result={
                        profile?.visitTutorProfile?.graduation?.result
                          ? profile?.visitTutorProfile?.graduation?.result
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
                          profile?.visitTutorProfile?.master?.degree
                            ? profile?.visitTutorProfile?.master?.degree
                            : 'N/A'
                        }
                        subject={
                          profile?.visitTutorProfile?.master?.subject
                            ? profile?.visitTutorProfile?.master?.subject
                            : 'N/A'
                        }
                        board={
                          profile?.visitTutorProfile?.master?.board
                            ? profile?.visitTutorProfile?.master?.board
                            : 'N/A'
                        }
                        passingYear={
                          profile?.visitTutorProfile?.master?.passingYear
                            ? profile?.visitTutorProfile?.master?.passingYear
                            : 'N/A'
                        }
                        result={
                          profile?.visitTutorProfile?.master?.result
                            ? profile?.visitTutorProfile?.master?.result
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
                      {profile?.visitTutorProfile?.speciality
                        ? profile?.visitTutorProfile?.speciality
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Present Address:{' '}
                    </span>
                    <span>
                      {profile?.visitTutorProfile?.presentAddress
                        ? profile?.visitTutorProfile?.presentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Permanent Address:{' '}
                    </span>
                    <span>
                      {profile?.visitTutorProfile?.permanentAddress
                        ? profile?.visitTutorProfile?.permanentAddress
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
