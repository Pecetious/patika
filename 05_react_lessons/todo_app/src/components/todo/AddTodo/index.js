import React, { useState } from "react";

function AddTodo({ addTodo, todos }) {
  const [singleTodo, setSingleTodo] = useState({ name: "", finished: false });
//   useEffect(() => {
//     console.log(singleTodo);
//   }, [singleTodo]);
  const handleChange = (e) => {
    setSingleTodo({ ...singleTodo, [e.target.name]: e.target.value });
  };
  const handleSubmit = () =>{
    if(singleTodo.name ==="") return false;
    addTodo([...todos, singleTodo])
    setSingleTodo({name: ""})
  };
  return (
    <div>
      <input
        placeholder="What needs to be done?"
        onChange={handleChange}
        name="name"
        value={todos.name}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") {handleSubmit()};
        }}
      />
    </div>
  );
}

export default AddTodo;
