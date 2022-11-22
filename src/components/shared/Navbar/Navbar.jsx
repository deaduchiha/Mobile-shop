import React from "react";
import { Link, useLocation } from "react-router-dom";

// Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  let name = useLocation().pathname;
  console.log(name);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link className={name === "/" && styles.active} to="/">
          List
        </Link>
        <Link className={name === "/mobile" && styles.active} to="/mobile">
          Mobile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
