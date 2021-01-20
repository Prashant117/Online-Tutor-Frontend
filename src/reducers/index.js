import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { educationReducer } from './educationReducer';
import alert from './alert';

const rootReducer = combineReducers({
  auth: authReducer,
  alert,
  education: educationReducer,
});

export default rootReducer;
