import axios from "axios";
import {
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "../constants/TodosConstants";
export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODO_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: GET_TODO_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODO_FAILED, payload: error.message });
  }
};

export const getAddRequest = () => {
  return { type: "ADD" };
};
export const getSubRequest = () => {
  return { type: "SUB" };
};
export const getResetRequest = () => {
  return { type: "RESET" };
};
// export const getTodoRequestSuccess = (todos) => {
//   return { type: GET_TODO_SUCCESS, payload: todos };
// };
// export const getTodoRequestFailed = (error) => {
//   return { type: GET_TODO_FAILED, payload: error };
// };
