import React from "react";

import styles from "./SideDrawwer.module.scss";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
const SideDrawwer = ({ toggleSideDrawwer }) => {
  return (
    <nav className={styles.side_drawwer}>
      <ul>
        <li>
          <Link
            onClick={() => {
              toggleSideDrawwer();
            }}
            to="/"
            className={styles.signin}
          >
            Sign in / Register
          </Link>
        </li>
        <li className={styles.divider}>
          <Link
            onClick={() => {
              toggleSideDrawwer();
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <LinkScroll
            onClick={() => {
              toggleSideDrawwer();
            }}
            to="second_title"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Food
          </LinkScroll>
        </li>
        <li>
          <Link
            onClick={() => {
              toggleSideDrawwer();
            }}
            to="/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              toggleSideDrawwer();
            }}
            to="/"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawwer;
