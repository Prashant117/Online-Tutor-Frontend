import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileImage from '../TutorUpdateProfile/ProfileImage';
import { useDispatch, useSelector } from 'react-redux';
import {
  studentUpdateProfile,
  studentViewProfile,
} from '../../actions/profile';
import profileImage from '../../images/ProfileImage.png';
import Spinner from '../../components/Spinner/Spinner';

const StudentUpdateProfile = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  //Inof
  const [className, setClassName] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [image, setImage] = useState('');

  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    setImage(`http://localhost:5000/public/${user?.profile?.image}`);
    setClassName(user?.profile?.className);
    setPresentAddress(user?.profile?.presentAddress);
    setPermanentAddress(user?.profile?.permanentAddress);
  }, [user]);

  console.log(image);

  const onSubmit = (data) => {
    data.userId = user?._id;
    if (image !== '') {
      dispatch(studentUpdateProfile(data));
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="auth-wrapper">
          <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
              <div className="card card-4">
                <div className="card-body">
                  <h2 className="title text-center">Update Profile</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ProfileImage
                      register={register}
                      image={
                        typeof image === 'object'
                          ? URL.createObjectURL(image)
                          : image
                      }
                      setImage={setImage}
                    />

                    <div className="row row-space">
                      <div className="input-group">
                        <label className="label">Class name</label>
                        <input
                          value={className}
                          ref={register}
                          onChange={(e) => setClassName(e.target.value)}
                          style={{ height: '50px' }}
                          className="input--style-4"
                          type="text"
                          name="className"
                        />
                      </div>
                    </div>

                    <div className="row row-space">
                      <div className="input-group">
                        <label className="label">Present Address</label>
                        <textarea
                          ref={register}
                          value={presentAddress}
                          onChange={(e) => setPresentAddress(e.target.value)}
                          className="input--style-4 text-area"
                          name="presentAddress"
                        ></textarea>
                      </div>
                    </div>

                    <div className="row row-space">
                      <div className="input-group">
                        <label className="label">Permanent Address</label>
                        <textarea
                          ref={register}
                          value={permanentAddress}
                          onChange={(e) => setPermanentAddress(e.target.value)}
                          className="input--style-4 text-area"
                          name="permanentAddress"
                        ></textarea>
                      </div>
                    </div>

                    <div className="p-t-15 text-center">
                      <button
                        className="btn btn--radius-2 btn--red"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentUpdateProfile;
