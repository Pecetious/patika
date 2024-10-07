import { useState } from "react";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
function Form() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return false;
    }
    const names = name.split(",");
    if (!names || !number) {
      return false;
    }
    dispatch(addContact({ id: nanoid(), name, phone_number: number }));

    setName("");
    setNumber("");
  };
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="btn">
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
