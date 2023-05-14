import {
  GET_PROFILE_FAIL,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
} from "../Actions/Types";

const initialState = {
  user: null,
  failMessage: "",
  loading: false,
};

export default function getProfile(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        failMessage: payload,
      };
    default:
      return state;
  }
}
