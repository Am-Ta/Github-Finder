import {
  SEARCH_USER,
  USER_ERROR,
  SET_LOADING,
  CLEAR_USERS
} from "./../actions/types";

const initialState = {
  users: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: null
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
