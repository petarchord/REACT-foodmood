import React from "react";
import styles from "./Food.module.scss";
import FoodItem from "../FoodItem/FoodItem";

import pizza_img from "../../images/pizzas.jpg";
import burger_img from "../../images/burger.jpg";
import pasta_img from "../../images/pasta.jpg";

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
              img={burger_img}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FoodItem
              name="Pasta"
              desc="Check out our pastas"
              img={pasta_img}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Food;
