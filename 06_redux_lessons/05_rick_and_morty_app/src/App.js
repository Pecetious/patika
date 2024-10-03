import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
function App() {
  return (
    <Router>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/location">Locations</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/character/:character_id" element={<CharacterDetail />} />
        <Route path="/location/:loc_id" element={<LocationDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
