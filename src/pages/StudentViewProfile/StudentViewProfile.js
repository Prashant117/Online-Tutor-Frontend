import React, { useEffect } from 'react';
import profileImage from '../../images/ProfileImage.png';
import '../TutorViewProfile/TutorViewProfile.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { studentViewProfile } from '../../actions/profile';
import Spinner from '../../components/Spinner/Spinner';

const ViewProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user?.status === 'student') {
      dispatch(studentViewProfile(user?._id));
    }
  }, [user, dispatch]);

  const profile = useSelector((state) => state.profile);
  const { loading } = profile;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="viewProfile">
          <div className="container">
            <div className="row">
              <div className="viewProfile__basic-info viewProfile-card">
                <div className="viewProfile__basic-info-image-wrapper">
                  <img
                    src={
                      profile?.studentViewProfile?.image
                        ? `http://localhost:5000/public/${profile?.studentViewProfile?.image}`
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
                    <span>
                      {profile?.studentViewProfile?.className
                        ? profile?.studentViewProfile?.className
                        : 'N/A'}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Present Address:{' '}
                    </span>
                    <span>
                      {profile?.studentViewProfile?.presentAddress
                        ? profile?.studentViewProfile?.presentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Permanent Address:{' '}
                    </span>
                    <span>
                      {profile?.studentViewProfile?.permanentAddress
                        ? profile?.studentViewProfile?.permanentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProfile;
