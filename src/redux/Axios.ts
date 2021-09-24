import axios from 'axios';
import {store} from './store';
import * as authActionTypes from './Authentication/authentication.types';
import {Notify} from '../utils'
import {Config} from '../constants'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: Config.baseURL.apiUrl,
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      Notify.show(
        'error',
        'Authentication Error',
        error.response?.data?.message || 'Authentication expired'
      );
      store.dispatch({
        type: authActionTypes.LOGOUT_USER,
      });
    } else if (error.response.status === 400) {
      Notify.show(
        'error',
        'Error',
        error.response?.data?.message || 'Opps! Something went wrong. Try again'
      );
    } else {
      Notify.show(
        'error',
        'Error',
        error.response?.data?.message || 'Opps! something went wrong.'
      );
    }

    return error;
  }
);

export default instance;
