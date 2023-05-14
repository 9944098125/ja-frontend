import { combineReducers } from "redux";

import { alert } from "./alertReducer";
import register from "./registration";
import login from "./login";
import toggleTheme from "./toggleTheme";
import jobs from "./jobs.js";
import jobDetails from "./jobDetails";
import apply from "./applyJob";
import getProfile from "./getProfile";

export default combineReducers({
  alert,
  register,
  login,
  toggleTheme,
  jobs,
  jobDetails,
  apply,
  getProfile,
});
