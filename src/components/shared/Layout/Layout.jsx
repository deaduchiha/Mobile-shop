import React from "react";

// Styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: "30px" }}>{children}</div>
    </div>
  );
};

export default Layout;
