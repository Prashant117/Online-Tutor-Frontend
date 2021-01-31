import React, { useEffect } from 'react';
import profileImage from '../../images/ProfileImage.png';
import '../TutorViewProfile/TutorViewProfile.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { visitStudentProfile } from '../../actions/profile';

const ViewProfile = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(visitStudentProfile(id));
  }, [dispatch, id]);

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
                      profile?.visitStudentProfile?.profile?.image
                        ? `http://localhost:5000/public/${profile?.visitStudentProfile?.profile?.image}`
                        : profileImage
                    }
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    {profile?.visitStudentProfile?.firstName}{' '}
                    {profile?.visitStudentProfile?.lastName}
                  </h5>
                  <p>{profile?.visitStudentProfile?.email}</p>
                  <p>{profile?.visitStudentProfile?.phone}</p>
                  <span className="badge badge-info">Student</span>
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
                      Class Name:{' '}
                    </span>
                    <span>
                      {profile?.visitStudentProfile?.profile?.className
                        ? profile?.visitStudentProfile?.profile?.className
                        : 'N/A'}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Present Address:{' '}
                    </span>
                    <span>
                      {profile?.visitStudentProfile?.profile?.presentAddress
                        ? profile?.visitStudentProfile?.profile?.presentAddress
                        : 'N/A'}{' '}
                    </span>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <span style={{ fontWeight: '600', marginRight: '10px' }}>
                      Permanent Address:{' '}
                    </span>
                    <span>
                      {profile?.visitStudentProfile?.profile?.permanentAddress
                        ? profile?.visitStudentProfile?.profile
                            ?.permanentAddress
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
