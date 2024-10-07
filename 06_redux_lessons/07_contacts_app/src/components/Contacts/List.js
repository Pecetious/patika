import React from "react";
import { contactSelectors, deleteAllContacts } from "../../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
function List() {
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    if (window.confirm("This action can't be reversed")) {
      dispatch(deleteAllContacts());
    }
  };
  const contacts = useSelector(contactSelectors.selectAll);
  console.log(contacts);
  return (
    <>
      {total > 0 && (
        <div className="deleteAllBtn" onClick={() => handleDeleteAll()}>
          Delete All
        </div>
      )}
      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </>
  );
}

export default List;
