import api from "../Api/Api";
import {
  GET_JOB_DETAILS_FAIL,
  GET_JOB_DETAILS_START,
  GET_JOB_DETAILS_SUCCESS,
} from "./Types";

export const getJobDetails = (jobId) => async (dispatch) => {
  dispatch({
    type: GET_JOB_DETAILS_START,
  });
  try {
    const detailsResponse = await api.get("/jobs/getJobs/" + jobId);
    if (detailsResponse) {
      // console.log(detailsResponse);
      dispatch({
        type: GET_JOB_DETAILS_SUCCESS,
        payload: detailsResponse.data.job,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_JOB_DETAILS_FAIL,
      payload: err.response.data.message,
    });
  }
};
