import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destroy, toggle } from "../redux/todos/todosSlice";
function TodoList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };
  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked />
          <label>Learn Javascript</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn React</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Take someones life</label>
          <button className="destroy"></button>
        </div>
      </li>
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => {
                dispatch(toggle({ id: item.id }));
              }}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
