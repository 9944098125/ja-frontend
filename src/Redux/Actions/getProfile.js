import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from "./Types";
import api from "../Api/Api";

export const getProfile = (userId) => async (dispatch) => {
  dispatch({
    type: GET_PROFILE_START,
  });
  try {
    const profileResponse = await api.get("/users/getProfile/" + userId);
    if (profileResponse) {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: profileResponse.data.user,
      });
      // console.log(profileResponse);
    }
  } catch (err) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: err.response.data.message,
    });
  }
};
