import React from "react";

import styles from "./SideDrawwer.module.scss";

const SideDrawwer = () => {
  return (
    <nav className={styles.side_drawwer}>
      <ul>
        <li>
          <a href="#" className={styles.signin}>
            Sign in / Register
          </a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawwer;
