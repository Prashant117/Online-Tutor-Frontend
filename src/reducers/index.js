import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { educationReducer } from './educationReducer';
import alert from './alert';
import { profile } from './profile';
import { post } from './tutorPost';
import { enroll } from './enroll';

const rootReducer = combineReducers({
  auth: authReducer,
  alert,
  education: educationReducer,
  profile,
  post,
  enroll,
});

export default rootReducer;
