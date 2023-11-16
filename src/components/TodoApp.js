import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "./actions/TodosActions";

const TodoApp = () => {
    const { todos, isLoading, error } = useSelector((state) => state?.todoReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllTodos());
    }, []);
  return (
    <div>
      {isLoading && <p>Loading.....</p>}
      <section>
        {todos?.map((todo, index) => (
          <article key={todo?.id}>
            <h4>{todo?.id}</h4>
            <h4>{todo?.title}</h4>
          </article>
        ))}
      </section>
    </div>
  );
};

export default TodoApp;
