import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "./styles.module.css";
function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className="logo">
            <Link to="/">eCommerce</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Link to="/signin">
            <Button colorScheme="pink">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="pink">Sign Up</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
