import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => setIsLoading(false))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {isLoading && <h1>Loading</h1>}
        {users.map((user) => {
          return (
            <li key={user.id}>
              <NavLink className={({isActive}) => isActive? 'active' : ""} to={`/user/${user.id}`}>{user.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default Users;
