import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css"
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: 123123,
    },
    {
        fullname: "Can",
        phone_number: 423432,
    },
    {
        fullname: "Pecete",
        phone_number: 124124
    }
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="container">
        <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form
        addContact={setContacts}
        contacts={contacts}
      />
    </div>
  );
}

export default Contacts;
