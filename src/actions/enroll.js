import { GET_ENROLLED_POST_BY_STUDENT_ID } from './types';
import { setAlert } from './alert';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:5000/api';

//GET ENROLLED POST BY STUDENT ID
export const studentEnroll = (tutorId, studentId, postId) => async (
  dispatch
) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
  };
  const body = JSON.stringify({
    tutorId,
    studentId,
    postId,
  });
  try {
    const res = await axios.post(`${BASE_URL}/enroll`, body, config);
    console.log(res);
    dispatch(setAlert(res.data.message, 'success'));
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//GET ENROLLED POST BY STUDENT ID
export const getEnrolledPostByStudentId = (id) => async (dispatch) => {
  console.log(id);
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/enroll/student/${id}`, config);
    console.log(res);
    dispatch({
      type: GET_ENROLLED_POST_BY_STUDENT_ID,
      payload: res?.data?.data,
    });
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};
