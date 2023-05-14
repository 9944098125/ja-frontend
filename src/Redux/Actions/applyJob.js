import { APPLY_JOB } from "./Types";
import { alertActions } from "./alertActions";
import api from "../Api/Api";

export const apply = (jobId, jobTitle) => async (dispatch) => {
  try {
    const res = await api.patch("/jobs/apply/" + jobId);
    if (res) {
      // console.log(res);
      dispatch({
        type: APPLY_JOB,
        payload: res.data && res.data.applied,
      });
      dispatch(
        alertActions.success(`Successfully Applied to the ${jobTitle} Job`)
      );
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    console.log(err);
  }
};
