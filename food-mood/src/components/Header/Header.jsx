import React from "react";
import styles from "./Header.module.scss";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <HamburgerButton />
      </div>
      <a className={styles.logo} href="#">
        food mood
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Food</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className={styles.signin}>
              Sign in / Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
