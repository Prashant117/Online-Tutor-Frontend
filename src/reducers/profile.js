import {
  TUTOR_VIEW_PROFILE,
  STUDENT_VIEW_PROFILE,
  PROFILE_STATUS_CODE,
  VISIT_TUTOR_PROFILE,
} from '../actions/types';

const initialState = {
  tutorViewProfile: null,
  studentViewProfile: null,
  profileStatusCode: null,
  visitTutorProfile: null,
  loading: true,
};

export const profile = (state = initialState, action) => {
  const { type, payload } = action;
  //console.log(payload);
  switch (type) {
    case TUTOR_VIEW_PROFILE:
      return {
        ...state,
        loading: false,
        tutorViewProfile: payload,
      };
    case VISIT_TUTOR_PROFILE:
      return {
        ...state,
        loading: false,
        visitTutorProfile: payload,
      };
    case STUDENT_VIEW_PROFILE:
      return {
        ...state,
        loading: false,
        studentViewProfile: payload,
      };
    case PROFILE_STATUS_CODE:
      return {
        ...state,
        loading: false,
        profileStatusCode: payload,
      };

    default:
      return state;
  }
};
