import { combineReducers } from "redux";
import gitReducer from "./gitReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  git: gitReducer,
  alert: alertReducer
});
