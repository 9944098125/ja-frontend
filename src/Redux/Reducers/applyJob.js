import { APPLY_JOB } from "../Actions/Types";

const initialState = {
  applied: false,
};

export default function apply(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case APPLY_JOB:
      return {
        ...state,
        applied: payload,
      };
    default:
      return state;
  }
}
