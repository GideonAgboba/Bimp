import {all} from 'redux-saga/effects';
import loginScreenSaga from './Authentication/authentication.sagas';

function* rootSaga() {
 yield all([loginScreenSaga()]);
}
 
export default rootSaga;