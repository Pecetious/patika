import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveFilter,
  clearCompleted,
  selectTodos,
} from "../redux/todos/todosSlice";
function ContentFooter() {
  const items = useSelector(selectTodos);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const itemsLeft = items.filter((item) => item.completed === false);
  const dispatch = useDispatch();
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft.length} </strong>
        {itemsLeft.length > 1 ? "items left" : "item left "}
      </span>

      <ul className="filters">
        <li>
          <a
            className={activeFilter === "all" ? "selected" : ""}
            href="#/"
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>

        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed{" "}
      </button>
    </footer>
  );
}

export default ContentFooter;
