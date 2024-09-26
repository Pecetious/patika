import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import Error404 from "./components/Error404";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/users"
            element={<Users />}
          />
          <Route
            path="/user/:id"
            element={<User />}
          />
          <Route
          path="*"
          element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
