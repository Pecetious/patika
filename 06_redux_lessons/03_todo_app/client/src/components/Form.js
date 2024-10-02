import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../redux/todos/todosSlice";
import Loading from "./Loading";
import Error from "./Error";
function Form() {
  const [title, setTitle] = useState("");
  const isLoading = useSelector((state) => state.todos.addTodoIsLoading);
  const error = useSelector((state) => state.todos.addTodoError);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    dispatch(addTodoAsync({ title }));
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        disabled={isLoading}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}

export default Form;
