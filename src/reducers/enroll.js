import { GET_ENROLLED_POST_BY_STUDENT_ID } from '../actions/types';

const initialState = {
  postLoading: true,
  getEnrolledPost: null,
};

export const enroll = (state = initialState, action) => {
  const { type, payload } = action;
  //console.log(payload);
  switch (type) {
    case GET_ENROLLED_POST_BY_STUDENT_ID:
      return {
        ...state,
        postLoading: false,
        getEnrolledPost: payload,
      };

    default:
      return state;
  }
};
