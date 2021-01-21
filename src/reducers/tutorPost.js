import { ALL_TUTOR_POST, SPECIFIC_TUTOR_POST } from '../actions/types';

const initialState = {
  loading: true,
  allPosts: null,
  specificTutorPosts: null,
};

export const post = (state = initialState, action) => {
  const { type, payload } = action;
  //console.log(payload);
  switch (type) {
    case ALL_TUTOR_POST:
      return {
        ...state,
        loading: false,
        allPosts: payload,
      };
    case SPECIFIC_TUTOR_POST:
      return {
        ...state,
        loading: false,
        specificTutorPosts: payload,
      };

    default:
      return state;
  }
};
