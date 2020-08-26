import React, { useContext } from "react";
import styles from "./HamburgerButton.module.scss";
import { GlobalContext } from "../../context/GlobalState";

const HamburgerButton = ({ toggleSideDrawwer }) => {
  return (
    <button
      className={styles.hamburger_button}
      onClick={() => {
        toggleSideDrawwer();
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default HamburgerButton;
