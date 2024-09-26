import { useState } from "react";
import {useUser} from "../context/UserContext";
function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        username: "mseven",
        bio: "lorem ipsum doler sit amet",
      });
      setLoading(false);
    }, 500);
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>{loading ? "Loading" : "Login"}</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}

export default Profile;
