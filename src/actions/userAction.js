import {
  SEARCH_USER,
  USER_ERROR,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  REMOVE_USER,
  GET_REPOS
} from "./types";

// Search user
export const searchUser = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`https://api.github.com/search/users?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_USER,
      payload: data.items
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data
    });
  }
};

// Users back to null
export const clearUsers = () => ({
  type: CLEAR_USERS
});

// Get user from github api
export const getUser = login => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();

    dispatch({
      type: GET_USER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data
    });
  }
};

// User back to {}
export const removeUser = () => ({
  type: REMOVE_USER
});

// Get user repositories from api
export const getUserRepos = login => async dispatch => {
  try {
    setLoading();

    const res = await fetch(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created`
    );
    const data = await res.json();

    dispatch({
      type: GET_REPOS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data
    });
  }
};

// Set loading to true
const setLoading = () => ({
  type: SET_LOADING
});
