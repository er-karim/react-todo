import { FETCH_TODO } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        items: [...action.payload]
      };
    default:
      return state;
  }
}
