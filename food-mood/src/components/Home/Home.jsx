import React from "react";
import styles from "./Home.module.scss";
import Food from "../Food/Food";
import { ImFacebook, ImInstagram, ImYoutube } from "react-icons/im";

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
        <footer>
          <h2>food mood</h2>
          <p>Follow us.</p>
          <div className={styles.social_networks}>
            <ImFacebook size="1.5em" color="white" />
            <ImInstagram size="1.5em" color="white" />
            <ImYoutube size="1.5em" color="white" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
