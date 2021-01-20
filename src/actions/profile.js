import { setAlert } from './alert';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:5000/api';

//Tutor Update Profile

export const tutorUpdateProfile = ({
  userId,
  email,
  sscExamination,
  sscBoard,
  sscGroup,
  sscPassingYear,
  sscResult,
  hscExamination,
  hscBoard,
  hscGroup,
  hscPassingYear,
  hscResult,
  graduationDegree,
  graduationSubject,
  graduationPassingYear,
  graduationBoard,
  graduationResult,
  masterDegree,
  masterSubject,
  masterPassingYear,
  masterBoard,
  masterResult,
  speciality,
  presentAddress,
  permanentAddress,
  image,
}) => async (dispatch) => {
  console.log(image);
  const token = Cookies.get('Token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  };
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('email', email);
  formData.append('image', image);
  formData.append('sscExamination', sscExamination);
  formData.append('sscBoard', sscBoard);
  formData.append('sscGroup', sscGroup);
  formData.append('sscPassingYear', sscPassingYear);
  formData.append('sscResult', sscResult);
  formData.append('hscExamination', hscExamination);
  formData.append('hscBoard', hscBoard);
  formData.append('hscGroup', hscGroup);
  formData.append('hscPassingYear', hscPassingYear);
  formData.append('hscResult', hscResult);
  formData.append('graduationDegree', graduationDegree);
  formData.append('graduationSubject', graduationSubject);
  formData.append('graduationBoard', graduationBoard);
  formData.append('graduationPassingYear', graduationPassingYear);
  formData.append('graduationResult', graduationResult);
  formData.append('masterDegree', masterDegree);
  formData.append('masterSubject', masterSubject);
  formData.append('masterBoard', masterBoard);
  formData.append('masterPassingYear', masterPassingYear);
  formData.append('masterResult', masterResult);
  formData.append('speciality', speciality);
  formData.append('presentAddress', presentAddress);
  formData.append('permanentAddress', permanentAddress);
  const body = formData;

  try {
    const res = await axios.put(
      `${BASE_URL}/update-profile/tutor`,
      body,
      config
    );

    console.log(res.data);

    dispatch(setAlert(res.data.message, 'success'));
    window.location.replace('/');
  } catch (err) {
    const errors = err?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//Student Update Profile

export const studentUpdateProfile = ({
  userId,
  email,
  className,
  presentAddress,
  permanentAddress,
  image,
}) => async (dispatch) => {
  console.log(image);
  const token = Cookies.get('Token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  };
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('email', email);
  formData.append('image', image);
  formData.append('className', className);
  formData.append('presentAddress', presentAddress);
  formData.append('permanentAddress', permanentAddress);
  const body = formData;

  try {
    const res = await axios.put(
      `${BASE_URL}/update-profile/student`,
      body,
      config
    );

    console.log(res.data);

    dispatch(setAlert(res.data.message, 'success'));
    window.location.replace('/');
  } catch (err) {
    const errors = err?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};
