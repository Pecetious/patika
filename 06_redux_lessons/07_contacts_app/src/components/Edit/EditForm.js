import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contactsSlice";
import { useNavigate } from "react-router-dom";
function EditForm({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );
    navigate("/");
  };
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);

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
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
