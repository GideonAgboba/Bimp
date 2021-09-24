import {combineReducers} from 'redux';
import authReducer from './Authentication/authentication.reducer';
import homeReducer from './Home/home.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;
