import {put, takeLatest} from 'redux-saga/effects';
import * as authActionTypes from './authentication.types';
import {userLogin, fetchUserCart} from './authentication.apis';

function* loginUser({payload}) {
  try {
    const response = yield userLogin(payload);
    yield put({type: authActionTypes.LOGIN_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: authActionTypes.LOGIN_FAILURE, payload: {}});
  }
}

function* getUserCart() {
  try {
    const response = yield fetchUserCart(2);
    yield put({type: authActionTypes.SET_CART, payload: response});
  } catch (error) {
    yield put({type: authActionTypes.SET_CART, payload: []});
  }
}

export default function* loginScreenSaga() {
  yield takeLatest(authActionTypes.LOGIN_REQUEST, loginUser);
  yield takeLatest(authActionTypes.LOGIN_SUCCESS, getUserCart);
}
