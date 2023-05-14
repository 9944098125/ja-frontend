import { TOGGLE_THEME } from "./Types";

export const toggleTheme = () => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};
