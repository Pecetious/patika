import React, { useEffect, useState } from "react";
import axios from "axios";
function Users() {
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => setIsLoading(false))
      .catch((e) => console.log(e));
  }, []);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <h1>Loading</h1>}
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
}

export default Users;
