import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders"; // Ensure you have these components
import Products from "./Products";
import "./style.css"
function Admin() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Box mt="10">
        <Routes>
          {/* Define the routes here */}
          <Route path="/" element={<Home />} /> {/* Renders for /admin */}
          <Route path="orders" element={<Orders />} />{" "}
          {/* Renders for /admin/orders */}
          <Route path="products" element={<Products />} />{" "}
          {/* Renders for /admin/products */}
        </Routes>
      </Box>
    </div>
  );
}

export default Admin;
