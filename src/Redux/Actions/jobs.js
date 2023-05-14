import api from "../Api/Api";
import { GET_JOBS_START, GET_JOBS_SUCCESS, GET_JOBS_FAIL } from "./Types";

export const getJobs = () => async (dispatch) => {
  dispatch({
    type: GET_JOBS_START,
  });
  try {
    const jobsResponse = await api.get("/jobs/getJobs");
    if (jobsResponse) {
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: jobsResponse.data.jobs,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_JOBS_FAIL,
      payload: err.response.data.message,
    });
  }
};
