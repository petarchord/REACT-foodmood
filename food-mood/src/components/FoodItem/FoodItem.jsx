import React from "react";
import styles from "./FoodItem.module.scss";
import { Link } from "react-router-dom";

const FoodItem = ({ name, desc, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <Link to={`/food/${name.toLowerCase()}`}>
        <img src={img} alt="pizza image" />
        <h5>{name}</h5>
        </Link>
        
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FoodItem;
