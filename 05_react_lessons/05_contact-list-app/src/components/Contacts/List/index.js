import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
    });
  });
//   console.log("filtered",filtered);
  return (
    <div>
      <input
        placeholder="Filter Contact"
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
