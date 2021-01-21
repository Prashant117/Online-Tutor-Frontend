import {
  TUTOR_VIEW_PROFILE,
  STUDENT_VIEW_PROFILE,
  PROFILE_STATUS_CODE,
} from './types';
import { setAlert } from './alert';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:5000/api';

//Tutor View Profile

export const tutorViewProfile = (id) => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/profile/tutor/${id}`, config);
    console.log(res);
    if (res.data.statusCode === 200) {
      dispatch({
        type: TUTOR_VIEW_PROFILE,
        payload: res.data.data,
      });
      dispatch({
        type: PROFILE_STATUS_CODE,
        payload: 200,
      });
    } else if (res.data.statusCode === 404) {
      dispatch({
        type: PROFILE_STATUS_CODE,
        payload: 404,
      });
    }
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};
//Student View Profile

export const studentViewProfile = (id) => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/profile/student/${id}`, config);
    console.log(res);
    if (res.data.statusCode === 200) {
      dispatch({
        type: STUDENT_VIEW_PROFILE,
        payload: res.data.data,
      });
      dispatch({
        type: PROFILE_STATUS_CODE,
        payload: 200,
      });
    } else if (res.data.statusCode === 404) {
      dispatch({
        type: PROFILE_STATUS_CODE,
        payload: 404,
      });
    }
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

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
    window.location.replace('/view-profile/tutor');
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
    window.location.replace('/view-profile/student');
  } catch (err) {
    const errors = err?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};
