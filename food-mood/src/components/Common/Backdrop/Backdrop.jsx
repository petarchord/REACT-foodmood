import React from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = ({ toggleSideDrawwer }) => {
  return (
    <div className={styles.backdrop} onClick={() => toggleSideDrawwer()}>
      <div className={styles.exit_btn}>x</div>
    </div>
  );
};

export default Backdrop;
