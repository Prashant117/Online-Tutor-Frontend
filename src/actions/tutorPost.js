import { ALL_TUTOR_POST, SPECIFIC_TUTOR_POST } from './types';
import { setAlert } from './alert';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:5000/api';

// TUTOR POST
export const tutorPost = ({
  tutorId,
  subjectName,
  time,
  payment,
  days,
  note,
}) => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  };
  const body = JSON.stringify({
    tutorId,
    subjectName,
    time,
    payment: parseInt(payment),
    days: parseInt(days),
    note,
  });
  try {
    const res = await axios.post(`${BASE_URL}/tutor-post`, body, config);
    console.log(res);
    dispatch(setAlert(res?.data?.message, 'success'));
    window.location.reload();
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//ALL TUTOR POST
export const getAllTutorPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/tutor-post/all`);
    console.log(res);
    const tutor = await dispatch({
      type: ALL_TUTOR_POST,
      payload: res.data,
    });
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//SPECIFIC TUTOR POST
export const getSpecificTutorPosts = (id) => async (dispatch) => {
  console.log(id);
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/enroll/tutor/${id}`, config);
    console.log(res);
    dispatch({
      type: SPECIFIC_TUTOR_POST,
      payload: res.data,
    });
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};
