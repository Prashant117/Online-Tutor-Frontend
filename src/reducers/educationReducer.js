import {
  SSC_LEVEL,
  HSC_LEVEL,
  BOARD_NAME,
  GROUP_NAME,
  UNIVERSITY_NAME,
  PASSING_YEARS,
  GRADUATION_DEGREE,
  MASTER_DEGREE,
} from '../actions/types';

const initialState = {
  loading: true,
  ssc: null,
  hsc: null,
  group: null,
  university: null,
  board: null,
  years: null,
  graduation: null,
  master: null,
};

export const educationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SSC_LEVEL:
      return {
        ...state,

        loading: false,
        ssc: payload,
      };
    case HSC_LEVEL:
      return {
        ...state,
        loading: false,
        hsc: payload,
      };

    case BOARD_NAME:
      return {
        ...state,
        loading: false,
        board: payload,
      };
    case GROUP_NAME:
      return {
        ...state,
        loading: false,
        group: payload,
      };
    case UNIVERSITY_NAME:
      return {
        ...state,
        loading: false,
        university: payload,
      };
    case PASSING_YEARS:
      return {
        ...state,
        loading: false,
        years: payload,
      };
    case GRADUATION_DEGREE:
      return {
        ...state,
        loading: false,
        graduation: payload,
      };
    case MASTER_DEGREE:
      return {
        ...state,
        loading: false,
        master: payload,
      };

    default:
      return state;
  }
};
