import {
  SEARCH_USER,
  USER_ERROR,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  REMOVE_USER,
  GET_REPOS
} from "./../actions/types";

const initialState = {
  users: null,
  repos: null,
  user: {},
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
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case REMOVE_USER:
      return {
        ...state,
        user: {}
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
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
