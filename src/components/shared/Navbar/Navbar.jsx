import React from "react";
import { Link, useLocation } from "react-router-dom";

// Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  let name = useLocation().pathname;

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link className={name === "/" ? styles.active : null} to="/">
          List
        </Link>
        <Link
          className={name === "/mobile" ? styles.active : null}
          to="/mobile"
        >
          Mobile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
