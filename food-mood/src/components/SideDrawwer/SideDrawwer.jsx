import React, { useState } from "react";
import SignInModal from "../Modals/SignInModal/SignInModal";
import styles from "./SideDrawwer.module.scss";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
const SideDrawwer = ({ toggleSideDrawwer }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <nav className={styles.side_drawwer}>
      <SignInModal open={modalIsOpen} setModal={setModalIsOpen} />
      <ul>
        <li>
          <Link
            onClick={() => {
              setModalIsOpen(true);
              //  toggleSideDrawwer();
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
