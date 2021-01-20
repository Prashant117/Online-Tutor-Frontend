import {
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
} from './types';
import { setAlert } from './alert';
import axios from 'axios';
import Cookies from 'js-cookie';
import setAuthToken from '../utils/setAuthToken';

const BASE_URL = 'http://localhost:5000/api';

//Load User

export const loadUser = (token, people) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    token,
    people,
  });

  try {
    const res = await axios.post(`${BASE_URL}/auth`, body, config);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Student Register

export const studentRegister = ({
  firstName,
  lastName,
  email,
  phone,
  password,
  gender,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
  });

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/student/register`,
      body,
      config
    );

    console.log(res.data);

    dispatch(setAlert(res.data.message, 'success'));
    window.location.replace('/login/student');
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Student Login

export const studentLogin = ({ email, password }) => async (dispatch) => {
  //console.log({ email, password });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/student/login`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    dispatch(setAlert(res.data.message, 'success'));
    Cookies.set('Token', res.data.data.token, { expires: 2 });
    Cookies.set('people', 'student');

    window.location.replace('/dashboard');
    // dispatch(loadUser());
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Tutor Login

export const tutorLogin = ({ email, password }) => async (dispatch) => {
  //console.log({ email, password });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`${BASE_URL}/auth/tutor/login`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    dispatch(setAlert(res.data.message, 'success'));
    Cookies.set('Token', res.data.data.token, { expires: 2 });
    Cookies.set('people', 'tutor');
    window.location.replace('/dashboard');
    // dispatch(loadUser());
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Tutor Register

export const tutorRegister = ({
  firstName,
  lastName,
  email,
  phone,
  password,
  gender,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
  });

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/tutor/register`,
      body,
      config
    );

    dispatch(setAlert(res.data.message, 'success'));
    window.location.replace('/login/tutor');
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  Cookies.remove('Token');
  Cookies.remove('people');
  dispatch({ type: LOG_OUT });
};
