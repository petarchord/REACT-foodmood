import React from "react";
import styles from "./HamburgerButton.module.scss";

const HamburgerButton = () => {
  return (
    <button className={styles.hamburger_button}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default HamburgerButton;
