import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders"; // Ensure you have these components
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import "./style.css"
import NewProduct from "./Products/new";
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
          <Route path="/" element={<Home />} /> 
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="products/:product_id" element={<ProductDetail />} />
        </Routes>
      </Box>
    </div>
  );
}

export default Admin;
