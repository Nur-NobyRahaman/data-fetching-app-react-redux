import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTodos } from "./components/actions/TodosActions";
import { Route, Routes } from "react-router";
import CounterApp from "./components/CounterApp";
import TodoApp from "./components/TodoApp";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <h1>Welcome to react redux</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TodoApp/>}></Route>
        <Route path="/counterApp" element={<CounterApp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
