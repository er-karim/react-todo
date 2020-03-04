import { TOGGLE_SIDEBAR } from "./types";

export const toggleSidebar = () => {
  return dispatch => {
    return dispatch({
      type: TOGGLE_SIDEBAR
    });
  };
};
