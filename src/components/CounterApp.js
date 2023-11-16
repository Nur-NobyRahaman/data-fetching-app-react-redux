import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddRequest,
  getResetRequest,
  getSubRequest,
} from "./actions/TodosActions";

const CounterApp = () => {
  const { count } = useSelector((state) => state?.CountReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <h4>{count}</h4>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <button onClick={() => dispatch(getAddRequest())}>Increment</button>
        <button onClick={() => dispatch(getSubRequest())}>Decrement</button>
        <button onClick={() => dispatch(getResetRequest())}>Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
