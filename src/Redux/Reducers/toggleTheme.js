import { TOGGLE_THEME } from "../Actions/Types";

const initialState = {
  darkMode: true,
};

export default function toggleTheme(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
