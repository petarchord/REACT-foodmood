import React from "react";
import styles from "./FoodItem.module.scss";

const FoodItem = ({ name, desc, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <img src={img} alt="pizza image" />
        <h5>{name}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FoodItem;
