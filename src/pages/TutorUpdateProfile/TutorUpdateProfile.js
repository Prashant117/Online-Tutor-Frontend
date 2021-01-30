import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './TutorUpdateProfile.css';
import ProfileImage from './ProfileImage';
import SSC from './SSC';
import HSC from './HSC';
import Graduation from './Graduation';
import Master from './Master';
import { useDispatch } from 'react-redux';
import { tutorUpdateProfile, tutorViewProfile } from '../../actions/profile';
import { useSelector } from 'react-redux';
import profileImage from '../../images/ProfileImage.png';
import {
  getSSCLevel,
  getHSCLevel,
  getBoardName,
  getGroupName,
  getUniversityName,
  getPassingYears,
  getGraduationDegree,
  getMasterDegree,
} from '../../actions/education';
import Spinner from '../../components/Spinner/Spinner';

const TutorUpdateProfile = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading } = useSelector((state) => state.auth);
  console.log(user);
  // SSC
  const [sscExamination, setSscExamination] = useState('');
  const [sscBoard, setSscBoard] = useState('');
  const [sscGroup, setSscGroup] = useState('');
  const [sscPassingYear, setSscPassingYear] = useState('');
  const [sscResult, setSscResult] = useState('');
  // HSC
  const [hscExamination, setHscExamination] = useState('');
  const [hscBoard, setHscBoard] = useState('');
  const [hscGroup, setHscGroup] = useState('');
  const [hscPassingYear, setHscPassingYear] = useState('');
  const [hscResult, setHscResult] = useState('');
  //Graduation
  const [graduationDegree, setGraduationDegree] = useState('');
  const [graduationSubject, setGraduationSubject] = useState('');
  const [graduationBoard, setGraduationBoard] = useState('');
  const [graduationPassingYear, setGraduationPassingYear] = useState('');
  const [graduationResult, setGraduationResult] = useState('');
  //Master
  const [masterDegree, setMasterDegree] = useState('');
  const [masterSubject, setMasterSubject] = useState('');
  const [masterBoard, setMasterBoard] = useState('');
  const [masterPassingYear, setMasterPassingYear] = useState('');
  const [masterResult, setMasterResult] = useState('');

  //Inof
  const [speciality, setSpeciality] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [image, setImage] = useState(profileImage);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    data.userId = user?._id;
    data.email = user?.email;
    data.image = image;
    dispatch(tutorUpdateProfile(data));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getSSCLevel());
    dispatch(getHSCLevel());
    dispatch(getBoardName());
    dispatch(getGroupName());
    dispatch(getUniversityName());
    dispatch(getPassingYears());
    dispatch(getGraduationDegree());
    dispatch(getMasterDegree());
  }, [dispatch]);

  useEffect(() => {
    //Image
    setImage(`http://localhost:5000/public/${user?.profile?.image}`);
    //ssc
    setSscExamination(user?.profile?.ssc?.examination);
    setSscGroup(user?.profile?.ssc?.group);
    setSscBoard(user?.profile?.ssc?.board);
    setSscPassingYear(user?.profile?.ssc?.passingYear);
    setSscResult(user?.profile?.ssc?.result);
    //hsc
    setHscExamination(user?.profile?.hsc?.examination);
    setHscGroup(user?.profile?.hsc?.group);
    setHscBoard(user?.profile?.hsc?.board);
    setHscPassingYear(user?.profile?.hsc?.passingYear);
    setHscResult(user?.profile?.hsc?.result);
    //Degree
    setGraduationDegree(user?.profile?.graduation?.degree);
    setGraduationSubject(user?.profile?.graduation?.subject);
    setGraduationBoard(user?.profile?.graduation?.board);
    setGraduationPassingYear(user?.profile?.graduation?.passingYear);
    setGraduationResult(user?.profile?.graduation?.result);
    //Master

    setMasterDegree(user?.profile?.master?.degree);
    setMasterSubject(user?.profile?.master?.subject);
    setMasterBoard(user?.profile?.master?.board);
    setMasterPassingYear(user?.profile?.master?.passingYear);
    setMasterResult(user?.profile?.master?.result);
    //Info
    setSpeciality(user?.profile?.speciality);
    setPresentAddress(user?.profile?.presentAddress);
    setPermanentAddress(user?.profile?.permanentAddress);
  }, [user]);

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
                    <SSC
                      register={register}
                      sscExamination={sscExamination}
                      setSscExamination={setSscExamination}
                      sscBoard={sscBoard}
                      setSscBoard={setSscBoard}
                      sscGroup={sscGroup}
                      setSscGroup={setSscGroup}
                      sscPassingYear={sscPassingYear}
                      setSscPassingYear={setSscPassingYear}
                      sscResult={sscResult}
                      setSscResult={setSscResult}
                    />
                    <HSC
                      register={register}
                      hscExamination={hscExamination}
                      setHscExamination={setHscExamination}
                      hscBoard={hscBoard}
                      setHscBoard={setHscBoard}
                      hscGroup={hscGroup}
                      setHscGroup={setHscGroup}
                      hscPassingYear={hscPassingYear}
                      setHscPassingYear={setHscPassingYear}
                      hscResult={hscResult}
                      setHscResult={setHscResult}
                    />
                    <Graduation
                      register={register}
                      graduationDegree={graduationDegree}
                      setGraduationDegree={setGraduationDegree}
                      graduationSubject={graduationSubject}
                      setGraduationSubject={setGraduationSubject}
                      graduationBoard={graduationBoard}
                      setGraduationBoard={setGraduationBoard}
                      graduationPassingYear={graduationPassingYear}
                      setGraduationPassingYear={setGraduationPassingYear}
                      graduationResult={graduationResult}
                      setGraduationResult={setGraduationResult}
                    />
                    <Master
                      register={register}
                      masterDegree={masterDegree}
                      setMasterDegree={setMasterDegree}
                      masterSubject={masterSubject}
                      setMasterSubject={setMasterSubject}
                      masterBoard={masterBoard}
                      setMasterBoard={setMasterBoard}
                      masterPassingYear={masterPassingYear}
                      setMasterPassingYear={setMasterPassingYear}
                      masterResult={masterResult}
                      setMasterResult={setMasterResult}
                    />

                    <div className="row row-space">
                      <div className="input-group">
                        <label className="label">Speciality</label>
                        <input
                          value={speciality}
                          ref={register}
                          onChange={(e) => setSpeciality(e.target.value)}
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

export default TutorUpdateProfile;
