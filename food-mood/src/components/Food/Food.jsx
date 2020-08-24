import React from "react";
import styles from "./Food.module.scss";
import FoodItem from "../FoodItem/FoodItem";

import pizza_img from "../../images/pizzas.jpg";

const Food = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="#">
            <FoodItem
              name="Pizza"
              desc="Check out our hot pizzas"
              img={pizza_img}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FoodItem
              name="Burger"
              desc="Check out our delishes burgers"
              img={pizza_img}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FoodItem
              name="Pasta"
              desc="Check out our pastas"
              img={pizza_img}
            />
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Food;
