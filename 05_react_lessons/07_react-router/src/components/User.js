import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);
  return (
    <div>
      <div>
        <h2>{user.name}</h2>
        {user && <code>{JSON.stringify(user)}</code>}
      </div>
      <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
    </div>
  );
}

export default User;
