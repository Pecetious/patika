import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import ProtectetRoute from "./pages/ProtectetRoute";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          {/* Define the routes for different components */}
          <div id="content">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:product_id" element={<ProductDetail />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/profile"
                element={<ProtectetRoute element={<Profile />} />}
              />
              <Route
                path="/admin/*"
                element={<ProtectetRoute element={<Admin />} admin={true} />}
              />
              <Route path="/basket" element={<Basket />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
export default App;
