import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { educationReducer } from './educationReducer';
import alert from './alert';
import { profile } from './profile';

const rootReducer = combineReducers({
  auth: authReducer,
  alert,
  education: educationReducer,
  profile,
});

export default rootReducer;
