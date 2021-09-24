import * as actionTypes from './authentication.types';

const INITIAL_STATE = {
  onboarded: false,
  loading: false,
  isAuthenticated: false,
  user: null,
  cart: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        onboarded: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case actionTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
