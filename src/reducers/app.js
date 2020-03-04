import { TOGGLE_SIDEBAR } from "../actions/types";

const initialState = {
  sidebarCollapsed: false
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
      };
    default:
      return state;
  }
}
