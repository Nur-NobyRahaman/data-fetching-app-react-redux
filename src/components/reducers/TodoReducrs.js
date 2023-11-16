import {
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "../constants/TodosConstants";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
const countInitialState = {
  count: 0,
};
export const CountReducer = (state = countInitialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
      };
    case "SUB":
      let newCount = 0;
      if (state.count > 0) {
        newCount = state.count - 1
      }
      return {
        ...state,
        count: newCount,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        todos: [],
        error: null,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case GET_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        todos: [],
      };

    default:
      return state;
  }
};

export default TodoReducers;
