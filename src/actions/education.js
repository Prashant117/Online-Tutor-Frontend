import {
  SSC_LEVEL,
  HSC_LEVEL,
  BOARD_NAME,
  GROUP_NAME,
  UNIVERSITY_NAME,
  PASSING_YEARS,
  GRADUATION_DEGREE,
  MASTER_DEGREE,
} from './types';
import { setAlert } from './alert';
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:5000/api';

//SSC Level
export const getSSCLevel = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/education/ssc-level`, config);

    dispatch({
      type: SSC_LEVEL,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//HSC Level
export const getHSCLevel = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/education/hsc-level`, config);

    dispatch({
      type: HSC_LEVEL,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//BOARD NAME
export const getBoardName = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/education/boards`, config);

    dispatch({
      type: BOARD_NAME,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//GROUP NAME
export const getGroupName = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/education/groups`, config);

    dispatch({
      type: GROUP_NAME,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//UNIVERSITY NAME
export const getUniversityName = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/education/university`, config);

    dispatch({
      type: UNIVERSITY_NAME,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};
//PASSING YEARS
export const getPassingYears = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/education/years`, config);

    dispatch({
      type: PASSING_YEARS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//GRADUATION DEGREE
export const getGraduationDegree = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(
      `${BASE_URL}/education/graduation-degree`,
      config
    );

    dispatch({
      type: GRADUATION_DEGREE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};

//MASTER DEGREE
export const getMasterDegree = () => async (dispatch) => {
  const token = Cookies.get('Token');
  const config = {
    headers: {
      token: token,
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/education/master-degree`, config);

    dispatch({
      type: MASTER_DEGREE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
  }
};
