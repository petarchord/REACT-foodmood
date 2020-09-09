import React from "react";
import styles from "./Home.module.scss";
import Food from "../Food/Food";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home_wrapper}>
        <h1>We deliver your favourite food fast and easy.</h1>
        <div className={styles.second_title}>
          <h2 id="second_title">
            What's your <span style={{ color: "coral" }}>food mood</span> today?
          </h2>
        </div>

        <Food />
      </div>
    </div>
  );
};

export default Home;
