import "./App.css";
import Contacts from "./components/Contacts";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
