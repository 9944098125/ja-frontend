import {
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
} from "../Actions/Types";

const initialState = {
  loading: false,
  jobs: [],
  errMessage: "",
};

export default function jobs(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_JOBS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_JOBS_SUCCESS:
      return {
        loading: false,
        jobs: payload,
      };
    case GET_JOBS_FAIL:
      return {
        loading: false,
        errMessage: payload,
      };
    default:
      return state;
  }
}
