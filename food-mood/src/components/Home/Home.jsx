import React from "react";
import styles from "./Home.module.scss";
import Food from "../Food/Food";
import { ImFacebook, ImInstagram, ImYoutube } from "react-icons/im";
import { FaArrowCircleUp } from "react-icons/fa";

const Home = () => {

  const changeTitle = () => {
    let title = document.getElementById("welcome_title");
    console.log("title:",title);
    let i = 1;  
    setInterval(function(){
      console.log("i:",i);
    switch(i)
    {
      case 0:
        {
          title.innerHTML = "We deliver your favourite food fast and easy.";
          i++;
          if(i === 3)
          i=0;
          break;
          
        }
      case 1:
        {
          title.innerHTML = "If you are hungry and not sure what to eat, you are on the right place.";
          i++;
          if(i === 3)
          i=0;
          break;
        }
      case 2:
        {
          title.innerHTML = "It is all about food. We are in the mission of serving your taste.";
          i++;
          if(i === 3)
          i=0;
          break;
        }
        
    }

    },5000);

  }
  return (
    <div onLoad={() => {changeTitle();}} className={styles.container}>
      <div className={styles.home_wrapper}>
        <h1 id="welcome_title">We deliver your favourite food fast and easy.</h1>
        {/* <h1 style={{display:"none"}}>If you are hungry and not sure what to eat, you are on the right place.</h1>
        <h1 style={{display:"none"}}>It is all about food. We are in the mission of serving your taste.</h1> */}
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
            <ImFacebook size="1.7em" color="white" />
            <ImInstagram size="1.7em" color="white" />
            <ImYoutube size="1.7em" color="white" />
          </div>
        </footer>
        <div className={styles.arrow_up}>
          <FaArrowCircleUp
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="1.7em"
            color="white"
          />
          <p>Take me to the top.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
