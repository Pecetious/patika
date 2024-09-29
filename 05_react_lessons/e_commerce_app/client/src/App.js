import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Navbar from './components/Navbar'
function App() {
  return <>
    <Router>
      <div>
        <Navbar/>
        {/* Define the routes for different components */}
        <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </div>
    </Router>
  </>;
}
function Home(){
  return <h2>Home</h2>
}
export default App;
