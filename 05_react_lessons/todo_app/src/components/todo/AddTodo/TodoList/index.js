import React, { useState } from "react";

function TodoList({ todos, updateTodo }) {
  const [active, setActive] = useState("");
  const [filtered, setFiltered] = useState(todos);
  const handleDelete = (name) => {
    const updatedTodo = todos.filter((todo) => todo.name !== name);
    console.log("deleted", name, updatedTodo);
    updateTodo(updatedTodo);
    setFiltered(updatedTodo);
  };
  const handleFinished = (name) => {
    const updatedTodo = todos.map((todo) =>
      todo.name === name ? { ...todo, finished: !todo.finished } : todo
    );
    console.log("finished:", name, updatedTodo);
    updateTodo(updatedTodo);
    setFiltered(updatedTodo);

  };

  const handleFilters = (e) => {
    const filterType = e.target.name;
    switch (filterType) {
      case "all":
        setFiltered(todos);
        break;
      case "active":
        setFiltered(todos.filter((todo) => todo.finished === false));
        break;
      case "finished":
        setFiltered(todos.filter((todo) => todo.finished === true));
        break;
      default:
        setFiltered(todos);
        break;
    }
    setActive(filterType);
  };
  const handleToggleAll = () => {
    const updatedTodo = todos.map((todo) => ({
      ...todo,
      finished: true,
    }));
    updateTodo([...updatedTodo]);
    setFiltered([...updatedTodo]);
  };
  const handleClearFinished = () =>{
    const updatedTodo = todos.filter((todo) => todo.finished !== true);
    updateTodo(updatedTodo)
    setFiltered(updatedTodo);

  }
  const unfinished = todos.filter((todo) => !todo.finished);
  return (
    <div>
      <input
        type="checkbox"
        id="toggleAll"
        onClick={() => handleToggleAll()}
      />
      <label htmlFor="toggleAll">Mark all as complete</label>
      <ul className="list">
        {filtered.map((todo, k) => (
          <li key={k}>
            <span
              className={`btn btn-check ${todo.finished ? "" : ""}`}
              onClick={() => handleFinished(todo.name)}
            >
              Done
            </span>
            <span className={`todo_name ${todo.finished ? "finished" : ""}`}>
              {todo.name}
            </span>
            <span
              className="btn btn-delete"
              onClick={() => handleDelete(todo.name)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <div className="card-footer">
        <span className="">Todos left: {unfinished.length}</span>
        <div className="filters">
          <button
            className={`btn btn-filter  ${active === "all" ? "active" : ""}`}
            name="all"
            onClick={handleFilters}
          >
            All
          </button>
          <button
            className={`btn btn-filter  ${active === "active" ? "active" : ""}`}
            name="active"
            onClick={handleFilters}
          >
            Active
          </button>
          <button
            className={`btn btn-filter  ${
              active === "finished" ? "active" : ""
            }`}
            name="finished"
            onClick={handleFilters}
          >
            Finished
          </button>
        </div>
        <span className="" onClick={() => handleClearFinished()}>Clear completed</span>
      </div>
    </div>
  );
}

export default TodoList;
