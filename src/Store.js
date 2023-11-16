import { applyMiddleware, combineReducers, createStore } from "redux";
import TodoReducers, { CountReducer } from "./components/reducers/TodoReducrs";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todoReducer: TodoReducers,
    CountReducer: CountReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));
const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
