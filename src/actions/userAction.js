import { SEARCH_USER, USER_ERROR, SET_LOADING, CLEAR_USERS } from "./types";

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

export const clearUsers = () => ({
  type: CLEAR_USERS
});

// Set loading to true
const setLoading = () => ({
  type: SET_LOADING
});
