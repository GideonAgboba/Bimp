import * as actionTypes from './home.types';

const INITIAL_STATE = {
  categories: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}
