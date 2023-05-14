import {
  GET_JOB_DETAILS_START,
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_FAIL,
} from "../Actions/Types";

const initialState = {
  loading: false,
  details: [],
  failMessage: "",
};

export default function jobDetails(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_JOB_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: payload,
      };
    case GET_JOB_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload,
      };
    default:
      return state;
  }
}
