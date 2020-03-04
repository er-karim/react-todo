import { FETCH_TODO } from "./types";
import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_ENDPOINT}/todos`;

export const fetchTodos = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch({
          type: FETCH_TODO,
          payload: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
