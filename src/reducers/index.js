import { combineReducers } from "redux";
import appReducer from "./app";
import todoReducer from "./todo";

export default combineReducers({
  app: appReducer,
  todos: todoReducer
});
