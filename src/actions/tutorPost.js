import { ALL_TUTOR_POST, SPECIFIC_TUTOR_POST } from './types';
import { setAlert } from './alert';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:5000/api';

//ALL TUTOR POST
export const getAllTutorPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/tutor-post/all`);
    console.log(res);
    dispatch({
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
    const res = await axios.get(`${BASE_URL}/tutor-post/${id}`, config);
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
