import React from "react";
import styles from "./Header.module.scss";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { Link } from "react-router-dom";

const Header = ({ toggleSideDrawwer }) => {
  return (
    <header className={styles.header}>
      <div className={styles.hambruger_btn}>
        <HamburgerButton toggleSideDrawwer={toggleSideDrawwer} />
      </div>
      <Link className={styles.logo} to="/">
        food mood
      </Link>
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
