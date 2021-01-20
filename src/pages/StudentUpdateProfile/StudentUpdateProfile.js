import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileImage from '../TutorUpdateProfile/ProfileImage';
import { useDispatch } from 'react-redux';
import { studentUpdateProfile } from '../../actions/profile';
import { useSelector } from 'react-redux';

const StudentUpdateProfile = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useSelector((state) => state.auth);

  //Inof
  const [className, setClassName] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    data.userId = user?._id;
    data.email = user?.email;
    data.image = image;
    dispatch(studentUpdateProfile(data));
    window.scrollTo(0, 0);
  };

  return (
    <div className="auth-wrapper">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title text-center">Update Profile</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ProfileImage
                  register={register}
                  image={image}
                  setImage={setImage}
                />

                <div className="row row-space">
                  <img src={image} alt="" />
                  <div className="input-group">
                    <label className="label">Class name</label>
                    <input
                      value={className}
                      ref={register}
                      onChange={(e) => setClassName(e.target.value)}
                      style={{ height: '50px' }}
                      className="input--style-4"
                      type="text"
                      name="speciality"
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
                  <button className="btn btn--radius-2 btn--red" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentUpdateProfile;
