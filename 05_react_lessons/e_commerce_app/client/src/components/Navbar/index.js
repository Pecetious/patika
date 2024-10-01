import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
function Navbar() {
  const { loggedIn, user } = useAuth();
  const { items } = useBasket();
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/">eCommerce</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {!loggedIn ? (
            <>
              <Link to="/signin">
                <Button colorScheme="pink">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button colorScheme="pink">Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              {items.length > 0 && (
                <Link to="/basket">
                  <Button colorScheme="pink" variant="outline">
                    Basket ({items.length})
                  </Button>
                </Link>
              )}

              {user?.role ==="admin" &&(
                <Link to="/admin">
                  <Button colorScheme="pink" variant="ghost">Admin</Button>
                </Link>
              )}
              <Link to="/profile">
                <Button colorScheme="pink">Profile</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
