import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, type, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({ type: SET_ALERT, payload: { id, msg, type } });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
